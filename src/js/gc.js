const { ipcRenderer } = require("electron");
const { dialog, app } = require("electron").remote;
const fs = require("fs");

const BtnGenerarGC = document.querySelector("#BtnGenerarGC");
const BtnPreviewGCtextStyle = document.querySelector("#BtnPreviewGCtextStyle");
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
  dialog
    .showOpenDialog({
      title: "Abrir GC",
      buttonLabel: "Abrir",
      properties: ["openFile"],
      filters: [{ name: "SGC", extensions: ["sgc"] }],
    })
    .then((result) => {
      /**si no ha sido cancelado */
      if (!result.canceled) {
        /**se guarda la ruta del archivo sgc guardado */
        sessionStorage.setItem("sgc-path", result.filePaths[0].toString());
        /**luego carga los nuevos datos */
        fetch(result.filePaths[0])
          .then((results) => results.json())
          .then(function (gcContent) {
            document.querySelector(
              "#editor-container > div.ql-editor"
            ).innerHTML = gcContent.textoGC.slice(24, -7);
            CssPerFormGC.value = gcContent.textoGC.slice(13, 22);
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

/** guardar gc file */
ipcRenderer.on("saveGC", () => {
  if (sessionStorage.getItem("sgc-path")) {
    const datosGC = {
      textoGC:
        '<spam class="' +
        CssPerFormGC.value +
        '">' +
        document.querySelector("#editor-container > div.ql-editor").innerHTML +
        "</spam>",
    };

    var fileGcContent = JSON.stringify(datosGC);
    fs.writeFile(
      sessionStorage.getItem("sgc-path"),
      fileGcContent,
      function (err) {
        if (err) throw err;
        sapsuite.message({
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
    defaultPath:
      app.getPath("documents") +
      "/" +
      document
        .querySelector("#editor-container > div.ql-editor")
        .innerText.slice(0, 25)
        .replace(/(\r\n|\n|\r)/gm, ""),
    title:
      "Guarda GC " +
      document
        .querySelector("#editor-container > div.ql-editor")
        .innerText.slice(0, 20) +
      "...",
    buttonLabel: "Guardar",
    filters: [
      { name: "SGC", extensions: ["sgc"] },
      { name: "Json", extensions: ["json"] },
    ],
  };

  dialog
    .showSaveDialog(null, options)
    .then((result) => {
      const datosGC = {
        textoGC:
          '<spam class="' +
          CssPerFormGC.value +
          '">' +
          document.querySelector("#editor-container > div.ql-editor")
            .innerHTML +
          "</spam>",
      };

      var fileGcContent = JSON.stringify(datosGC);
      if (!result.canceled) {
        /**se guarda la ruta del archivo sgc guardado */
        sessionStorage.setItem("sgc-path", result.filePath.toString());

        fs.writeFile(result.filePath.toString(), fileGcContent, function (err) {
          if (err) throw err;
          sapsuite.message({
            text: "GC guardado con exito",
            expire: 3000,
            icon: "dxi dxi-close",
            position: "bottom-right",
          });
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

BtnGenerarGC.addEventListener("click", (e) => {
  e.preventDefault();
  const datosGC = {
    textoGC:
      '<spam class="' +
      CssPerFormGC.value +
      '">' +
      document.querySelector("#editor-container > div.ql-editor").innerHTML +
      "</spam>",
  };
  ipcRenderer.send("datos:gc", datosGC);
});

BtnPreviewGCtextStyle.addEventListener("click", (e) => {
  // remover clase animacion
  GCTextPreview.classList.remove("moviendoGC");

  // Vista previa
  GCTextPreview.innerHTML =
    '<spam class="' +
    CssPerFormGC.value +
    '">' +
    document.querySelector("#editor-container > div.ql-editor").innerHTML +
    "</spam>";

  /**se calcula el tiempo de desplazamiento en bace
   * a la longitud del texto y a la velocidad
   * condigurada
   */
  GCTextPreview.style.cssText =
    "animation-duration:" +
    Math.floor(
      (5 * (marcoPreview.clientWidth + GCTextPreview.clientWidth)) /
        (SpeedGC.value * 100)
    ) +
    "s;";

  // agregar animacion css
  CSSAnimations.get("moviendoGC").setKeyframe("0%", {
    left: marcoPreview.clientWidth + "px",
  });
  CSSAnimations.get("moviendoGC").setKeyframe("100%", {
    left: -GCTextPreview.clientWidth + "px",
  });
  // agregar clase de animacion
  GCTextPreview.classList.add("moviendoGC");
});

/** Editor de texto Enriquecido */

// Agregar fuentes a la lista blanca
var Font = Quill.import("formats/font");
Font.whitelist = ["lato", "comfortaa", "jua", "poppins", "roboto"];
Quill.register(Font, true);
// Agregar tamaños
var SizeStyle = Quill.import("attributors/style/size");
Quill.register(SizeStyle, true);

var quill = new Quill("#editor-container", {
  modules: {
    toolbar: "#toolbar-container",
    syntax: false,
  },
  theme: "snow",
});
