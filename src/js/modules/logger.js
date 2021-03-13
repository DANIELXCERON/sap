const nTF = require("./nice-time-format");
const getTime = require("./reloj");
const fs = require("fs");
const {app} = require("electron").remote;

var dir,dirSap,pathFile,log_file,f

dirSap = app.getPath("documents") + "\\SAP Playout"
dir = app.getPath("documents") + "\\SAP Playout\\logs"



if (!fs.existsSync(dir)){// si no existe el directorio
  fs.mkdirSync(dirSap);// crea el directorio
  fs.mkdirSync(dir);// crea el directorio
}

function checkFile(){
  pathFile = dir + `\\${getTime.gT("DateLog")}.log`
  if (!fs.existsSync(pathFile)){// si no existe el archivo
    f = "w" // escribir
  }else{
    f = "a" // agregar
  }
  log_file = fs.createWriteStream(pathFile, {flags : f});
}

function write(data){
  checkFile()
  var n = data.namefile,
      d = nTF.secToHHMMSS(data.duration),
      r = data.ref,
      id = `u${Date.now()}`,
      p = filename(data.path)
  log_file.write(util.format(`{"fecha":"${getTime.gT("DateDMYYYY")}","hora":"${getTime.gT("hms24")}","duracion":"${d}","ref":"${r}","nombre":"${n}","id":"${id}"},`));

  if(data.screenshot){
    /**Crear carpeta screenshot*/
    var dirScreenshot = dir + `\\${getTime.gT("DateLog")}-screenshots`
    if (!fs.existsSync(dirScreenshot)){// si no existe el directorio
      fs.mkdirSync(dirScreenshot);// crea el directorio
    }
    /**Crear carpeta individual*/
    var dirIndividualScreenshot = dirScreenshot + `\\${p}`
    if (!fs.existsSync(dirIndividualScreenshot)){// si no existe el directorio
      fs.mkdirSync(dirIndividualScreenshot);// crear el directorio
    }
    console.log(nTF.RelojToSec(data.duration))
    setTimeout(function () {
      ipcRenderer.send("screenshot",dirIndividualScreenshot + `\\${id}.jpeg`);
    }, 3000);
  // nTF.randomNumber(nTF.RelojToSec(data.duration))
  }
}

/** funcion para extraer nombre del archivo de una ruta */
function filename(rutaAbsoluta) {
  var nombreArchivo = rutaAbsoluta.replace(/^.*(\\|\/|\:)/, ""); // dejar solo nombre
  var nombreArchivo = nombreArchivo.replace(/(.*)\.(.*?)$/, "$1"); // eliminar extencion
  //.replace(/^.*[\\\/]/, "")
  return nombreArchivo;
}

function writeEventsLog(data,n){
  checkFile()
  var p = data.path,
      r = data.ref
  log_file.write(util.format(`{"fecha":"${getTime.gT("DateDMYYYY")}","hora":"${getTime.gT("hms24")}","ref":"${r}","nombre":"${n}","info":"${p}"},`));
}

function writeControlPlayerLog(n,i){
  checkFile()
  log_file.write(util.format(`{"fecha":"${getTime.gT("DateDMYYYY")}","hora":"${getTime.gT("hms24")}","ref":"Control","nombre":"${n}","info":"${i}"},`));
}

function writeGCLog(datosGC){
  checkFile()
  var s = ''
  var html = datosGC.textoGC

  html = html.replace(/<style([\s\S]*?)<\/style>/gi, '');
  html = html.replace(/<script([\s\S]*?)<\/script>/gi, '');
  html = html.replace(/<\/div>/ig, s);
  html = html.replace(/<\/li>/ig, s);
  html = html.replace(/<li>/ig, '  *  ');
  html = html.replace(/<\/ul>/ig, s);
  html = html.replace(/<\/p>/ig, s);
  html = html.replace(/<br\s*[\/]?>/gi, s);
  html = html.replace(/<[^>]+>/ig, '');

  log_file.write(util.format(`{"fecha":"${getTime.gT("DateDMYYYY")}","hora":"${getTime.gT("hms24")}","ref":"GC","nombre":"Generador de caracteres","info":"${html}"},`));
}


function loadDir(elementgrid){
  elementgrid.data.removeAll()
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