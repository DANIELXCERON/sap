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
  if (!fs.existsSync(pathFile)) {// si no existe el archivo
    f = "w" // escribir
    log_file = fs.createWriteStream(pathFile, { flags: f });
    log_file.write(util.format(
      `fecha,Hora,duracion,ref,nombre,id\n`
      ));
  } else {
    f = "a" // agregar
    log_file = fs.createWriteStream(pathFile, { flags: f });
  }

}

const write = data => {
  checkFile()
  var n = data.namefile,
    d = nTF.secToHHMMSS(data.duration),
    r = data.ref,
    id = `u${Date.now()}`,
    p = filename(data.path)
  log_file.write(
    util.format(
      `${getTime.gT("DateDMYYYY")},${getTime.gT("hms24")},${d},${r},${n.replace(/,/g, '')},${id}\n`
      ));

  if (data.screenshot) {
    /**Crear carpeta screenshot*/
    var dirScreenshot = dirLog + `\\${getTime.gT("DateLog")}-screenshots`
    if (!fs.existsSync(dirScreenshot)) {// si no existe el directorio
      fs.mkdirSync(dirScreenshot);// crea el directorio
    }
    /**Crear carpeta individual*/
    var dirIndividualScreenshot = dirScreenshot + `\\${p}`
    if (!fs.existsSync(dirIndividualScreenshot)) {// si no existe el directorio
      fs.mkdirSync(dirIndividualScreenshot);// crear el directorio
    }
    console.log(nTF.RelojToSec(data.duration))
    setTimeout(() => {
      ipcRenderer.send("screenshot", dirIndividualScreenshot + `\\${id}.jpeg`);
    }, 3000);
    // nTF.randomNumber(nTF.RelojToSec(data.duration))
  }
}

/** funcion para extraer nombre del archivo de una ruta */
const filename = rutaAbsoluta => {
  var nombreArchivo = rutaAbsoluta.replace(/^.*(\\|\/|\:)/, ""); // dejar solo nombre
  nombreArchivo = nombreArchivo.replace(/(.*)\.(.*?)$/, "$1"); // eliminar extencion
  //.replace(/^.*[\\\/]/, "")
  return nombreArchivo;
}

const writeEventsLog = (data, n) => {
  checkFile()
  var p = data.path,
    r = data.ref
  log_file.write(util.format(
    `{"fecha":"${getTime.gT("DateDMYYYY")}","hora":"${getTime.gT("hms24")}","ref":"${r}","nombre":"${n}","info":"${p}"},`
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
  const contentLog = await res.text();
  const dataset = new dhx.DataCollection().parse(JSON.parse("[" + contentLog.slice(0, -1) + "]"))
  const arrayData = dataset.map(item => {
    const items = {
      fecha: item.fecha,
      hora: item.hora,
      duracion: item.duracion,
      ref: item.ref,
      nombre: item.nombre.replace(/,/g, ''),//eliminar comas
      id: item.id,
    }
    return items
  })
  const ListPages = limit(arrayData)

  sessionStorage.setItem("Numbers_pages_logger_view", ListPages.length)
  sessionStorage.setItem("List_Pages", JSON.stringify(ListPages))
  sessionStorage.setItem("current_page_logger_view", 0)

  elementgrid.data.removeAll()
  elementgrid.data.parse(arrayData)
  // elementgrid.data.parse(ListPages[0].list)

  document.querySelector("#grid_log_count").innerHTML = `1 / ${ListPages.length}`
}

const limit = arrayData => {
  let ini = 0
  let limit = 1000
  let end = limit

  const divi = arrayData.length / limit
  const rest = (divi - parseInt(divi)) > 0 ? 1 : 0
  const pages = parseInt(divi) + rest

  let listDivi = []
  for (let i = 0; i < pages; i++) {

    listDivi.push({
      page: i,
      list: arrayData.slice(ini, end)
    })

    ini = end
    end += limit
  }

  return listDivi

}



module.exports = {
  write,
  writeEventsLog,
  writeGCLog,
  writeControlPlayerLog,
  readLog,
  loadDir,
};