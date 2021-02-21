var Datastore = require("nedb");
const { app } = require("electron").remote;

let bd = new Datastore({
  filename: app.getPath("documents") + "\\SAP Playout\\db\\storage.db",
  autoload: true,
});

function setItem(key, value) {
  bd.findOne({ key: key }, function (error, item) {
  if (item){
    bd.update({ key: key }, { key: key, value: value}, {}, function (err, numReplaced) {

    });
  }else{
    bd.insert({
      key: key,
      value: value
    }, function (error, item) {});
  }
  });
}

function getItem(key) {
  bd.find({ key: key }, function (err, docs) {
    if (err) throw err;
    do_something_when_you_get_your_result(docs);
  });
  
  function do_something_when_you_get_your_result(docs) {
    return docs[0].value
  }
}

function removeItem(key) {
  bd.remove({ key: key }, {}, function (error, item) {
    console.log("eliminado:",item)
  });
}

module.exports = {
  setItem,
  getItem,
  removeItem,
};
