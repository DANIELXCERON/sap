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

const startClock = (format, contHTML) => {
  if (format.length > 1) {
    format.forEach((item, i, array) => {
      if (format.length > i) {
        contHTML.innerHTML = "";
      }
    });
    format.forEach((item, i, array) => {
      contHTML.innerHTML += " " + gT(item) + " ";
    });
  } else {
    htmlget = gT(format[0]);
    contHTML.innerHTML = htmlget;
  }

  setTimeout(() => startClock(format, contHTML), 1000);
}

const gT = (Iwant, CurrentTime = new Date()) => {

  let hr = CurrentTime.getHours(); // Devuelve la hora (de 0 a 23)
  let min = CurrentTime.getMinutes(); // Devuelve los minutos (de 0 a 59)
  let sec = CurrentTime.getSeconds(); // Devuelve los segundos (de 0 a 59)

  let DayWeek = CurrentTime.getDay(); // Devuelve el día de la semana (de 0 a 6) iniciando en Domingo

  let dd = CurrentTime.getDate(); // Devuelve el día del mes (de 1 a 31)
  let mm = CurrentTime.getMonth(); // Devuelve el mes (de 0-11)
  let yyyy = CurrentTime.getFullYear(); // Devuelve el año

  let mesCorto = [
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
  let mes = [
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
  let diaCorto = ["dom", "lun", "mar", "mie", "jue", "vie", "sab"];
  let dia = [
    "domingo",
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
  ];

  let hms24 = nTF.hmsToHHMMSS(hr, min, sec);

  let ap = hr < 12 ? " a.m." : " p.m.";
  hr = hr === 0 ? 12 : hr;
  hr = hr > 12 ? hr - 12 : hr;

  let hms12 = nTF.hmsToHHMMSS(hr, min, sec);
  let hms12ap = nTF.hmsToHHMMSS(hr, min, sec) + " " + ap;

  let FullDate = dia[DayWeek] + ", " + dd + " de " + mes[mm] + " de " + yyyy;
  let DateShort = dd + " " + mes[mm] + ", " + yyyy;

  let DateDMYYYY = nTF.checkFormat(dd) + "/" + nTF.checkFormat(mm + 1) + "/" + yyyy;

  let DateLog = `${yyyy}-${mes[mm]}`;

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

    // "1 Enero, 2020"
    case "DateShort":
      return DateShort;

    // "lunes, 1 de Enero de 2020"
    case "FullDate":
      return FullDate;

    // "01/01/2020"
    case "DateDMYYYY":
      return DateDMYYYY;

    // "01-01-2020"
    case "DateLog":
      return DateLog;

    // Dia de la semana en numero del 0-6 iniciando por domingo
    case "DayWeek":
      return DayWeek;

    // devuelve cadena enviada
    default:
      return Iwant;
  }
}

module.exports = { gT, startClock };
