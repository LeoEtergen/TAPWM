function ordenarCrescente(a, b, c) {
    if (a <= b && b <= c) {
        return a + ", " + b + ", " + c;
    } else if (a <= c && c <= b) {
        return a + ", " + c + ", " + b;
    } else if (b <= a && a <= c) {
        return b + ", " + a + ", " + c;
    } else if (b <= c && c <= a) {
        return b + ", " + c + ", " + a;
    } else if (c <= a && a <= b) {
        return c + ", " + a + ", " + b;
    } else { // c <= b && b <= a
        return c + ", " + b + ", " + a;
    }
}

function main() {
    var a = parseFloat(prompt("Insira o primeiro número:"));
    var b = parseFloat(prompt("Insira o segundo número:"));
    var c = parseFloat(prompt("Insira o terceiro número:"));

    var resultado = ordenarCrescente(a, b, c);
    alert("Os números em ordem crescente são: " + resultado);
}

main();
