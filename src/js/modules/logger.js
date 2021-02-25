const nTF = require("./nice-time-format");
const getTime = require("./reloj");
const fs = require("fs");
const {app} = require("electron").remote;

var dir,pathFile,log_file,f


dir = app.getPath("documents") + "\\SAP Playout\\logs"
pathFile = dir + `\\${getTime.gT("DateLog")}.log`

if (!fs.existsSync(dir)){// si no existe el directorio
  fs.mkdirSync(dir);// crea el directorio
}

if (!fs.existsSync(pathFile)){// si no existe el archivo
  f = "w" // escribir
}else{
  f = "a" // agregar
}
log_file = fs.createWriteStream(pathFile, {flags : f});


function write(data){
  var n = data.namefile,
      d = nTF.secToHHMMSS(data.duration),
      r = data.ref
  log_file.write(util.format(`{"fecha":"${getTime.gT("DateDMYYYY")}","hora":"${getTime.gT("hms24")}","duracion":"${d}","ref":"${r}","nombre":"${n}"},`));
}



function writeEventsLog(data,n){
  var p = data.path,
      r = data.ref
  log_file.write(util.format(`{"fecha":"${getTime.gT("DateDMYYYY")}","hora":"${getTime.gT("hms24")}","ref":"${r}","nombre":"${n}","info":"${p}"},`));
}

function writeControlPlayerLog(n,i){
  log_file.write(util.format(`{"fecha":"${getTime.gT("DateDMYYYY")}","hora":"${getTime.gT("hms24")}","ref":"Control","nombre":"${n}","info":"${i}"},`));
}

function writeGCLog(datosGC){
  var s = ''
  var h = datosGC.textoGC

  h = h.replace(/<style([\s\S]*?)<\/style>/gi, '');
  h = h.replace(/<script([\s\S]*?)<\/script>/gi, '');
  h = h.replace(/<\/div>/ig, s);
  h = h.replace(/<\/li>/ig, s);
  h = h.replace(/<li>/ig, '  *  ');
  h = h.replace(/<\/ul>/ig, s);
  h = h.replace(/<\/p>/ig, s);
  h = h.replace(/<br\s*[\/]?>/gi, s);
  h = h.replace(/<[^>]+>/ig, '');

  log_file.write(util.format(`{"fecha":"${getTime.gT("DateDMYYYY")}","hora":"${getTime.gT("hms24")}","ref":"GC","nombre":"Generador de caracteres","info":"${h}"},`));
}


function loadDir(elementgrid){
  fs.readdir(dir, (err, files) => {
    files.forEach(file => {
      elementgrid.data.add({
        filelog: file.slice(0,-4).replace(/-/g, "/"),
        path: dir+"\\"+file,
      })
    });
  });
}

function readLog(path,elementgrid){
  elementgrid.data.removeAll()
  fetch(path).then((results) => results.text()).then(function (contentLog) {
    var dataset = new dhx.DataCollection().parse(JSON.parse("["+contentLog.slice(0, -1)+"]"))
    elementgrid.data.add(dataset)
  });
}

// log_file.write(util.format(`Fecha,Hora,Nombre,Duración\n`));

module.exports = { 
  write,
  writeEventsLog,
  writeGCLog,
  writeControlPlayerLog,
  readLog,
  loadDir,
 };