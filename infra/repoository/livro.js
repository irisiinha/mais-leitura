const { query: q, query } = require("../database");

async function consutarTodos(){
  const sql = "SELECT * FROM livro";

  const resultados = await query(sql)

  return resultados;
}

module.exports = { consutarTodos };