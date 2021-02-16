/** modulos node y electron */
const fs = require("fs");
const path = require("path");
const { dialog, app} = require("electron").remote;
const { ipcRenderer } = require("electron");
const { shell } = require("electron");
const https = require("https");


/** Mis modulos */
const nTF = require("../src/js/modules/nice-time-format");
const getTime = require("../src/js/modules/reloj");
const progressBar = require("../src/js/modules/progress-bar.js");
const PlayListDB = require("../src/js/modules/playlist-db");



/**definir idioma para suite dhmtlx */
const lang = app.getLocale()
dhx.i18n.setLocale("calendar", LOCALE[lang]);
dhx.i18n.setLocale("timepicker", LOCALE[lang]);
dhx.i18n.setLocale("combobox", LOCALE[lang]);


/** icono de la aplicacion */
const iconPath = (__dirname, "../src/img/logo-icon.png");

/** barra de titulo personalizada */
const customTitlebar = require("custom-electron-titlebar");
var titlebar = new customTitlebar.Titlebar({
  backgroundColor: customTitlebar.Color.fromHex("#333"),
  icon: iconPath,
  enableMnemonics: true,

});

/** Barra de estado*/
function StatusBar(item) {
  const statusBar = document.querySelector("#statusBar");
  var conntentStatusBar = `${item.namefile}`;
  statusBar.innerHTML = conntentStatusBar;
}

/** modulo para la informacion de la media */
var ffprobeStaticPath = "";
if (!__dirname.includes(".asar")) {
  // Si es dev
  ffprobeStaticPath = require("ffprobe-static");
} else {
  // si se compila
  let ext = "";
  // if (process.platform === 'win32') ext = '.exe' // si windows
  // ffprobeStaticPath = path.join(process.resourcesPath + '/ffprobe' + ext)
  ffprobeStaticPath = require(path.join(
    process.resourcesPath + "/app.asar.unpacked/node_modules/ffprobe-static"
  ));
}
var ffprobe = require("ffprobe"),
  ffprobeStatic = ffprobeStaticPath;

/** cargar configuracion de config.json en el localStorage */
fetch("../config/config.json")
  .then((results) => results.json())
  .then(function (config) {
    localStorage.setItem("JSON_config", JSON.stringify(config));
  });
// si no esta SpeedGC en localStorage
if (!localStorage.getItem("SpeedGC")) {
  // crear Speed GC en localStorage con valor de 5
  localStorage.setItem("SpeedGC", "5");
}

/** Elementos del DOM */
const MainWindowTitlebar = document.querySelector(".window-title");
const abrirArchivo = document.querySelector("#abrirArchivo");
const detenerWebVideo = document.querySelector("#detenerWebVideo");
const controlPlay = document.querySelector("#controlPlay");
const controlPause = document.querySelector("#controlPause");
const controlStop = document.querySelector("#controlStop");
const controlForward = document.querySelector("#controlForward");

const ViewGraSwitch = document.querySelector("#ViewGraSwitch");
const SafeAreaSwitch = document.querySelector("#SafeAreaSwitch");
const DurationListViewDOM = document.querySelector("#DurationListViewDOM");

const progressBarDom = document.querySelector("#progressBarDom");
const timeDisplay = document.querySelector("#timeDisplay");

const progressBarDomAD = document.querySelector("#progressBarDomAD");
const timeDisplayAD = document.querySelector("#timeDisplayAD");


