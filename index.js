require('dotenv').config();
const livroRepositorio = require('./infra/repoository/livro');

livroRepositorio
.consutarTodos()
  .then(function (resultados) {
  console.log(resultados);
})
.catch(function (erro) {
console.log("Deu erro: ", erro);
});
