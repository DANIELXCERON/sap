/*
en este modulo:
la funcion secToHHMMSS convierte segundos a hh:mm:ss
la funcion hmsToHHMMSS convierte h:m:s a hh:mm:ss
la funcion RelojToSec hace la conversion contraria de hh:mm:ss a segundos
la funcion checkFormat agrega un 0 delante si es menor a 10, Ejm: 1 = 01
*/

const secToHHMMSS = (duration = 0) => {
  // convertir segundos a 00:00:00
  let hrs = ~~(duration / 3600);
  let mins = ~~((duration % 3600) / 60);
  let secs = ~~duration % 60;
  return checkFormat(hrs) + ":" + checkFormat(mins) + ":" + checkFormat(secs);
}
const RelojToSec = (hms) => {
  let a = hms.split(":"); // separar por cada :
  // los minutos valen 60 segundos. Las horas valen 60 minutos.
  let sec = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
  return sec;
}

// para agregar un 0 delante si es menor a 10  Ejemplo "00"
const checkFormat = (num = 0) => num < 10 ? num = "0" + num : num

const hmsToHHMMSS = (hr = 0, min = 0, sec = 0) => {
  hr = checkFormat(hr);
  min = checkFormat(min);
  sec = checkFormat(sec);
  return hr + ":" + min + ":" + sec;
}

//Genera numero aleatorio
const GenNumRandom = (MaxItem = 999999999, ItemActual = -1) => {
  if (!(MaxItem === ItemActual)) { // Si no son iguales
    let min = 0;
    let ItemIndex;
    do {
      ItemIndex = Math.floor(Math.random() * (MaxItem - min + 1)) + min;
    } while (ItemIndex === ItemActual);
    return ItemIndex;
  }
}

//Combierte formato html a texto plano
const htmlToText = (h) => {
  let s = '\n'
  h = h.replace(/<style([\s\S]*?)<\/style>/gi, '');
  h = h.replace(/<script([\s\S]*?)<\/script>/gi, '');
  h = h.replace(/<\/div>/ig, s);
  h = h.replace(/<\/li>/ig, s);
  h = h.replace(/<li>/ig, '  *  ');
  h = h.replace(/<\/ul>/ig, s);
  h = h.replace(/<\/p>/ig, s);
  h = h.replace(/<br\s*[\/]?>/gi, s);//eslint-disable-line
  h = h.replace(/<[^>]+>/ig, '');

  return h
};

const millisToDate = (millis) => new Date(millis)


module.exports = {
  secToHHMMSS,
  RelojToSec,
  checkFormat,
  hmsToHHMMSS,
  GenNumRandom,
  htmlToText,
  millisToDate,
};
