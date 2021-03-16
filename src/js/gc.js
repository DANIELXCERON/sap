const { ipcRenderer } = require("electron");
const { dialog, app, Menu } = require("electron").remote;
const fs = require("fs");

const GCTextPreview = document.querySelector("#GCTextPreview");
const marcoPreview = document.querySelector("#marcoPreview");

/** icono de la aplicacion */
const iconPath = (__dirname, "../src/img/logo-icon.png");

/** barra de titulo personalizada */
const customTitlebar = require("custom-electron-titlebar");
var titlebar = new customTitlebar.Titlebar({
  backgroundColor: customTitlebar.Color.fromHex("#333"),
  // icon: iconPath,Menu.getApplicationMenu()
  // menu: Menu.getApplicationMenu()
});
const lang = app.getLocale();
dhx.i18n.setLocale("richtext", LOCALE[lang]);

/** barra de menu */
/** cargar gc file */
ipcRenderer.on("openFileGC", () => {
  dialog.showOpenDialog({
    title: "Abrir GC",
    buttonLabel: "Abrir",
    properties: ["openFile"],
    filters: [{ name: "SGC", extensions: ["sgc"] }],
  }).then((result) => {
    /**si no ha sido cancelado */
    if (!result.canceled) {
      /**se guarda la ruta del archivo sgc guardado */
      sessionStorage.setItem("sgc-path", result.filePaths[0].toString());
      /**luego carga los nuevos datos */
      fetch(result.filePaths[0])
        .then(res => res.json())
        .then(gcContent => {
          richtext.setValue(gcContent.textoGC.slice(24, -7), 'html');
          formGC.setValue({ "css": gcContent.textoGC.slice(13, 22) });
        });
    }
  }).catch((err) => {
    console.log(err);
  });
})

/** guardar gc file */
ipcRenderer.on("saveGC", () => {
  if (sessionStorage.getItem("sgc-path")) {
    const datosGC = {
      textoGC: `<spam class="${formGC.getValue().css}">${richtext.getValue('html')}</spam>`,
    };

    var fileGcContent = JSON.stringify(datosGC);
    fs.writeFile(sessionStorage.getItem("sgc-path"), fileGcContent, err => {
      if (err) throw err;
      iziToast.show({
        title: "GC guardado con exito",
        message: "",
        color: "green", // blue, red, green, yellow
      });
    }
    );
  } else {
    saveAsGC();
  }
})

/** guardar como... */
ipcRenderer.on("saveAsGC", () => {
  saveAsGC()
})
const saveAsGC = () => {
  const options = {
    defaultPath: `${app.getPath("documents")}/${richtext.getValue('text').slice(0, 25).replace(/(\r\n|\n|\r)/gm, "")}`,
    title: `Guarda GC ${richtext.getValue('text').slice(0, 20)}...`,
    buttonLabel: "Guardar",
    filters: [
      { name: "SGC", extensions: ["sgc"] },
      { name: "Json", extensions: ["json"] },
    ],
  };

  dialog.showSaveDialog(null, options).then((result) => {
    const datosGC = {
      textoGC: `<spam class="${formGC.getValue().css}">${richtext.getValue('html')}</spam>`,
    };

    var fileGcContent = JSON.stringify(datosGC);
    if (!result.canceled) {
      /**se guarda la ruta del archivo sgc guardado */
      sessionStorage.setItem("sgc-path", result.filePath.toString());

      fs.writeFile(result.filePath.toString(), fileGcContent, err => {
        if (err) throw err;
        iziToast.show({
          title: "GC guardado con exito",
          message: "",
          color: "green", // blue, red, green, yellow
        });
      });
    }
  }).catch((err) => {
    console.log(err);
  });
}

const formGC = new dhx.Form("formGC", {
  css: "my_form_css",
  padding: 20,
  rows: [
    {
      type: "slider",
      name: "speed",
      label: "Velocidad",
      helpMessage: "Velocidad de desplazamiento del texto",
      min: 1,
      max: 10,
      value: 5,
    },
    {
      type: "select",
      name: "css",
      value: "GCStyle-3",
      label: "CSS",
      helpMessage: "Selccione un estilo css",
      options: [
        {
          value: "GCStyle-0",
          content: "GCStyle-0"
        },
        {
          value: "GCStyle-1",
          content: "GCStyle-1"
        },
        {
          value: "GCStyle-2",
          content: "GCStyle-2"
        },
        {
          value: "GCStyle-3",
          content: "GCStyle-3"
        },
        {
          value: "GCStyle-4",
          content: "GCStyle-4"
        }
      ],
    },
  ]
});

// setear input de velocidad al guardar en localStorage
formGC.setValue({ "speed": parseInt(localStorage.getItem("SpeedGC")) });
// cada vez que se hace un cambio
formGC.getItem("speed").events.on("change", () => {
  // guardar ese cambio
  localStorage.setItem("SpeedGC", arguments[0][0]);
});

/** Editor de texto Enriquecido */


const richtext = new dhx.Richtext("richtext", {
  toolbarBlocks: [
    "undo",
    "style",
    "decoration",
    "colors",
    "clear"
  ]
});

richtext.toolbar.data.add({
  type: "button",
  value: "Play",
  id: "play"
}, 2);

richtext.toolbar.data.add({
  type: "button",
  value: "Preview",
  id: "Preview"
}, 3);

richtext.toolbar.events.on("click", id => {
  if (id === "play") {
    const datosGC = {
      textoGC: `<spam class="${formGC.getValue().css}">${richtext.getValue('html')}</spam>`,
    };
    ipcRenderer.send("datos:gc", datosGC);
  }
  if (id === "Preview") {
    // remover clase animacion
    GCTextPreview.classList.remove("moviendoGC");

    // Vista previa
    GCTextPreview.innerHTML = `<spam class="${formGC.getValue().css}">${richtext.getValue('html')}</spam>`,

      /**se calcula el tiempo de desplazamiento en bace
       * a la longitud del texto y a la velocidad
       * condigurada
       */
      GCTextPreview.style.cssText = `animation-duration:${Math.floor((5 * (marcoPreview.clientWidth + GCTextPreview.clientWidth)) / (formGC.getValue().speed * 100))}s;`;

    // agregar animacion css
    CSSAnimations.get("moviendoGC").setKeyframe("0%", {
      left: marcoPreview.clientWidth + "px",
    });
    CSSAnimations.get("moviendoGC").setKeyframe("100%", {
      left: -GCTextPreview.clientWidth + "px",
    });
    // agregar clase de animacion
    GCTextPreview.classList.add("moviendoGC");
  }
});