// FUNÇÃO CONSTRUTORA
function Aluno(ra, nome) {
    this.ra = ra;
    this.nome = nome;
}
var raAluno2 = prompt("Insira o RA do aluno 2 (Função Construtora):");
var nomeAluno2 = prompt("Insira o nome do aluno 2 (Função Construtora):");
var aluno2 = new Aluno(raAluno2, nomeAluno2);
alert(`Função Construtora: ra=${aluno2.ra}, nome=${aluno2.nome}`);


// AQUI USEI NOTAÇÃO DE OBJETO LITERAL {}
var aluno1 = {};
aluno1.ra = prompt("Insira o RA do aluno 1 (Notação literal):");
aluno1.nome = prompt("Insira o nome do aluno 1 (Notação literal):");
alert(`Forma literal: ra=${aluno1.ra}, nome=${aluno1.nome}`);

// 3. AQUI USEI CLASSE
class Aluno1 {
    constructor(ra, nome) {
        this.ra = ra;
        this.nome = nome;
    }
}
var raAluno3 = prompt("Insira o RA do aluno 3 (Classe ES6):");
var nomeAluno3 = prompt("Insira o nome do aluno 3 (Classe ES6):");
var aluno3 = new Aluno1(raAluno3, nomeAluno3);
alert(`Classe: ra=${aluno3.ra}, nome=${aluno3.nome}`);
