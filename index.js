require('dotenv').config();
const livroRepositorio = require('./infra/repoository/livro');
const http = require("node:http");

const server = http.createServer(function (req, res){
  //res.writHead(200, {'Content-Type': 'text/plain'});
  console.log(req.method, req.url);
  res.end("ok bem vindo")
});

const port = process.env.PORT || 3001;
server.listen(port, function(){
  console.log("incializando sevidor http na porta" + port);
});