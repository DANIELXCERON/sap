const { ipcRenderer } = require("electron");
const util = require("util");

/** Mis modulos */
const getTime = require("../src/js/modules/reloj");
const nTF = require("../src/js/modules/nice-time-format");
const logger = require("../src/js/modules/logger");

const SafeArea = document.querySelector(".SafeArea");
const videobanner = document.querySelector("#videobanner");
const videoloop = document.querySelector("#videoloop");
const marcoVideoWebview = document.querySelector("#marcoVideoWebview");
const vPLuno = document.querySelector("#vPLuno");
const vPLdos = document.querySelector("#vPLdos");
const videoplayerloop = document.querySelector("#videoplayerloop");
const videoPlayerBanner = document.querySelector("#videoplayerbanner");
const GCText = document.querySelector("#GCText");
const body = document.querySelector("body");
const RelojDOM = document.querySelector("#clock");
const sizeDom = document.querySelector(".marcoVideoLocal");


/**Auto Ajustar Ventana */
// var ancho = sizeDom.getBoundingClientRect().width,
// alto = sizeDom.getBoundingClientRect().height,
// videoSizeStyle = "width: " + ancho + "px;" + "height: " + alto + "px;"

// function reportWindowSize() {

//   vPLuno.style.cssText = videoSizeStyle
//   vPLdos.style.cssText = videoSizeStyle
//   videoplayerloop.style.cssText = videoSizeStyle
//   videoPlayerBanner.style.cssText = videoSizeStyle

//   console.log(ancho,alto)
// }

// window.onresize = reportWindowSize;

loadConfig();
function loadConfig() {
  try {

    // Cargar ultimo video
    if(localStorage.getItem("DataVideoCurrent")){
      var data = JSON.parse(localStorage.getItem("DataVideoCurrent"))
      vPLuno.src = data.srcVideoCurrent;
      vPLuno.currentTime = data.TiempoTranscurrido + 0.390;
      vPLuno.load();
      vPLuno.style.cssText = "display: block;"
    }


    //cargar video loop agregado por ultima vez
    if (localStorage.getItem("CurrentLoopVideoPath")) {
      videoplayerloop.src = localStorage.getItem("CurrentLoopVideoPath");
      videoplayerloop.load();
      videoplayerloop.style.cssText = "display: block;"
    }

    // Inicia reloj de la ventana de video
    var JSON_config = JSON.parse(localStorage.getItem("JSON_config"));
    getTime.startClock([JSON_config.clock.format], RelojDOM);


  } catch (error) { // si hay error volver a cargar
    setTimeout(function () {
      loadConfig();
    }, 1000);
  }
}

//guardar estado del reproductor 1
localStorage.setItem("playerStatus", "onpause"); // al iniciar indicar que esta en pausa
vPLuno.onpause = (event) => {
  localStorage.setItem("playerStatus", "onpause");
};
vPLuno.onplay = (event) => {
  localStorage.setItem("playerStatus", "onplay");
};
vPLuno.onended = (event) => {
  localStorage.setItem("playerStatus", "onended");
};
vPLuno.onerror = function (event) {
  localStorage.setItem("playerStatus", "error");
};

//guardar estado del reproductor 2
localStorage.setItem("playerStatus2", "onpause"); // al iniciar indicar que esta en pausa
vPLdos.onpause = (event) => {
  localStorage.setItem("playerStatus2", "onpause");
};
vPLdos.onplay = (event) => {
  localStorage.setItem("playerStatus2", "onplay");
};
vPLdos.onended = (event) => {
  localStorage.setItem("playerStatus2", "onended");
};
vPLdos.onerror = function (event) {
  localStorage.setItem("playerStatus2", "error");
};

// obtener datos del video 1 actual cada vez que cambia el tiempo del video
vPLuno.ontimeupdate = function () {
  if (vPLuno.readyState == 4) {
    //si hay video diponiple para reproducir
    const videoActualTime = {
      TiempoTranscurrido: vPLuno.currentTime,
      TiempoDuracion: vPLuno.duration,
      TiempoRestante: vPLuno.duration - vPLuno.currentTime,
      TiempoRelojFin:
        nTF.RelojToSec(getTime.gT("hms24")) +
        (vPLuno.duration - vPLuno.currentTime),
      srcVideoCurrent: vPLuno.src,
    };
    localStorage.setItem("DataVideoCurrent", JSON.stringify(videoActualTime));
    ipcRenderer.send("datos:videoactual", videoActualTime);
  }
};
// obtener datos del video 2 actual cada vez que cambia el tiempo del video
vPLdos.ontimeupdate = function () {
  if (vPLdos.readyState == 4) {
    //si hay video diponiple para reproducir
    const videoActualTime = {
      TiempoTranscurrido: vPLdos.currentTime,
      TiempoDuracion: vPLdos.duration,
      TiempoRestante: vPLdos.duration - vPLdos.currentTime,
      TiempoRelojFin:
        nTF.RelojToSec(getTime.gT("hms24")) +
        (vPLdos.duration - vPLdos.currentTime),
      srcVideoCurrent: vPLdos.src,
    };
    localStorage.setItem("DataVideoCurrent2", JSON.stringify(videoActualTime));
    ipcRenderer.send("datos:videoactual2", videoActualTime);
  }
};

