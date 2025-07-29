
const fs = require("node:fs")

fs.readFile("./arq1.txt", function(erro ,resposta){
  // console.log("erro",erro);
  // console.log("resposta",resposta);

  fs.readFile("./arq2.txt", function(erro2, resposta2){
    //console.log("erro2",erro2);
    //console.log("resposta2",resposta2);
  })
  
}) 

console.log("FIM");