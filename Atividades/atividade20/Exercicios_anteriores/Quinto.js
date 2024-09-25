var eventos = require('events'); //atribuição da classe

var EmissorEventos = eventos.EventEmitter;

var ee = new EmissorEventos();
// ou criando direto sem a variável intermediária

ee.on('dados', function(fecha){
    console.log(fecha);
});

//Emissão do evento a cada 500 milissegundos:
setInterval(function(){
    ee.emit('dados', Date.now());
}, 500)