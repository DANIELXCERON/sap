const nTF = require("./nice-time-format");
const getTime = require("./reloj");
const fs = require("fs");
const { app } = require("electron").remote;

let dirLog, dirSap, pathFile, log_file, f, dirDocument

dirDocument = app.getPath("documents")
dirSap = dirDocument + "\\SAP Playout"
dirLog = dirDocument + "\\SAP Playout\\logs"

const checkCreateDir = dir => {
  fs.existsSync(dir) ? null : fs.mkdirSync(dir)
}

checkCreateDir(dirSap)
checkCreateDir(dirLog)

const checkFile = () => {
  pathFile = dirLog + `\\${getTime.gT("DateLog")}.csv`
  const f = fs.existsSync(pathFile) ? "a" : "w" // "a" agrega "w" escribe
  log_file = fs.createWriteStream(pathFile, { flags: f });
  if (f === "w") {
    log_file.write(
      util.format(
        `Fecha,Hora,Duración,Tipo,Nombre,Id\r`
      ));
  }
}

const write = data => {
  checkFile()
  var n = data.namefile,
    d = nTF.secToHHMMSS(data.duration),
    r = data.ref,
    id = `u${Date.now()}`,
    p = nTF.filename(data.path)
  log_file.write(
    util.format(
      `${getTime.gT("DateDMYYYY")},${getTime.gT("hms24")},${d},${r},${n.replace(/,/g, '')},${id}\r`
    ));

  if (data.screenshot) {

    /**Crear carpeta screenshot*/
    var dirScreenshot = dirLog + `\\${getTime.gT("DateLog")}-screenshots`
    fs.existsSync(dirScreenshot) ? null : fs.mkdirSync(dirScreenshot)

    /**Crear carpeta individual*/
    const dirIndividualScreenshot = dirScreenshot + `\\${p}`
    fs.existsSync(dirIndividualScreenshot) ? null : fs.mkdirSync(dirIndividualScreenshot)

    setTimeout(() => {
      ipcRenderer.send("screenshot", dirIndividualScreenshot + `\\${id}.jpeg`);
    }, 3000);
    // nTF.randomNumber(nTF.RelojToSec(data.duration))
  }
}

const writeEventsLog = (data, n) => {
  checkFile()
  var p = data.path,
    r = data.ref
  log_file.write(util.format(
    `${getTime.gT("DateDMYYYY")},${getTime.gT("hms24")},${r},${n},${p}\n`
  ));
}

const writeControlPlayerLog = (n, i) => {
  checkFile()
  log_file.write(util.format(
    `{"fecha":"${getTime.gT("DateDMYYYY")}","hora":"${getTime.gT("hms24")}","ref":"Control","nombre":"${n}","info":"${i}"},`
  ));
}

const writeGCLog = datosGC => {
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

  log_file.write(util.format(
    `{"fecha":"${getTime.gT("DateDMYYYY")}","hora":"${getTime.gT("hms24")}","ref":"GC","nombre":"Generador de caracteres","info":"${html}"},`
  ));
}


const loadDir = elementgrid => {
  elementgrid.data.removeAll()
  fs.readdir(dirLog, (err, files) => {
    files.map(file => {
      if (nTF.validExts(file, ["csv"])) {
        elementgrid.data.add({
          filelog: file.slice(0, -4).replace(/-/g, "/"),
          path: dirLog + "\\" + file,
        })
      }
    });
  });
}

const readLog = async (path, elementgrid) => {
  const res = await fetch(path);
  const file = await res.text();
  const data = Papa.parse(file);
  elementgrid.data.parse(papaTojson(data.data))
}

const papaTojson = (data) => {
  const json = []
  data.slice(1, -1).map(res => {
    json.push({
      fecha: res[0],
      hora: res[1],
      duracion: res[2],
      tipo: res[3],
      nombre: res[4],
      id: res[5],
    })
  })
  return json
}

module.exports = {
  write,
  writeEventsLog,
  writeGCLog,
  writeControlPlayerLog,
  readLog,
  loadDir,
};