class Retangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return this.base * this.altura;
    }
}

var base = parseFloat(prompt("Insira o valor da base do retângulo:"));
var altura = parseFloat(prompt("Insira o valor da altura do retângulo:"));

var retangulo = new Retangulo(base, altura);

var area = retangulo.calcularArea();
alert("A área do retângulo é: " + area);
