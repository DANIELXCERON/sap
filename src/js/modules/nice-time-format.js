/*
en este modulo:
la funcion secToHHMMSS convierte segundos a hh:mm:ss
la funcion hmsToHHMMSS convierte h:m:s a hh:mm:ss
la funcion RelojToSec hace la conversion contraria de hh:mm:ss a segundos
la funcion checkFormat agrega un 0 delante si es menor a 10, Ejm: 1 = 01
*/

function secToHHMMSS(duration) {
  // convertir segundos a 00:00:00
  if (duration == null) {
    return "00:00:00";
  } else {
    var hrs = ~~(duration / 3600);
    var mins = ~~((duration % 3600) / 60);
    var secs = ~~duration % 60;
    return checkFormat(hrs) + ":" + checkFormat(mins) + ":" + checkFormat(secs);
  }
}
function RelojToSec(hms) {
  var a = hms.split(":"); // separar por cada :
  // los minutos valen 60 segundos. Las horas valen 60 minutos.
  var seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
  return seconds;
}
function checkFormat(num) {
  // para agregar un 0 delante si es menor a 10  Ejemplo "00"
  if (num < 10) {
    num = "0" + num;
  }
  return num;
}
function hmsToHHMMSS(hr, min, sec) {
  hr = checkFormat(hr);
  min = checkFormat(min);
  sec = checkFormat(sec);
  return hr + ":" + min + ":" + sec;
}

//Genera numero aleatorio entre 0 y MaxItem excluyendo ItemActual
function GenNumRandom(MaxItem, ItemActual) {
  if (!(MaxItem === ItemActual)) { // Si no son iguales
    var min = 0;
    var ItemIndex;
    do {
      ItemIndex = Math.floor(Math.random() * (MaxItem - min + 1)) + min;
    } while (ItemIndex == ItemActual);
    return ItemIndex;
  } else {
    console.error('no hay suficientes numeros para generar un random')
    return 0;
  }
}

//Genera numero aleatorio
function randomNumber(MaxItem) {
  var min = 0;
  return Math.floor(Math.random() * (MaxItem - min + 1)) + min;
}

module.exports = {
  secToHHMMSS,
  RelojToSec,
  checkFormat,
  hmsToHHMMSS,
  GenNumRandom,
  randomNumber,
};
