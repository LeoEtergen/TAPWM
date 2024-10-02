var app = require("./app/config/server"); //carregando o módulo do servidor

app.get('/', function (req, res) {
    res.send("<html><body>Site da Fatec Sorocaba</body></html>");
});
 
app.get('/historia', function (req, res) {
    res.send("<html><body>História da Fatec Sorocaba</body></html>");
});
 
app.get('/cursos', function (req, res) {
    res.send("<html><body>Cursos da Fatec Sorocaba</body></html>");
});
 
app.get('/professores', function (req, res) {
    res.send("<html><body>Professores da Fatec Sorocaba</body></html>");
});
 
app.listen(3000, function(){
    console.log("Servidor iniciado.");
});
