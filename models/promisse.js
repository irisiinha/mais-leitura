const readFile = require("node:readline");
const terminal = readFile.createInterface({
  input:process.stdin,
  output: process.stdin,
});

terminal.question("qual seu nome: \n",function (valor){
  console.log("seja bem vindo" + valor);
});