//evento al cargar la pagina
window.addEventListener("load", () => {
  /** Inicia reloj en la barra de titulo de la ventana principal */
  getTime.startClock(["hms24", " | ", "FullDate"], MainWindowTitlebar);

  /** Cargar las configuraciones */
  if (localStorage.getItem("FolderPlayListFiles")) {
    cargarTableFromFolder(
      JSON.parse(localStorage.getItem("FolderPlayListFiles")),
      localStorage.getItem("FolderPlayListFolder")
    );
  }
  /** Cargar ultima lista queue y ultimo video */

  if (localStorage.getItem("slst-path")) {
    loadFileSLST(localStorage.getItem("slst-path"));
  }
  if (localStorage.getItem("DataGrid")) {
    var grid_queue_data = JSON.parse(localStorage.getItem("DataGrid"));
    grid_queue.data.add(grid_queue_data);
  }
  if (localStorage.getItem("NextVideoData")) {
    var dataVideoCurrent = JSON.parse(localStorage.getItem("DataVideoCurrent"));

    ipcRenderer.send("datos:stream", {
      referencia: "file-video",
      url: dataVideoCurrent.srcVideoCurrent,
      in: dataVideoCurrent.TiempoTranscurrido,
    });
  }
});

// ocultar mostrar Video Loop & Banner
window.addEventListener("load", () => {
  ViewGraSwitch &&
    (initHiden(),
    ViewGraSwitch.addEventListener("change", () => {
      resetHiden();
    }));
});

function MostrarG() {
  const datosStream = {
    referencia: "ocultar-mostrar-video-loop",
    valor: "mostrar",
  };
  ipcRenderer.send("datos:stream", datosStream);
}

function OcultarG() {
  const datosStream = {
    referencia: "ocultar-mostrar-video-loop",
    valor: "ocultar",
  };
  ipcRenderer.send("datos:stream", datosStream);
}

function initHiden() {
  const e =
    null !== localStorage.getItem("ViewGraSwitch") &&
    "HiddenGraphics" === localStorage.getItem("ViewGraSwitch");
  (ViewGraSwitch.checked = e), e ? MostrarG() : OcultarG();
}

function resetHiden() {
  ViewGraSwitch.checked
    ? (MostrarG(), localStorage.setItem("ViewGraSwitch", "HiddenGraphics"))
    : (OcultarG(), localStorage.removeItem("ViewGraSwitch"));
}

// ocultar mostrar Safe Area
SafeAreaSwitch.addEventListener("change", () => {
  if (SafeAreaSwitch.checked) {
    const datosStream = {
      referencia: "ocultar-mostrar-safe-area",
      valor: "mostrar",
    };
    ipcRenderer.send("datos:stream", datosStream);
  } else {
    const datosStream = {
      referencia: "ocultar-mostrar-safe-area",
      valor: "ocultar",
    };
    ipcRenderer.send("datos:stream", datosStream);
  }
});

/** botones de la pestaña live stream */
detenerWebVideo.addEventListener("click", (e) => {
  const datosStream = {
    referencia: "stopStream",
  };
  ipcRenderer.send("datos:stream", datosStream);
  e.preventDefault();
});

var formLive = new dhx.Form("formLive", {
  css: "my_form_css",
  padding: 20,
  rows: [
      {
          type: "select",
          name: "server",
          value: "anyone",
          label: "Server",
          labelPosition: "left",
          helpMessage: "Selccione un servidor",
          options: [
              {
                  value: "anyone",
                  content: "anyone"
              },
              {
                  value: "livestream",
                  content: "livestream"
              },
              {
                  value: "facebook",
                  content: "facebook"
              },
              {
                  value: "youtube",
                  content: "youtube"
              }
          ],
      },
      {
          type: "input",
          label: "Url",
          labelPosition: "left",
          icon: "dxi dxi-link-variant",
          name: "url",
          value: "https://player-cdn.logicideas.media/embed/LI29a62fa1",
      },
      {
        name: "scale",
        type: "slider",
        label: "Escala",
        labelPosition: "left",
        helpMessage: "Ajusta la escala si la orientación del video es vertical",
        min: 0,
        max: 1080,
        value: 720,
      },
  ]
});
document.querySelector("#set_value").addEventListener("click", function() {
  const datosStream = {
    referencia: formLive.getValue().server,
    url: formLive.getValue().url,
  };
  ipcRenderer.send("datos:stream", datosStream);
});
/** entrada para setear la escala en live stream de facebook
 * cuando la orientación del video es vertical
 */
