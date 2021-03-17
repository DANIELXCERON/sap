const fs = require("fs");
const util = require("util");
const path = require("path");
const { dialog, app } = require("electron").remote;
const { ipcRenderer } = require("electron");
const { shell } = require("electron");
const https = require("https");
const log = require('electron-log');
// console.log = log.log;

/** Mis modulos */
const nTF = require("../src/js/modules/nice-time-format");
const getTime = require("../src/js/modules/reloj");
const progressBar = require("../src/js/modules/progress-bar.js");
const logger = require("../src/js/modules/logger");

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
const StatusBar = (item) => {
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
  .then(res => res.json())
  .then(config => {
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
const iniciarWebVideo = document.querySelector("#iniciarWebVideo");
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

  //ruta del archivo slst
  if (localStorage.getItem("slst-path")) {
    loadFileSLST(localStorage.getItem("slst-path"));
  }
  //ultima lista
  if (localStorage.getItem("DataGrid")) {
    grid_queue.data.add(JSON.parse(localStorage.getItem("DataGrid")));
  }
  //ultimo video
  // if (localStorage.getItem("DataVideoCurrent")) {
  //   var dataVideoCurrent = JSON.parse(localStorage.getItem("DataVideoCurrent"));

  //   ipcRenderer.send("datos:stream", {
  //     ref: "file-video",
  //     path: dataVideoCurrent.srcVideoCurrent,
  //     in: dataVideoCurrent.TiempoTranscurrido,
  //   });
  // }

  // pintar ultimo video
  const id = localStorage.getItem("CurrentVideoID");
  if (id) {
    // var a = JSON.parse(localStorage.getItem("DataVideoCurrent"));
    grid_queue.data._order.forEach((row) => {
      grid_queue.removeRowCss(row.id, "bg_id_Next");
      grid_queue.removeRowCss(row.id, "bg_id_Current");
    });
    grid_queue.addRowCss(id, "bg_id_Current");
    //auto scroll a último item reproducido
    setTimeout(() => grid_queue.scrollTo(id, "namefile"), 200);

    // ipcRenderer.send("datos:stream", {
    //   ref: "file-video",
    //   path: a.srcVideoCurrent,
    //   in: a.TiempoTranscurrido,
    // });
  }

});

// ocultar mostrar Video Loop & Banner
window.addEventListener("load", () => {
  ViewGraSwitch && (initHiden(), ViewGraSwitch.addEventListener("change", () => {
    resetHiden();
  }));
});

const MostrarG = () => {
  const datosStream = {
    ref: "ocultar-mostrar-video-loop",
    valor: "mostrar",
  };
  ipcRenderer.send("datos:stream", datosStream);
}

const OcultarG = () => {
  const datosStream = {
    ref: "ocultar-mostrar-video-loop",
    valor: "ocultar",
  };
  ipcRenderer.send("datos:stream", datosStream);
}

const initHiden = () => {
  const e =
    null !== localStorage.getItem("ViewGraSwitch") &&
    "HiddenGraphics" === localStorage.getItem("ViewGraSwitch");
  (ViewGraSwitch.checked = e), e ? MostrarG() : OcultarG();
}

const resetHiden = () => {
  ViewGraSwitch.checked ? (
    MostrarG(), localStorage.setItem("ViewGraSwitch", "HiddenGraphics")
  ) : (
    OcultarG(), localStorage.removeItem("ViewGraSwitch")
  );
}

// ocultar mostrar Safe Area
SafeAreaSwitch.addEventListener("change", () => {
  if (SafeAreaSwitch.checked) {
    const datosStream = {
      ref: "ocultar-mostrar-safe-area",
      valor: "mostrar",
    };
    ipcRenderer.send("datos:stream", datosStream);
  } else {
    const datosStream = {
      ref: "ocultar-mostrar-safe-area",
      valor: "ocultar",
    };
    ipcRenderer.send("datos:stream", datosStream);
  }
});

/** botones de la pestaña live stream */
detenerWebVideo.addEventListener("click", () => {
  const datosStream = {
    ref: "stopStream",
  };
  ipcRenderer.send("datos:stream", datosStream);
});
iniciarWebVideo.addEventListener("click", () => {
  const datosStream = {
    ref: formLive.getValue().server,
    path: formLive.getValue().url,
  };
  ipcRenderer.send("datos:stream", datosStream);
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

/** entrada para setear la escala en live stream de facebook
 * cuando la orientación del video es vertical
 */
formLive.getItem("scale").events.on("change", () => {
  const datosStream = {
    ref: "SetAspectRatioForFacebook",
    numberAspectRatio: arguments[0][0],
  };
  ipcRenderer.send("datos:stream", datosStream);
});

/** Botones del control del reproductor principal */
controlPlay.addEventListener("click", () => {
  ipcRenderer.send("control:player", "play");
});
controlPause.addEventListener("click", () => {
  ipcRenderer.send("control:player", "pause");
});
controlStop.addEventListener("click", () => {
  ipcRenderer.send("control:player", "stop");
});
controlForward.addEventListener("click", () => {
  ipcRenderer.send("control:player", "forward");
});

////////////////////////////// LIST QUEUE ///////////////////////////////////////////////
/** crear nueva lista en grid_queue_container */
const grid_queue = new dhx.Grid("grid_queue_container", {
  css: "my_grid_css",
  columns: [
    { width: 200, id: "namefile", header: [{ text: "Nombre" }] },
    {
      width: 100,
      id: "duration",
      header: [{ text: "Duración" }],
      template: (text, row, col) => `<span class='item_2'> <i class="fad fa-clock"></i> ${nTF.secToHHMMSS(text)}</span>`,
    },
    {
      width: 100,
      id: "ref",
      header: [{ text: "Tipo" }],
      template: (text, row, col) => `<i class="fas fa-${text}"></i> ${text}`,
    },
    {
      width: 100,
      id: "in",
      header: [{ text: "Iniciar" }],
      template: (text, row, col) => `<span class='item_2'><i class="fas fa-forward"></i> ${nTF.secToHHMMSS(text)}</span>`,
    },
    { width: 200, id: "path", header: [{ text: "Ruta" }] },
  ],
  rowHeight: 25,
  headerRowHeight: 25,
  // width: 492,
  height: 400,
  rowCss: row => row.custom ? row.custom : "bg_id_Block",
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
        fs.writeFile(result.filePath.toString(), dataFilePlayList, (err) => {
          if (err) throw err;
          iziToast.show({
            title: "PlayList Grid Guardada",
            message: "",
            color: "green", // blue, red, green, yellow
          });
        }
        );
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
/** Boton de eliminar item */
grid_remove_btn.addEventListener("click", () => {
  var cell = grid_queue.selection.getCell();
  if (cell.row) {
    grid_queue.data.remove(cell.row.id);
  }
});
/** END Controles de la lista */

/** ver duracion de la grilla */
grid_queue.events.on("CellMouseOver", (row, column, e) => {
  let duration = 0;
  let numElements = grid_queue.data._order.length;
  grid_queue.data._order.forEach((element) => {
    duration += parseFloat(element.duration);
  });

  DurationListViewDOM.innerHTML = `
  ${grid_queue._getRowIndex(row.id) + 1
    } de ${numElements}, duracion total: ${nTF.secToHHMMSS(duration)}
  `;
});

/** al hacer doble click en un item */
grid_queue.events.on("CellDblClick", (cell, e) => {
  /** remover css de todos */
  grid_queue.data._order.forEach((row) => {
    grid_queue.removeRowCss(row.id, "bg_id_Next");
    grid_queue.removeRowCss(row.id, "bg_id_Current");
  });

  /**enviar a reproducir */
  SendFileToPlay(cell);
});

ipcRenderer.on("datos:videoactual", (e, videoActualTime) => {


  // cuando falte 1 segundo para terminar
  var r = 1;
  var sr = videoActualTime.TiempoRestante;
  if (r + 0.3 >= sr && sr >= r) {
    // reproducir transición 
    ipcRenderer.send("datos:stream", {
      ref: "videobanner",
      path: localStorage.getItem("transition"),
    });
  }

  /** Bara de progreso */
  let barvalue = progressBar.setBar(videoActualTime.TiempoTranscurrido, videoActualTime.TiempoDuracion, false);
  progressBarDom.style.width = `${barvalue.progressBar}%`;
  progressBarDom.style.backgroundColor = `${barvalue.bgColor}`;

  /**Mostrar datos en la barra */
  timeDisplay.innerHTML = `
  ${nTF.secToHHMMSS(videoActualTime.TiempoTranscurrido)}
  /
  ${nTF.secToHHMMSS(videoActualTime.TiempoDuracion)} | ${nTF.secToHHMMSS(videoActualTime.TiempoRestante)}
  /
  ${nTF.secToHHMMSS(videoActualTime.TiempoRelojFin)}
  `;

  /**ejecutar al faltar 2 segundos */
  var remaining = 2;
  var secRemaining = videoActualTime.TiempoRestante;
  if (remaining + 0.3 >= secRemaining && secRemaining >= remaining) {


    /**pintar siguiente item de .bg_id_Next*/
    var index = grid_queue.data.getIndex(localStorage.getItem("CurrentVideoID"));
    if (index < grid_queue.data._order.length - 1) {
      index += 1;
    } else {
      index = 0;
    }
    let data = grid_queue.data._order[index];
    grid_queue.addRowCss(data.id, "bg_id_Next");

    localStorage.setItem("DataGrid", JSON.stringify(grid_queue.data._order));
  }

  /**Al finalizar la reproduccion */
  if (secRemaining == 0) {
    NextVideo();
  }
});

const NextVideo = () => {
  //obtiene index del actual
  var index = grid_queue.data.getIndex(localStorage.getItem("CurrentVideoID"));

  /**item siguiente*/
  // como es el último vuelve al primer item con index 0
  var item = grid_queue.data._order[0]
  if (index < grid_queue.data._order.length - 1) {
    //si no es el ultimo suma 1
    item = grid_queue.data._order[grid_queue.data.getIndex(localStorage.getItem("CurrentVideoID")) + 1]
  }

  if (grid_queue.data._order && index < grid_queue.data._order.length) {
    grid_queue.removeRowCss(localStorage.getItem("CurrentVideoID"), "bg_id_Current");
    grid_queue.removeRowCss(localStorage.getItem("CurrentVideoID"), "bg_id_Next");

    /** si el item es temporal lo elimina de la cola al finalizar */
    if (grid_queue.data._order[index].temp) {
      /**lo borra de la lista */
      grid_queue.data.remove(grid_queue.data.getId(index));
    }
  }

  StatusBar(item);
  SendFileToPlay(item);

}

/**Drop & Drag Files */
const dropHandler = (e) => {
  e.preventDefault();
  // Utilice la interfaz DataTransferItemList para acceder a los archivos
  for (var i = 0; i < e.dataTransfer.items.length; i++) {
    // Si los elementos caídos no son archivos, rechácelos
    if (e.dataTransfer.items[i].kind === "file") {
      let file = e.dataTransfer.items[i].getAsFile();

      ffprobe(file.path, { path: ffprobeStatic.path })
        .then(info => {
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
        }).catch(err => {
          console.error(err);
        });
    }
  }
  // para la limpieza
  if (e.dataTransfer.items) {
    // Utilice la interfaz DataTransferItemList para eliminar los datos de arrastre
    e.dataTransfer.items.clear();
  } else {
    // Utilice la interfaz DataTransfer para eliminar los datos de arrastre
    e.dataTransfer.clearData();
  }
}

const dragOverHandler = (e) => e.preventDefault()
/** Drop & Drag Files, Ends*/
////////////////////////////// END LIST QUEUE ///////////////////////////////////////////


////////////////////////////// AD QUEUE ///////////////////////////////////////////////
/** crear nueva lista en grid_queue_ad_container */
const grid_ad_queue = new dhx.Grid("grid_queue_ad_container", {
  css: "my_grid_css",
  columns: [
    { width: 200, id: "namefile", header: [{ text: "Nombre" }] },
    {
      width: 100,
      id: "duration",
      header: [{ text: "Duración" }],
      template: (text, row, col) => `<span class='item_2'> <i class="fad fa-clock"></i> ${nTF.secToHHMMSS(text)}</span>`,
    },
    {
      width: 100,
      id: "ref",
      header: [{ text: "Tipo" }],
      template: (text, row, col) => `<i class="fas fa-${text}"></i> ${text}`,
    },
    {
      width: 100,
      id: "in",
      header: [{ text: "Iniciar" }],
      template: (text, row, col) => `<span class='item_2'><i class="fas fa-forward"></i> ${nTF.secToHHMMSS(text)}</span>`,
    },
    { width: 200, id: "path", header: [{ text: "Ruta" }] },
  ],
  rowHeight: 25,
  headerRowHeight: 25,
  // width: 500,
  height: 400,
  rowCss: row => row.custom,
  htmlEnable: true,
  dragMode: "both",
  dragCopy: false,
  selection: "row",
  resizable: true,
  // editable:true,
  // adjust: true,
});

/**Agrregar cortinillas */
var n = 0
const addCurtains = () => {
  //si el video actual proviene de la misma lista de donde se cargaron las cortinillas
  var dataItemCurrent = grid_queue.data.getItem(localStorage.getItem("CurrentVideoID")).pathListEvent
  if (dataItemCurrent && dataItemCurrent === localStorage.getItem("pathListEvent")) {
    if (n === 0) {
      // agrega la cortinilla de entrada de primero
      if (localStorage.getItem("CurtainIn")) {
        grid_ad_queue.data.add(convertList(JSON.parse(localStorage.getItem("CurtainIn"))), 0);
      }
    }
    if (n === 1) {
      // agrega la cortinilla de salida de último
      if (localStorage.getItem("CurtainOut")) {
        grid_ad_queue.data.add(convertList(JSON.parse(localStorage.getItem("CurtainOut"))), getIndexAddGrid(grid_ad_queue));
      }
    }
    if (grid_ad_queue.data._order && grid_ad_queue.data._order.length === 0) {
      n = 0
    }

    n += 1
  }
}

const convertList = (item) => {
  const NextVideo = {
    namefile: `[${item.curtain}] ${item.namefile} | ${getTime.gT("hms24")}`,
    ref: item.ref,
    path: item.path,
    duration: item.duration,
    startTime: "00:00:00",
    in: item.in,
    custom: "bg_id_curtain",
    random: 0,
    temp: true,
  }
  return NextVideo
}

ipcRenderer.on("datos:videoactual2", (e, videoActualTime) => {
  addCurtains()
  /** Bara de progreso */
  let barvalue = progressBar.setBar(videoActualTime.TiempoTranscurrido, videoActualTime.TiempoDuracion, false);
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



  /**Al finalizar la reproduccion */
  if (videoActualTime.TiempoRestante == 0 && grid_ad_queue.data._order.length > 0) {
    /**va eliminando los items */
    grid_ad_queue.data.remove(grid_ad_queue.data.getId(0));

    controlPlayerAD();
  }
});

/**controla los dos players pausando, deteniendo y reproduciendo */
const controlPlayerAD = () => {
  if (grid_ad_queue.data._order && grid_ad_queue.data._order.length > 0) {
    ipcRenderer.send("control:player", "pause");
    SendFileToPlay2(grid_ad_queue.data._order[0]);
  } else {
    // continua principal y detiene el secundario
    ipcRenderer.send("control:player", "play");
    ipcRenderer.send("control:player2", "stop");
  }
}
////////////////////////////// END AD QUEUE ///////////////////////////////////////////


////////////////////////////// GRAPHIC LIST /////////////////////////////////////////////

const template = (item) => {
  let template = `<div>
    <video id="videoPlayerPreView" src="${item.path}" style="width: 100%;" preload="none" controls muted></video>
    <h5 class="card-title">${item.namefile}</h5>
    <p class="card-text">Codec ${item.codec}, ${nTF.secToHHMMSS(item.duration)}</p>
    <button type="button" class="btn btn-danger" onclick="actionBtns('delete','${item.id}');" ><span class="material-icons">delete_forever</span></button>
    <button type="button" class="btn btn-success" onclick="actionBtns('file-video','${item.id}');" ><span class="material-icons">play_arrow</span></button>
    <button type="button" class="btn btn-primary" onclick="actionBtns('videoloop','${item.id}');" ><span class="material-icons">loop</span></button>
    <button type="button" class="btn btn-outline-primary" onclick="actionBtns('videobanner','${item.id}');" ><span class="material-icons">picture_in_picture_alt</span></button>
    <button type="button" class="btn btn-outline-primary" onclick="actionBtns('transition','${item.id}');" >Transition</button>
    <p><small class="text-muted">${item.path}</small></p>
</div>`
  return template;
}
const dataview_graphics = new dhx.DataView("dataview_graphics", {
  itemsInRow: 3,
  gap: 5,
  template: template
});
// dataview_graphics.data.load("https://snippet.dhtmlx.com/codebase/data/dataview/01/dataset.json");
// dataview_graphics.data.parse(dataset);

const actionBtns = (action, id) => {
  var data = dataview_graphics.data.getItem(id)
  switch (action) {
    case "delete":
      dataview_graphics.data.remove(id);
      break;
    case "transition":
      localStorage.setItem(action, data.path)
      break;
    default:
  }
  data.ref = action
  ipcRenderer.send("datos:stream", data);
}

abrirArchivo.addEventListener("click", () => {
  dialog.showOpenDialog({
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
    .then(result => {

      var filepath = result.filePaths[0];

      ffprobe(filepath, { path: ffprobeStatic.path })
        .then(info => {

          let v = document.createElement('video')
          v.setAttribute('src', filepath)
          v.onloadeddata = e => {
            const { videoHeight, videoWidth, duration } = e.srcElement

            dataview_graphics.data.add({
              namefile: filename(filepath),
              codec: info.streams[0].codec_long_name,
              path: filepath,
              duration,
            });
          }
        }).catch(err => {
          console.error(err);
        });
    }).catch(err => {
      console.log(err);
    });
});

////////////////////////////// GRAPHIC LIST END ////////////////////////////////////////

/** funcion para extraer nombre del archivo de una ruta */
const filename = rutaAbsoluta => {
  var nombreArchivo = rutaAbsoluta.replace(/^.*(\\|\/|\:)/, ""); // dejar solo nombre
  var nombreArchivo = nombreArchivo.replace(/(.*)\.(.*?)$/, "$1"); // eliminar extencion
  //.replace(/^.*[\\\/]/, "")
  return nombreArchivo;
}
/**Obtiene el index para agregar de ultimo un elemento */
const getIndexAddGrid = grid => {
  if (grid.data._order) {
    return grid.data._order.length;
  } else {
    return 0;
  }
}

/**envia a reproductor 1 */
const SendFileToPlay = (item) => {
  /**guardar id del item a reproducir */
  localStorage.setItem("CurrentVideoID", item.id);

  try {
    grid_queue.addRowCss(item.id, "bg_id_Current");
  } catch (error) { }
  ipcRenderer.send("datos:stream", item);

  //auto scroll
  grid_queue.scrollTo(item.id, "namefile");
}
/**envia a reproductor 2 */
const SendFileToPlay2 = (item) => {

  var index = grid_ad_queue.data.getIndex(item.id);

  localStorage.setItem("CurrentVideoIndex2", index);
  if (index < grid_ad_queue.data._order.length - 1) {
    localStorage.setItem("NextVideoIndex2", index + 1);
  } else {
    localStorage.setItem("NextVideoIndex2", 0);
  }

  try {
    grid_ad_queue.addRowCss(item.id, "bg_id_Current");
  } catch (error) { }
  ipcRenderer.send("datos:stream2", item);
}

////////////////////

//Cargar el estilo del tema
var theme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark';
$('head').append('<link rel="stylesheet" href="./css/themes/' + theme + '/theme.css"/>');

const changeTheme = (newTheme) => {
  $('link[href="./css/themes/' + theme + '/theme.css"]').remove();
  var head = document.getElementsByTagName('head')[0];
  var link = document.createElement('link');
  link.rel = "stylesheet";
  link.href = "./css/themes/" + newTheme + "/theme.css";
  head.appendChild(link);
  theme = newTheme;
}

//Opciones de tema a la configuración
var themes = ['acri', 'dark', 'rachni'];

$.each(themes, i => {
  var $selected = '';

  if (themes[i] == theme) {
    $selected = 'selected';
  }

  $('#alt-main-config-content #theme').append('<option name="' + themes[i] + '"' + $selected + '>' + themes[i] + '</option>');
});

//////////////////


////////////////////////////// logger list viewer ///////////////////////////////////////////////

const grid_log_update = document.querySelector("#grid_log_update_btn");
const grid_log_csv = document.querySelector("#grid_log_csv_btn");

grid_log_update.addEventListener("click", () => {
  logger.loadDir(grid_log_dir)
});
grid_log_csv.addEventListener("click", () => {
  if (grid_log_view && grid_log_view.data._order.length > 0) {
    var selectedCell = grid_log_dir.selection.getCell();
    grid_log_view.export.csv({
      name: filename(grid_log_dir.selection.getCell().row.path)
    });
  }
});

const grid_log_dir = new dhx.Grid("grid_log_dir_container", {
  css: "my_grid_css",
  columns: [
    { width: 92, id: "filelog", header: [{ text: "Logs" }], type: "date", format: "%Y/%m-%d" },
    { width: 200, id: "path", header: [{ text: "Ruta" }] },
  ],
  rowHeight: 25,
  headerRowHeight: 25,
  height: 400,
  // htmlEnable: true,
  // dragMode: "both",
  // dragCopy: false,
  selection: "row",
  resizable: true,
});

logger.loadDir(grid_log_dir)
grid_log_dir.events.on("CellClick", (row, column, e) => logger.readLog(row.path, grid_log_view));

const grid_log_view = new dhx.Grid("grid_log_view_container", {
  css: "my_grid_css",
  columns: [
    { width: 92, id: "fecha", header: [{ text: "Fecha" }, { content: "selectFilter" }] },
    { width: 72, id: "hora", header: [{ text: "Hora" }] },
    { width: 72, id: "duracion", header: [{ text: "Duración" }] },
    { width: 72, id: "tipo", header: [{ text: "Tipo" }, { content: "selectFilter" }] },
    { width: 253, id: "nombre", header: [{ text: "Nombre" }, { content: "inputFilter" }] },
    { width: 253, id: "id", header: [{ text: "Id" }] },
  ],
  rowHeight: 25,
  headerRowHeight: 25,
  height: 400,
  htmlEnable: true,
  dragMode: "both",
  dragCopy: false,
  selection: "row",
  resizable: true,
});
////////////////////////////// End logger list viewer ///////////////////////////////////////////////