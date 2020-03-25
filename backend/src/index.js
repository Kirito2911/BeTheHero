const express = require("express");
const cors = require('cors');
const routes = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
/*
Metodos HTTP:
GET: Buscar uma informacao no back-end
POST: Criar uma informacao no back-end
PUT: Alterar um informacao no back-end
DELETE: Deletar uma informacao no back-end
*/ 

/*
Tipos de Parametros:

Query Parans: Parametros nomeados enviados na rota apos "?" (Filtros, paginacao...)
Route Parans: Parametros utilizados para identificar recursos
Request Body: Corpo da requsicao, utilizado para criar ou alterar recursos
*/

/*Bancos de Dados:
SQL: Mysql, SQlite, posgresql, oracle
NoSQl: MongoDB, CouchDB */



app.listen(3333);