// Recibir Datos para Generar Caracteres GC
ipcRenderer.on("datos:gc", (e, datosGC) => {
  logger.writeGCLog(datosGC)

  // remover animacion css
  GCText.classList.remove("moviendoGC");

  // se agrega el texto
  GCText.innerHTML = datosGC.textoGC;

  /**se calcula el tiempo de desplazamiento en bace
   * a la longitud del texto y a la velocidad
   * condigurada
   */
  GCText.style.cssText =
    "animation-duration:" +
    Math.floor(
      (5 * (body.clientWidth + GCText.clientWidth)) /
        (parseInt(localStorage.getItem("SpeedGC")) * 100)
    ) +
    "s;";

  // agregar animacion css
  CSSAnimations.get("moviendoGC").setKeyframe("0%", {
    left: body.clientWidth + "px",
  });
  CSSAnimations.get("moviendoGC").setKeyframe("100%", {
    left: -GCText.clientWidth + "px",
  });
  // ejecutar animacion css
  GCText.classList.add("moviendoGC");
});

var s
//datos stream ipc render
ipcRenderer.on("datos:stream", (e, data) => {
  s = data.ref
  if (s === "livestream" || s === "anyone" || s === "facebook" || s === "youtube"){
    logger.writeEventsLog(data,"Transmisión en vivo")
  }
  switch (data.ref) {
    case "livestream":
      marcoVideoWebview.innerHTML = `
        <webview id="wv1" src="${data.path}/player?autoPlay=true&enableInfoAndActivity=false&defaultDrawer=&mute=false"
          frameborder="0"
          scrolling="no"
          allowfullscreen>
        </webview>
        `;
      break;
    case "anyone":
      marcoVideoWebview.innerHTML = `
          <webview id="wv1" src="${data.path}"
            frameborder="0"
            scrolling="no"
            allowfullscreen>
          </webview>
          `;
      break;
    case "facebook":
      marcoVideoWebview.innerHTML = `
        <webview id="wv1"
          src="https://www.facebook.com/plugins/video.php?href=${data.path}/
          &data-autoplay=1&mute=0&show_text=0&appId"
          style="border:none;overflow:hidden;"
          scrolling="no"
          frameborder="0"
          allowTransparency="true"
          allow="encrypted-media"
          allowFullScreen="true">
        </webview>
        `;
      break;
    case "youtube":
      marcoVideoWebview.innerHTML = `
      <webview id="wv1"
        src="https://www.youtube.com/embed/${data.path}?autoplay=1&cc_load_policy=1" allowfullscreen>
      </webview>
      `;
      break;
    case "file-video": //video local 1
    logger.write(data)
      marcoVideoWebview.innerHTML = ``;
      vPLuno.src = data.path;
      vPLuno.currentTime = data.in;
      vPLuno.load();
      vPLuno.style.cssText = "display: block;"
      break;
    case "videoloop": //reproduce video loop
      videoplayerloop.src = data.path;
      videoplayerloop.load();
      localStorage.setItem("CurrentLoopVideoPath", data.path);
      videoplayerloop.style.cssText = "display: block;"
      break;
    case "videobanner": //reproduce video banner
      videoPlayerBanner.src = data.path;
      videoPlayerBanner.load();
      videoPlayerBanner.style.cssText = "display: block;"
      break;
    case "stopStream": //detiene stream web y reanuda video local
      marcoVideoWebview.innerHTML = "";
      vPLuno.play();
      vPLuno.style.cssText = "display: block;"
      break;
    case "SetAspectRatioForFacebook":
      document.querySelector("#wv1").style.cssText = `
      width: ${data.numberAspectRatio}px;
      margin-left:${(body.clientWidth - data.numberAspectRatio) / 2}px;
      opacity: 1;
      `;
      break;
    case "ocultar-mostrar-video-loop": //oculta o muestra video loop
      if (data.valor == "ocultar") {
        videoloop.classList.add("invisible");
        videobanner.classList.add("invisible");
      }
      if (data.valor == "mostrar") {
        videoloop.classList.remove("invisible");
        videobanner.classList.remove("invisible");
      }
      break;
    case "opacity-video-loop": //opacidad para video loop
      videoloop.style.opacity = data.valor;
      break;
    case "ocultar-mostrar-safe-area": //oculta o muestra el margen safe area
      if (data.valor == "ocultar") {
        SafeArea.classList.add("invisible");
      }
      if (data.valor == "mostrar") {
        SafeArea.classList.remove("invisible");
      }
      break;
    default:
      break;
  }
  //eliminar graficos en livestream y facebook
  var webview = document.querySelector("#wv1");
  if (webview) {
    // if evita error en caso de que no exista el elemento wv1
    webview.addEventListener("dom-ready", function () {
      //cuando webview este listo, pausar video local y ocultarlo
      vPLuno.pause();
      vPLuno.style.cssText = "display: none;"
      if(s==="facebook"){
        webview.style.marginTop = "43px";
      };
      //transition
      webview.style.opacity = 1;
      //ocultar para livestream
      webview.insertCSS(`
      .top-bar,
      .spinner-layer,
      .control-bar{
        display: none !important;
      }
      `);
      //ocultar para facebook
      webview.insertCSS(`
      ._5pf2,._1jb_{
        display: none !important;
      }
      ._u_g {
        background-color: transparent !important;
      }
      ._u_h {
        color: white !important;
        font-weight: bold !important;
        font-size: 1em !important;
        font-family: 'Roboto', sans-serif !important;
      }
      ._u_0 {
        position: absolute!important;
        left: 3.4rem !important;
        top: 1.4rem !important;
      }
      `);
      // //ocultar para facebook privado
      // webview.insertCSS(`
      // .so2p5rfc.so2p5rfc,.o36gj0jk,.swu4x5w2,.taijpn5t{
      //     display: none !important;
      // }
      // .l44iypv3 {
      //     background-color: #34495e !important;
      //     display: none !important;
      // }
      // `);
      //ocultar para facebook privado
      webview.insertCSS(`
        .o36gj0jk {
            width: 0px !important;
        }
        .poy2od1o {
            display: none !important;
        }
        .l9j0dhe7 {
            position: sticky !important;
        }
        ::-webkit-scrollbar {
            display: none;
        }
        .k4urcfbm {
            /* width: 100% !important; */
        }
        .datstx6m {
            height: 405px !important;
        }
        .datstx6m {
            height: 405px !important;
        }
        `);
      //ocultar para Youtube
      webview.insertCSS(`
      .ytp-gradient-top,
      .ytp-videowall-still,
      .ytp-ce-element,
      .ytp-pause-overlay,
      .branding-img-container,
      .ytp-chrome-top,
      .ytp-show-cards-title,
      .ytp-chrome-bottom,
      .ytp-spinner {
        display: none! important;
      }
      `);
      //subtitulos de facebook
      webview.insertCSS(`
      ._30vn {
        text-align: center !important;
        left: 30px !important;
        bottom: 30px !important;
        font-size: 1.5em !important;
        font-family: 'Roboto', sans-serif !important;
      }
      ._30vo {
        padding: .0em .2em !important;
        border-radius: 0px !important;
        background-color: rgba(0, 0, 0, 0.8) !important;
        line-height: 1.2 !important;
        display: inline !important;
        font-family: 'Roboto', sans-serif !important;
        text-shadow: none !important;
      }
      `);
      /*webview.insertCSS(`
            ._30vn {
              text-align: center !important;
              left: 30px !important;
              bottom: 65px !important;
              font-size: 2em !important;
            }
            ._30vo {
              padding: .0em .2em !important;
              border-radius: 0px !important;
              background-color: rgba(0, 0, 0, 0.8) !important;
              line-height: 1.2 !important;
              display: inline !important;
              font-family: 'Roboto', sans-serif !important;
              text-shadow: none !important;
            }
            `);*/
    });
  }
});

