function validar() {
    var nome = document.nomeform.elements["nome"].value;
    var email = document.nomeform.elements["email"].value;
    var comentario = document.nomeform.elements["comentario"].value;
    var pesquisa = document.nomeform.elements["pesquisa"].value;
    
    // Validação do nome
    if (nome.length < 10) {
        alert("O nome deve ter no mínimo 10 caracteres.");
        return false;
    }

    // Validação do email
    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        alert("Por favor, insira um endereço de e-mail válido.");
        return false;
    }

    // Validação do comentário
    if (comentario.length < 20) {
        alert("O comentário deve ter no mínimo 20 caracteres.");
        return false;
    }

    // Validação da pesquisa
    if (pesquisa === "nao") {
        alert("Que bom que você voltou a visitar esta página!");
    } else if (pesquisa === "sim") {
        alert("Volte sempre a esta página!");
    } else {
        alert("Por favor, responda à pesquisa.");
        return false;
    }

    return true;
}
