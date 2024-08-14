function maior(a, b, c, d){
    return "O maior número é o " + Math.max(a, b, c, d)
}

function main(){
    var a = parseFloat(prompt("Insira o primeiro número:"));
    var b = parseFloat(prompt("Insira o segundo número:"));
    var c = parseFloat(prompt("Insira o terceiro número:"));
    var d = parseFloat(prompt("Insira o quarto número:"));

    var resultado = maior(a, b, c, d);
    alert(resultado);
}

main();