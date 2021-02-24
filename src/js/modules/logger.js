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

  if(!n){
    n = data.path
  }
  log_file.write(util.format(`{"fecha": "${getTime.gT("DateDMYYYY")}","hora": "${getTime.gT("hms24")}","duracion": "${d}","ref": "${r}","nombre": "${n}"},`));
}

function writeEventsLog(data){
  log_file.write(util.format(`{"fecha": "${getTime.gT("DateDMYYYY")}","hora": "${getTime.gT("hms24")}","nombre": "${data}"},`));
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
  readLog,
  loadDir,
 };