formLive.getItem("scale").events.on("change", function () {
  const datosStream = {
    referencia: "SetAspectRatioForFacebook",
    numberAspectRatio: arguments[0][0],
  };
  ipcRenderer.send("datos:stream", datosStream);
});

/** Botones del control del reproductor principal */
controlPlay.addEventListener("click", (e) => {
  ipcRenderer.send("control:player", "play");
  e.preventDefault();
});
controlPause.addEventListener("click", (e) => {
  ipcRenderer.send("control:player", "pause");
  e.preventDefault();
});
controlStop.addEventListener("click", (e) => {
  ipcRenderer.send("control:player", "stop");
  e.preventDefault();
});
controlForward.addEventListener("click", (e) => {
  ipcRenderer.send("control:player", "forward");
  e.preventDefault();
});

////////////////////////////// LIST QUEUE ///////////////////////////////////////////////
/** crear nueva lista en grid_queue_container */
var grid_queue = new dhx.Grid("grid_queue_container", {
  css: "my_grid_css",
  columns: [
    { width: 200, id: "namefile", header: [{ text: "Nombre" }] },
    {
      width: 100,
      id: "duration",
      header: [{ text: "Duración" }],
      template: function (text, row, col) {
        return `
        <span class='item_2'> <i class="fad fa-clock"></i> ${nTF.secToHHMMSS(text)}</span>`;
      },
    },
    {
      width: 100,
      id: "ref",
      header: [{ text: "Tipo" }],
      template: function (text, row, col) {
        return `<i class="fas fa-${text}"></i> ${text}`;
      },
    },
    {
      width: 100,
      id: "in",
      header: [{ text: "Iniciar" }],
      template: function (text, row, col) {
        return `<span class='item_2'><i class="fas fa-forward"></i> ${nTF.secToHHMMSS(
          text
        )}</span>`;
      },
    },
    { width: 200, id: "path", header: [{ text: "Ruta" }] },
  ],
  rowHeight: 25,
  // width: 500,
  height: 400,
  rowCss: function (row) { return row.custom ? row.custom : "bg_id_Block" },
  htmlEnable: true,
  dragMode: "both",
  dragCopy: false,
  selection: "row",
  resizable: true,
  // editable:true,
  // adjust: true,
});
 
/** Controles de la grilla */
const grid_jsonFile_btn = document.querySelector("#grid_jsonFile_btn");
const grid_remove_btn = document.querySelector("#grid_remove_btn");
const grid_save_btn = document.querySelector("#grid_save_btn");