// reproductor 2
ipcRenderer.on("datos:stream2", (e, data) => {
  logger.write(data)
  switch (data.ref) {
    case "file-video": //video local 2
      vPLdos.src = data.path;
      vPLdos.currentTime = data.in;
      vPLdos.load();
      vPLuno.style.cssText = "display: none;"
      vPLdos.style.cssText = "display: block;"
      break;
  }
});

// control reproductor 1
ipcRenderer.on("control:player", (e, control) => {
  logger.writeControlPlayerLog("Reproductor Principal",control)
  switch (control) {
    case "play":
      vPLuno.play();
      vPLuno.style.cssText = "display: block;"
      break;
    case "pause":
      vPLuno.pause();
      break;
    case "stop":
      vPLuno.pause();
      vPLuno.currentTime = 0;
      vPLuno.style.cssText = "display: none;"
      break;
    case "forward":
      vPLuno.currentTime += 5;
      break;
  }
});

// control reproductor 2
ipcRenderer.on("control:player2", (e, control) => {
  logger.writeControlPlayerLog("Reproductor Secundario",control)
  switch (control) {
    case "play":
      vPLdos.play();
      vPLdos.style.cssText = "display: block;"
      break;
    case "pause":
      vPLdos.pause();
      break;
    case "stop":
      vPLdos.pause();
      vPLdos.currentTime = 0;
      vPLdos.style.cssText = "display: none;"
      break;
    case "forward":
      vPLdos.currentTime += 5;
      break;
  }
});

//Al finalizar en el reproductor BANNER
videoPlayerBanner.onended = function () {
  videoPlayerBanner.src = "";
  videoPlayerBanner.load();
  videoPlayerBanner.style.cssText = "display: none;"
};
