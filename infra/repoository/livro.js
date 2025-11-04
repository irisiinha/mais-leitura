const { query: q, query } = require("../database");

async function consutarTodos(){
  const sql = "SELECT * FROM livro";

  const resultados = await query(sql)

  return resultados;
}

async function consutarTops(){
  const sql = `SELECT * FROM livro WHERE top_livro = true`;

  const resultados = await query(sql)

  return resultados;
}

module.exports = { consutarTodos, consutarTops};