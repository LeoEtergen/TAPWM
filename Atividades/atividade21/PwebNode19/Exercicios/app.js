var express = require('express');
var app=express(); //executando o express


 
app.set('view engine', 'ejs');
 
app.get('/', function (req, res) {
    res.send("<html><body>Site da Fatec Sorocaba</body></html>");
});
 
app.get('/historia', function (req, res) {
    res.send("<html><body>História da Fatec Sorocaba</body></html>");
});
 
app.get('/cursos', function (req, res) {
    res.send("<html><body>Cursos da Fatec Sorocaba</body></html>");
});
 
app.get('informacao/professores', function (req, res) {
    res.render("informacao/professores");
});
 
app.listen(3000, function(){
    console.log("Servidor com express foi carregado.");
});
