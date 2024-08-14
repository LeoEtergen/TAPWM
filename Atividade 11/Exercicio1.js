function maior(a, b, c, d){
    if (a>b && b>c && c>d) {
        return "O maior número é o " + a + ".";
    }
    else if(b>c && c>a && a>d){
        return "O maior número é o " + b + ".";
    }
    else if(c>a && a>b && b>d){
        return "O maior número é o " + c + ".";
    }
    else if(d>c && c>b && b>a){
        return "O maior número é o " + d + ".";
    }
    else{
        return "Escreva apenas números."
    }
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