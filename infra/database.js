const {Client} = require("pg");
const { prototype } = require("pg/lib/type-overrides");

function query (sql){
const client = new Client({
    host: "",
    port: 5432,
    user:"" ,
    password: "",
  })
}
