const { ipcRenderer } = require("electron");
const { dialog, app } = require("electron").remote;
const fs = require("fs");

// const textFormGC = document.querySelector("#textFormGC");
const CssPerFormGC = document.querySelector("#CssPerFormGC");
const SpeedGC = document.querySelector("#SpeedGC");
const GCTextPreview = document.querySelector("#GCTextPreview");
const marcoPreview = document.querySelector("#marcoPreview");

// setear input de velocidad a la guardada en localStorage
SpeedGC.value = localStorage.getItem("SpeedGC");
// cada vez que se hace un cambio
SpeedGC.addEventListener("change", (event) => {
  // guardar ese cambio
  localStorage.setItem("SpeedGC", SpeedGC.value);
});

/** barra de menu */
/** cargar gc file */
ipcRenderer.on("openGC", () => {
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
          .then((results) => results.json())
          .then(function (gcContent) {
            richtext.setValue(gcContent.textoGC.slice(24, -7), 'html');
            CssPerFormGC.value = gcContent.textoGC.slice(13, 22);
          });
      }
    }).catch((err) => {
      console.log(err);
    });
});

/** guardar gc file */
ipcRenderer.on("saveGC", () => {
  if (sessionStorage.getItem("sgc-path")) {
    const datosGC = {
      textoGC: `<spam class="${CssPerFormGC.value}">${richtext.getValue('html')}</spam>`,
    };

    var fileGcContent = JSON.stringify(datosGC);
    fs.writeFile(
      sessionStorage.getItem("sgc-path"),
      fileGcContent,
      function (err) {
        if (err) throw err;
        dhx.message({
          text: "GC guardado con exito",
          expire: 3000,
          icon: "dxi dxi-close",
          position: "bottom-right",
        });
      }
    );
  } else {
    saveAsGC();
  }
});

/** guardar como... */
ipcRenderer.on("saveAsGC", () => {
  saveAsGC();
});

function saveAsGC() {
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
        textoGC: `<spam class="${CssPerFormGC.value}">${richtext.getValue('html')}</spam>`,
      };

      var fileGcContent = JSON.stringify(datosGC);
      if (!result.canceled) {
        /**se guarda la ruta del archivo sgc guardado */
        sessionStorage.setItem("sgc-path", result.filePath.toString());

        fs.writeFile(result.filePath.toString(), fileGcContent, function (err) {
          if (err) throw err;
          dhx.message({
            text: "GC guardado con exito",
            expire: 3000,
            icon: "dxi dxi-close",
            position: "bottom-right",
          });
        });
      }
    }).catch((err) => {
      console.log(err);
    });
}

/** Editor de texto Enriquecido */
const locale = {
  es: {
    apply: "Aplicar",
    undo: "Deshacer",
    redo: "Rehacer",
    selectFontFamily: "Fuente",
    selectFontSize: "Tamaño de fuente",
    selectFormat: "Estilo",
    selectTextColor: "Color de texto",
    selectTextBackground: "Color de fondo",
    markBold: "Bold",
    markItalic: "Italic",
    markStrike: "Strike",
    markUnderline: "Subrayar",
    alignLeft: "Alinear a la izquierda",
    alignCenter: "Alinear al centro",
    alignRight: "Alinear a la derecha",
    addLink: "Añadir enlace",
    clearFormat: "Formato claro",
    fullscreen: "Pantalla completa",
    removeLink: "Remover enlace",
    edit: "Editar",
    h1: "Título 1",
    h2: "Título 2",
    h3: "Título 3",
    h4: "Título 4",
    h5: "Título 5",
    h6: "Título 6",
    p: "Texto normal",
    blockquote: "Cotización en bloque",
    stats: "Estadísticas",
    chars: "caracteres",
    charsExlSpace: "Caracteres sin espacios ",
    words: "palabras" 
  }
};
dhx.i18n.setLocale("richtext", locale["es"]);
const richtext = new dhx.Richtext("richtext", {
  toolbarBlocks: [
    "undo",
    "style",
    "decoration",
    "colors",
    "clear",
    "stats"
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

richtext.toolbar.events.on("click", function(id) {
  if (id === "play") {
    const datosGC = {
      textoGC: `<spam class="${CssPerFormGC.value}">${richtext.getValue('html')}</spam>`,
    };
    ipcRenderer.send("datos:gc", datosGC);
  }
  if (id === "Preview") {
    // remover clase animacion
    GCTextPreview.classList.remove("moviendoGC");

    // Vista previa
    GCTextPreview.innerHTML = `<spam class="${CssPerFormGC.value}">${richtext.getValue('html')}</spam>`,

    /**se calcula el tiempo de desplazamiento en bace
     * a la longitud del texto y a la velocidad
     * condigurada
     */
    GCTextPreview.style.cssText = `animation-duration:${Math.floor( (5 * (marcoPreview.clientWidth + GCTextPreview.clientWidth)) / (SpeedGC.value * 100))}s;`;

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