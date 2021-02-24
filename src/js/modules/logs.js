const nTF = require("./nice-time-format");
const getTime = require("./reloj");
const fs = require("fs");
const {app} = require("electron").remote;

const dir = app.getPath("documents") + "\\SAP Playout\\logs"
if (!fs.existsSync(dir)){
  fs.mkdirSync(dir);
}

var log_file = fs.createWriteStream(dir + `\\${getTime.gT("DateLog")}.slog`, {flags : 'w'});

function writeLog(grid_element,datosStream){
  var item = grid_element.data._order[grid_element.data.getIndex(datosStream.id)],
      name = item.namefile,
      duration = nTF.secToHHMMSS(item.duration)
  log_file.write(util.format(`{"fecha": "${getTime.gT("DateDMYYYY")}","hora": "${getTime.gT("hms24")}","nombre": "${name}","duracion": "${duration}"},`));
}

function writeEventsLog(data){
  log_file.write(util.format(`{"fecha": "${getTime.gT("DateDMYYYY")}","hora": "${getTime.gT("hms24")}","nombre": "${data}"},`));
}

function loadDir(elementgrid){
  fs.readdir(dir, (err, files) => {
    files.forEach(file => {
      elementgrid.data.add({
        filelog: file,
        path: dir+"\\"+file,
      })
    });
  });
}

function readLog(path,elementgrid){
  elementgrid.data.removeAll()
  fetch(path).then((results) => results.text()).then(function (slog) {
    var dataset = new dhx.DataCollection().parse(JSON.parse("["+slog.slice(0, -1)+"]"))
    elementgrid.data.add(dataset)
  });
}

// log_file.write(util.format(`Fecha,Hora,Nombre,Duración\n`));

module.exports = { 
  writeLog,
  writeEventsLog,
  readLog,
  loadDir,
 };