var imgJanela = document.getElementById('janelaImg');
var tituloEstado = document.getElementById('estadoJanela');

imgJanela.addEventListener('mouseover', function() {
    if (imgJanela.src.includes('fechada.png')) {
        imgJanela.src = 'aberta.png';
        tituloEstado.innerText = 'Janela Aberta';
    }
});

imgJanela.addEventListener('mouseout', function() {
    if (!imgJanela.src.includes('quebrada.png')) {  // Verifica se a janela não está quebrada
        imgJanela.src = 'fechada.png';
        tituloEstado.innerText = 'Janela Fechada';
    }
});

imgJanela.addEventListener('click', function() {
    imgJanela.src = 'quebrada.png';
    tituloEstado.innerText = 'Janela Quebrada';
});
