var Datastore = require("nedb");
const { app } = require("electron").remote;

let bd = new Datastore({
  filename: app.getPath("documents") + "\\SAP Playout\\db\\playlist.db",
  autoload: true,
});

function agregarPlaylist(nombre, codec, ruta) {
  var videoOnlist = {
    nombre: nombre,
    codec: codec,
    ruta: ruta,
  };
  bd.insert(videoOnlist, function (error, nuevoObjeto) { });
}

function obtenerVideos(operacion) {
  bd.find({}, function (error, videos) {
    if (videos) {
      operacion(videos);
    }
  });
}

function ReproducirVideo(id) {
  bd.findOne({ _id: id }, { ruta: 1 }, function (error, record) {
    datosStream = {
      referencia: "videohtml",
      url: record.ruta,
    };
    ipcRenderer.send("datos:stream", datosStream);
  });
}

function ReproducirLoop(id) {
  bd.findOne({ _id: id }, { ruta: 1 }, function (error, record) {
    datosStream = {
      referencia: "videoloop",
      url: record.ruta,
    };
    ipcRenderer.send("datos:stream", datosStream);
  });
}

function ReproducirBanner(id) {
  bd.findOne({ _id: id }, { ruta: 1 }, function (error, record) {
    datosStream = {
      referencia: "videobanner",
      url: record.ruta,
    };
    ipcRenderer.send("datos:stream", datosStream);
  });
}

function TransitionVideo(id) {
  bd.findOne({ _id: id }, { ruta: 1 }, function (error, record) {
    localStorage.setItem("transition",record.ruta)
  });
}

function eliminarVideo(id) {
  bd.remove({ _id: id }, {}, function (error, numeroRegistrosEliminados) { });
}

module.exports = {
  agregarPlaylist,
  obtenerVideos,
  ReproducirVideo,
  ReproducirLoop,
  ReproducirBanner,
  TransitionVideo,
  eliminarVideo,
};
