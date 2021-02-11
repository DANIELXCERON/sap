const nTF = require("./nice-time-format");

/*
  parametros dentro de startClock(array,element)

  array: se compone del formato para llamar al reloj o una fecha
  por ejemplo "hms24" devuelve la hora en 24 horas, si se agregan mas formatos
  (ver los formatos que retorna "switch case")
  podemos agregar en medio otro item en el array como una cadena ya sea de espacio
  o cualquier caracter o palabra que queramos concatenar

  element: es un elemento del Dom llamado por su id, class o tagname
  por ejemplo: element = document.querySelector("tag");
  en este se pinta el reloj
  */

function startClock(format, contHTML) {
  if (format.length > 1) {
    format.forEach(function (item, i, array) {
      if (format.length > i) {
        contHTML.innerHTML = "";
      }
    });
    format.forEach(function (item, i, array) {
      contHTML.innerHTML += " " + gT(item) + " ";
    });
  } else {
    htmlget = gT(format[0]);
    contHTML.innerHTML = htmlget;
  }

  setTimeout(function () {
    startClock(format, contHTML);
  }, 1000);
}

function gT(Iwant) {
  // exporta la funcion para obtener el tiempo actual
  var CurrentTime = new Date();

  var hr = CurrentTime.getHours(); // Devuelve la hora (de 0 a 23)
  var min = CurrentTime.getMinutes(); // Devuelve los minutos (de 0 a 59)
  var sec = CurrentTime.getSeconds(); // Devuelve los segundos (de 0 a 59)

  var DayWeek = CurrentTime.getDay(); // Devuelve el día de la semana (de 0 a 6) iniciando en Domingo

  var dd = CurrentTime.getDate(); // Devuelve el día del mes (de 1 a 31)
  var mm = CurrentTime.getMonth(); // Devuelve el mes (de 0-11)
  var yyyy = CurrentTime.getFullYear(); // Devuelve el año

  var mesCorto = [
    "ene",
    "feb",
    "mar",
    "abr",
    "may",
    "jun",
    "jul",
    "ago",
    "sep",
    "oct",
    "nov",
    "dic",
  ];
  var mes = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  var diaCorto = ["dom", "lun", "mar", "mie", "jue", "vie", "sab"];
  var dia = [
    "domingo",
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
  ];

  var hms24 = nTF.hmsToHHMMSS(hr, min, sec);

  ap = hr < 12 ? " a.m." : " p.m.";
  hr = hr == 0 ? 12 : hr;
  hr = hr > 12 ? hr - 12 : hr;

  var hms12 = nTF.hmsToHHMMSS(hr, min, sec);
  var hms12ap = nTF.hmsToHHMMSS(hr, min, sec) + " " + ap;

  var FullDate = dia[DayWeek] + ", " + dd + " de " + mes[mm] + " de " + yyyy;
  var DateShort = diaCorto[DayWeek] + ", " + dd + " de " + mesCorto[mm] + " de " + yyyy;

  var DateDMYYYY = nTF.checkFormat(dd) + "/" + nTF.checkFormat(mm + 1) + "/" + yyyy;

  switch (Iwant) {
    // "minutos y segundos en 00:00"
    case "min_sec":
      return nTF.checkFormat(min) + ":" + nTF.checkFormat(sec);

    // "00:00:00"
    case "hms24":
      return hms24;

    // "lun, mar, mie, ..."
    case "diaCorto":
      return diaCorto[DayWeek];

    // "ene, feb, mar, ..."
    case "mesCorto":
      return mesCorto[mm];

    // "12:00:00"
    case "hms12":
      return hms12;

    // "12:00:00 a.m."
    case "hms12ap":
      return hms12ap;

    // "lun, 1 de Ene de 2020"
    case "DateShort":
      return DateShort;

    // "lunes, 1 de Enero de 2020"
    case "FullDate":
      return FullDate;

    // "01/01/2020"
    case "DateDMYYYY":
      return DateDMYYYY;

    // Dia de la semana en numero del 0-6 iniciando por domingo
    case "DayWeek":
      return DayWeek;

    // devuelve cadena enviada
    default:
      return Iwant;
  }
}

module.exports = { gT, startClock };
