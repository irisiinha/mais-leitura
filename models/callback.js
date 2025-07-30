
const fs = require("node:fs")

fs.readFile("./arq1.txt", function(erro1 ,resposta1){
  if(erro1){
    console.log("erro ao ler o primeiro arquivo")
    return
  }
  fs.readFile("./arq2.txt", function(erro2, resposta2){
    if(erro2){
      console.log("erro ao ler o segundo arquivo")
      return
    }
    fs.readFile("./arq3.txt", function(erro3,resposta3){
      if(erro3){
        console.log("erro ao ler o terceiro arquivo")
        return
      }
      console.log(`${resposta1}${resposta2}${resposta3}`);
    })
  })
}) 

console.log("FIM");