/** Boton cargar lista desde archivo */
grid_jsonFile_btn.addEventListener("click", () => {
  dialog
    .showOpenDialog({
      title: "Selecciona tu lista",
      buttonLabel: "Agregar",
      properties: ["openFile"],
      filters: [
        { name: "Json", extensions: ["json"] },
        { name: "playlist file", extensions: ["plst"] },
      ],
    })
    .then((result) => {
      /**si no ha sido canselado */
      if (!result.canceled) {
        if (grid_queue.data._order && grid_queue.data._order.length > 0) {
          /**si hay datos en la lista borrarlos primero */
          grid_queue.data._order.forEach((item) => {
            grid_queue.data.remove(item.id);
          });
        }
        /**luego carga los nuevos datos */
        var pathListJson = result.filePaths[0];
        grid_queue.data.load(pathListJson);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
/** Boton guardar lista */
grid_save_btn.addEventListener("click", () => {
  const options = {
    defaultPath: app.getPath("documents") + "/000-Playlist",
    title: "Guarda PlayList",
    buttonLabel: "Guardar",
    filters: [
      { name: "Json", extensions: ["json"] },
      { name: "playlist file", extensions: ["plst"] },
    ],
  };

  dialog
    .showSaveDialog(null, options)
    .then((result) => {
      var dataFilePlayList = JSON.stringify(grid_queue.data._order);
      if (!result.canceled) {
        fs.writeFile(
          result.filePath.toString(),
          dataFilePlayList,
          function (err) {
            if (err) throw err;
            console.log("PlayList Grid Guardada");
          }
        );
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
/** Boton de eliminar item */
grid_remove_btn.addEventListener("click", function () {
  var cell = grid_queue.selection.getCell();
  if (cell.row) {
    grid_queue.data.remove(cell.row.id);
  }
});
/** END Controles de la lista */

/** ver duracion de la grilla */
grid_queue.events.on("CellMouseOver", function (row, column, e) {
  let duration = 0;
  let numElements = grid_queue.data._order.length;
  grid_queue.data._order.forEach((element) => {
    duration += parseFloat(element.duration);
  });

  DurationListViewDOM.innerHTML = `
  ${
    grid_queue._getRowIndex(row.id) + 1
  } de ${numElements}, duracion total: ${nTF.secToHHMMSS(duration)}
  `;
});

/** al hacer doble click en un item */
grid_queue.events.on("CellDblClick", function (cell, e) {
  /** remover css de todos */
  grid_queue.data._order.forEach((row) => {
    grid_queue.removeRowCss(row.id, "bg_id_Next");
    grid_queue.removeRowCss(row.id, "bg_id_Current");
  });

  /**enviar a reproducir */
  SendFileToPlay({
    referencia: cell.ref,
    url: cell.path,
    in: cell.in,
    id: cell.id,
  });
});

ipcRenderer.on("datos:videoactual", (e, videoActualTime) => {

  /** Bara de progreso */
  let barvalue = progressBar.setBar(
    videoActualTime.TiempoTranscurrido,
    videoActualTime.TiempoDuracion,
    false
  );
  progressBarDom.style.width = `${barvalue.progressBar}%`;
  progressBarDom.style.backgroundColor = `${barvalue.bgColor}`;

  /**Mostrar datos en la barra */
  timeDisplay.innerHTML = `
  ${nTF.secToHHMMSS(videoActualTime.TiempoTranscurrido)}
  /
  ${nTF.secToHHMMSS(videoActualTime.TiempoDuracion)} | ${nTF.secToHHMMSS(
    videoActualTime.TiempoRestante
  )}/${nTF.secToHHMMSS(videoActualTime.TiempoRelojFin)}
  `;

  /**ejecutar al faltar 2 segundos */
  var remaining = 2;
  var secRemaining = videoActualTime.TiempoRestante;
  if (remaining + 0.3 >= secRemaining && secRemaining >= remaining) {
    /**pintar siguiente */
    var index = parseInt(localStorage.getItem("CurrentVideoIndex"));

    if (index < grid_queue.data._order.length - 1) {
      index += 1;
    } else {
      index = 0;
    }
    let data = grid_queue.data._order[index];
    const NextVideo = {
      namefile: data.namefile,
      path: data.path,
      ref: data.ref,
      in: data.in,
      id: data.id,
    };
    grid_queue.addRowCss(data.id, "bg_id_Next");
    localStorage.setItem("NextVideoData", JSON.stringify(NextVideo));
    localStorage.setItem("DataGrid", JSON.stringify(grid_queue.data._order));
  }

  /**Al finalizar la reproduccion */
  if (secRemaining == 0) {
    NextVideo();
  }
});

function NextVideo() {
  /** primero comprobar la existencia de datos */
  if (
    grid_queue.data._order &&
    parseInt(localStorage.getItem("CurrentVideoIndex")) <
      grid_queue.data._order.length
  ) {
    /** si el item es temporal lo elimina de la cola al finalizar */
    var temporal =
      grid_queue.data._order[
        parseInt(localStorage.getItem("CurrentVideoIndex"))
      ].temp;
    if (temporal) {
      grid_queue.data.remove(
        grid_queue.data.getId(
          parseInt(localStorage.getItem("CurrentVideoIndex"))
        )
      );
    }
  }

  var item = JSON.parse(localStorage.getItem("NextVideoData"));
  StatusBar(item);

  SendFileToPlay({
    referencia: item.ref,
    url: item.path,
    in: item.in,
    id: item.id,
  });

  if (
    parseInt(localStorage.getItem("CurrentVideoIndex")) <
    grid_queue.data._order.length - 1
  ) {
    // no esta de ultimo
    if (parseInt(localStorage.getItem("CurrentVideoIndex")) === 0) {
      // esta de primero
      grid_queue.removeRowCss(
        grid_queue.data.getId(grid_queue.data._order.length - 1),
        "bg_id_Current"
      );
      grid_queue.removeRowCss(grid_queue.data.getId(0), "bg_id_Next");
    } else {
      // esta en el medio
      grid_queue.removeRowCss(
        grid_queue.data.getId(
          parseInt(localStorage.getItem("CurrentVideoIndex")) - 1
        ),
        "bg_id_Current"
      );
      grid_queue.removeRowCss(
        grid_queue.data.getId(
          parseInt(localStorage.getItem("NextVideoIndex")) - 1
        ),
        "bg_id_Next"
      );
    }
  } else {
    // esta de ultimo
    if (parseInt(localStorage.getItem("CurrentVideoIndex"))) {
      grid_queue.removeRowCss(
        grid_queue.data.getId(
          parseInt(localStorage.getItem("CurrentVideoIndex")) - 1
        ),
        "bg_id_Current"
      );
    }
    grid_queue.removeRowCss(
      grid_queue.data.getId(grid_queue.data._order.length - 1),
      "bg_id_Next"
    );
  }
}

/**Drop & Drag Files */
function dropHandler(ev) {
  ev.preventDefault();
  // Utilice la interfaz DataTransferItemList para acceder a los archivos
  for (var i = 0; i < ev.dataTransfer.items.length; i++) {
    // Si los elementos caídos no son archivos, rechácelos
    if (ev.dataTransfer.items[i].kind === "file") {
      let file = ev.dataTransfer.items[i].getAsFile();

      ffprobe(file.path, { path: ffprobeStatic.path })
        .then(function (info) {
          grid_queue.data.add(
            {
              namefile: filename(file.path),
              ref: "file-video",
              path: file.path,
              duration: info.streams[0].duration,
              in: 0,
              custom: "bg_id_Block",
            },
            getIndexAddGrid(grid_queue)
          );
        })
        .catch(function (err) {
          console.error(err);
        });
    }
  }
  // para la limpieza
  if (ev.dataTransfer.items) {
    // Utilice la interfaz DataTransferItemList para eliminar los datos de arrastre
    ev.dataTransfer.items.clear();
  } else {
    // Utilice la interfaz DataTransfer para eliminar los datos de arrastre
    ev.dataTransfer.clearData();
  }
}

function dragOverHandler(ev) {
  ev.preventDefault();
}
/** Drop & Drag Files, Ends*/
////////////////////////////// END LIST QUEUE ///////////////////////////////////////////


////////////////////////////// AD QUEUE ///////////////////////////////////////////////
/** crear nueva lista en grid_queue_ad_container */
var grid_ad_queue = new dhx.Grid("grid_queue_ad_container", {
  css: "my_grid_css",
  columns: [
    { width: 200, id: "namefile", header: [{ text: "Nombre" }] },
    {
      width: 100,
      id: "duration",
      header: [{ text: "Duración" }],
      template: function (text, row, col) {
        return `<span class='item_2'> <i class="fad fa-clock"></i> ${nTF.secToHHMMSS(
          text
        )}</span>`;
      },
    },
    {
      width: 100,
      id: "ref",
      header: [{ text: "Tipo" }],
      template: function (text, row, col) {
        return `<i class="fas fa-${text}"></i> ${text}`;
      },
    },
    {
      width: 100,
      id: "in",
      header: [{ text: "Iniciar" }],
      template: function (text, row, col) {
        return `<span class='item_2'><i class="fas fa-forward"></i> ${nTF.secToHHMMSS(
          text
        )}</span>`;
      },
    },
    { width: 200, id: "path", header: [{ text: "Ruta" }] },
  ],
  rowHeight: 25,
  // width: 500,
  height: 400,
  rowCss: function (row) {
    return row.custom;
  },
  htmlEnable: true,
  dragMode: "both",
  dragCopy: false,
  selection: "row",
  resizable: true,
  // editable:true,
  // adjust: true,
});
/** al hacer doble click en un item */
grid_ad_queue.events.on("CellDblClick", function (cell, e) {
  /** remover css de todos */
  grid_ad_queue.data._order.forEach((row) => {
    grid_ad_queue.removeRowCss(row.id, "bg_id_Next");
    grid_ad_queue.removeRowCss(row.id, "bg_id_Current");
  });

  /**enviar a reproducir */
  SendFileToPlay2({
    referencia: cell.ref,
    url: cell.path,
    in: cell.in,
    id: cell.id,
  });
});

ipcRenderer.on("datos:videoactual2", (e, videoActualTime) => {

  /** Bara de progreso */
  let barvalue = progressBar.setBar(
    videoActualTime.TiempoTranscurrido,
    videoActualTime.TiempoDuracion,
    false
  );
  progressBarDomAD.style.width = `${barvalue.progressBar}%`;
  progressBarDomAD.style.backgroundColor = `${barvalue.bgColor}`;

  /**Mostrar datos en la barra */
  timeDisplayAD.innerHTML = `
  ${nTF.secToHHMMSS(videoActualTime.TiempoTranscurrido)}
  /
  ${nTF.secToHHMMSS(videoActualTime.TiempoDuracion)} | ${nTF.secToHHMMSS(
    videoActualTime.TiempoRestante
  )}/${nTF.secToHHMMSS(videoActualTime.TiempoRelojFin)}
  `;

  var secRemaining = videoActualTime.TiempoRestante;

  /**Al finalizar la reproduccion */
  if (secRemaining == 0 && grid_ad_queue.data._order.length > 0) {

    /**va eliminando los items */
    grid_ad_queue.data.remove(grid_ad_queue.data.getId(0));

    controlPlayerAD();
  }
});

function controlPlayerAD(){
  if (grid_ad_queue.data._order && grid_ad_queue.data._order.length > 0){
    ipcRenderer.send("control:player", "pause");
    var item = grid_ad_queue.data._order[0]
    SendFileToPlay2({
      referencia: item.ref,
      url: item.path,
      in: item.in,
      id: item.id,
    }); 
  }else{
    ipcRenderer.send("control:player", "play");
    ipcRenderer.send("control:player2", "stop");
  }
}
////////////////////////////// END AD QUEUE ///////////////////////////////////////////


////////////////////////////// GRAPHIC LIST /////////////////////////////////////////////
cargarPlayListMain();
abrirArchivo.addEventListener("click", () => {
  dialog
    .showOpenDialog({
      title: "Selecciona tu video de gráficos",
      buttonLabel: "Agregar",
      properties: ["openFile"],
      filters: [
        {
          name: "video con soporte de canal alfa",
          extensions: ["webm", "mov"],
        },
        { name: "Todos", extensions: ["*"] },
      ],
    })
    .then((result) => {
      var rutaArchivo = result.filePaths[0];

      ffprobe(rutaArchivo, { path: ffprobeStatic.path })
        .then(function (info) {
          PlayListDB.agregarPlaylist(
            filename(rutaArchivo),
            info.streams[0].codec_long_name,
            rutaArchivo
          );
          cargarPlayListMain();
        })
        .catch(function (err) {
          console.error(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

function getVd(rutaArchivo) {
  ffprobe(rutaArchivo, { path: ffprobeStatic.path })
    .then(function (info) {
      return info.streams[0].coded_height;
    })
    .catch(function (err) {
      console.error(err);
    });
}

function generarHtmlPlaylist(videos) {
  return `
  <div class="col mb-4">
  <div class="card">
  <video id="videoPlayerPreView" src="${videos.ruta}" class="card-img-top" preload="none" controls muted></video>
  <div class="card-body">
     <h5 class="card-title">${videos.nombre}</h5>
     <p class="card-text">Codec ${videos.codec}</p>
     <button type="button" class="btn btn-danger mb-2" onclick="eliminarVideoDeLaLista('${videos._id}');" ><span class="material-icons">delete_forever</span></button>
     <button type="button" class="btn btn-success mb-2" onclick="ReproducirVideoDeLaLista('${videos._id}');" ><span class="material-icons">play_arrow</span></button>
     <button type="button" class="btn btn-primary mb-2" onclick="ReproducirComoLoop('${videos._id}');" ><span class="material-icons">loop</span></button>
     <button type="button" class="btn btn-outline-primary mb-2" onclick="ReproducirComoBanner('${videos._id}');" ><span class="material-icons">picture_in_picture_alt</span></button>
     <p class="card-text"><small class="text-muted">${videos.ruta}</small></p>
  </div>
  </div>
</div>
  `;
}

function eliminarVideoDeLaLista(id) {
  PlayListDB.eliminarVideo(id);
  cargarPlayListMain();
}

function ReproducirVideoDeLaLista(id) {
  PlayListDB.ReproducirVideo(id);
}

function ReproducirComoLoop(id) {
  PlayListDB.ReproducirLoop(id);
}

function ReproducirComoBanner(id) {
  PlayListDB.ReproducirBanner(id);
}

function cargarPlayListMain() {
  PlayListDB.obtenerVideos((videos) => {
    let html = videos.map(generarHtmlPlaylist).join("");
    tbodyPlayList = document.querySelector("#tbodyPlayList");
    tbodyPlayList.innerHTML = html;
  });
}
////////////////////////////// GRAPHIC LIST END ////////////////////////////////////////

/** funcion para extraer nombre del archivo de una url */
function filename(rutaAbsoluta) {
  var nombreArchivo = rutaAbsoluta.replace(/^.*(\\|\/|\:)/, ""); // dejar solo nombre
  var nombreArchivo = nombreArchivo.replace(/(.*)\.(.*?)$/, "$1"); // eliminar extencion
  //.replace(/^.*[\\\/]/, "")
  return nombreArchivo;
}
/**Obtiene el index para agregar de ultimo un elemento */
function getIndexAddGrid(grid) {
  if (grid.data._order) {
    return grid.data._order.length;
  } else {
    return 0;
  }
}
/**envia a reproductor 1 */
function SendFileToPlay(datosStream) {
  var index = grid_queue.data.getIndex(datosStream.id);
  localStorage.setItem("CurrentVideoIndex", index);
  if (index < grid_queue.data._order.length - 1) {
    localStorage.setItem("NextVideoIndex", index + 1);
  } else {
    localStorage.setItem("NextVideoIndex", 0);
  }
  try {
    grid_queue.addRowCss(datosStream.id, "bg_id_Current");
  } catch (error) {}
  ipcRenderer.send("datos:stream", datosStream);
}
/**envia a reproductor 2 */
function SendFileToPlay2(datosStream) {
  var index = grid_ad_queue.data.getIndex(datosStream.id);

  localStorage.setItem("CurrentVideoIndex2", index);
  if (index < grid_ad_queue.data._order.length - 1) {
    localStorage.setItem("NextVideoIndex2", index + 1);
  } else {
    localStorage.setItem("NextVideoIndex2", 0);
  }

  try {
    grid_ad_queue.addRowCss(datosStream.id, "bg_id_Current");
  } catch (error) {}

  ipcRenderer.send("datos:stream2", datosStream);
}
