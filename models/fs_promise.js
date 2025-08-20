const fs = require("node:fs");
function readFile(arquivo) {
  return new Promise((resolve, reject) => {
    fs.readFile(arquivo, "utf8", (err, ) => {
      if (err) {
        reject(err);
      return
      }
      resolve(resposta).tostring();
    });
  });
   return promessa ;
  } 
  readFile("./arq1.txt")
    .then(function(valor){

    }).catch(function(erro){

    }).finally(function(){

    });