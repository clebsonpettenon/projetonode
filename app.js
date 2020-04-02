const express = require ('express');
const mustache = require('mustache-express');
const router = require('./routes/index');

//Configurações
const app = express();
app.use('/', router);

//Para tratar as requisições post da mesma forma que eu trato as get
app.use(express.json());

app.engine('mst', mustache());
app.set('view engine', 'mst');
app.set('views', __dirname + '/views'); 

module.exports = app;