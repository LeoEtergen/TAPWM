function getDadosDosComentarios() {
    const idDoPostAleatorio = Math.floor(Math.random() * 100) + 1;
    const apiUrl = `https://jsonplaceholder.typicode.com/comments?postId=${idDoPostAleatorio}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const comentarios = data.map(comentario => `<p>${comentario.body}</p>`).join('');
            mostrarResultado('Comentário', comentarios);
        })
        .catch(error => {
            console.error('Erro ao obter dados:', error);
        });
}

function getImagemAleatoria() {
    const imageUrl = 'https://picsum.photos/400/300'; // Exemplo de imagem aleatória do Lorem Picsum
    mostrarResultado('Imagem Aleatória', `<img src="${imageUrl}" alt="Imagem Aleatória">`);
}

function limparDados() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';
}

function mostrarResultado(titulo, conteudo) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <h2>${titulo}</h2>
        ${conteudo}
    `;
}