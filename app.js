const express = require ('express');
const mustache = require('mustache-express');
const router = require('./routes/index');
const helpers = require('./helpers');
const errorHandler = require('./handlers/errorHandler');

//Configurações
const app = express();

app.use((req, res, next)=>{
    res.locals.h = helpers;
    next();
});

//Para tratar as requisições post da mesma forma que eu trato as get
app.use(express.json());

app.use('/', router);

//Se não econtrar a rota executa esse codigo
app.use(errorHandler.notFoud);

app.engine('mst', mustache(__dirname+'/views/partials', '.mst'));
app.set('view engine', 'mst');
app.set('views', __dirname + '/views'); 

module.exports = app;