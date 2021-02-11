// requiere del modulo nice-time-format.js
const nTF = require("./nice-time-format");

// barra de dhtmlx
// var slider = new sapLVC.Slider("slider", { min: 0,max: 100,step: 1,tooltip: false});

function setBar(currentTime, duration, convertToSec) {
  /** color inicial de la barra */
  var bgColor = "#2ecc71";

  if (convertToSec) {
    var currentTime = nTF.RelojToSec(currentTime); // convertir a segundos
    var duration = nTF.RelojToSec(duration); // convertir a segundos
  }
  /** Regla de tres si duration = 100% currentTime = ? */
  var progressBar = (currentTime * 100) / duration;
  // if (progressBar >= 90) {
  //   // cambiar color de la barra con respecto al porcentaje
  //   bgColor = "#e74c3c";
  // }

  /** cambiar color de la barra con respecto al tiempo */

  if (duration - currentTime <= 3) {
    bgColor = "#e74c3c";
  }

  //   return parseInt(progressBar); #007bff !important;
  return { progressBar: progressBar, bgColor: bgColor };
}

module.exports = { setBar };
