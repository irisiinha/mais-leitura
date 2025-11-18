const { query: q, query } = require("../database");

async function consutarTodos(){
  const sql = "SELECT * FROM livro";

  const resultados = await query(sql)

  return resultados;
}

async function consutaTops(){
  const sql = `SELECT * FROM livro WHERE top_livro= true`;

  const resultados = await query(sql)

  return resultados;
}
async function consutaAdqueridos(){
  const sql = `SELECT * FROM livro WHERE livros_mas_adqueridos= true`;

  const resultados = await query(sql)

  return resultados;
}

module.exports = { consutarTodos, consutaTops , consutaAdqueridos };