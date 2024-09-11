function verificarSubconjunto() {
    const palavra1 = prompt("Digite a primeira palavra:");
    const palavra2 = prompt("Digite a segunda palavra:");

    if (!palavra1 || !palavra2) {
        return "erro";
    }

    if (palavra1.includes(palavra2)) {
        return "é um subconjunto";
    } else {
        return "não é um subconjunto";
    }
}

window.onload = function() {
    const resultado = verificarSubconjunto();
    alert(resultado);
}
