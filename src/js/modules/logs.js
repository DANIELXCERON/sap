const nTF = require("./nice-time-format");
const getTime = require("./reloj");
const fs = require("fs");
const {app} = require("electron").remote;

function writeLogVideo(grid_element,datosStream){
  var item = grid_element.data._order[grid_element.data.getIndex(datosStream.id)],
      name = item.namefile,
      duration = nTF.secToHHMMSS(item.duration)
  log_file.write(util.format(`
{
  "fecha": "${getTime.gT("DateDMYYYY")}",
  "hora": "${getTime.gT("hms24")}",
  "nombre": "${name}",
  "duracion": "${duration}"
},`));
}


const dir = app.getPath("documents") + "/SAP Playout/logs"
if (!fs.existsSync(dir)){
  fs.mkdirSync(dir);
  
}
var log_file = fs.createWriteStream(dir + `/${getTime.gT("DateLog")}.slog`, {flags : 'w'});
// log_file.write(util.format(`Fecha,Hora,Nombre,Duración\n`));



fs.readdir(dir, (err, files) => {
  files.forEach(file => {
    fetch(dir+"/"+file).then((results) => results.text()).then(function (slog) {
      console.log(JSON.parse("["+slog.slice(0, -1)+"]"));
    });
  });
});


module.exports = { writeLogVideo };
