var express = require('express');
var app=express(); //executando o express

 
app.set('view engine', 'ejs'); //mecanismo de engine
app.set('views','./app/views'); // diretório onde estão os arquivos

module.exports = app;