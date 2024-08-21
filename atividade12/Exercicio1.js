function calcularNumeros() {
    const num1 = parseFloat(prompt("Digite o primeiro número:"));
    const num2 = parseFloat(prompt("Digite o segundo número:"));
    const num3 = parseFloat(prompt("Digite o terceiro número:"));

    function soma() {
        return Array.prototype.reduce.call(arguments, (acc, curr) => acc + curr, 0);
    }

    function quadrado(num) {
        return num * num;
    }

    const somaTotal = soma.apply(null, [num1, num2, num3]);
    const quadradoPrimeiro = quadrado.apply(null, [num1]);
    const quadradoSegundo = quadrado.apply(null, [num2]);

    return `A soma dos três números é: ${somaTotal}, o quadrado do primeiro é: ${quadradoPrimeiro} e o quadrado do segundo é: ${quadradoSegundo}`;
}

window.onload = function() {
    const resultado = calcularNumeros();
    alert(resultado);
}
