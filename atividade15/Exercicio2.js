// Classe base Conta
class Conta {
    constructor(nomeTitular, instituicaoFinanceira, numeroContaBancaria, valorEmConta) {
        this._nomeTitular = nomeTitular;
        this._instituicaoFinanceira = instituicaoFinanceira;
        this._numeroContaBancaria = numeroContaBancaria;
        this._valorEmConta = valorEmConta;
    }

    set nomeTitular(value) {
        this._nomeTitular = value;
    }

    get nomeTitular() {
        return this._nomeTitular;
    }

    set instituicaoFinanceira(value) {
        this._instituicaoFinanceira = value;
    }

    get instituicaoFinanceira() {
        return this._instituicaoFinanceira;
    }

    set numeroContaBancaria(value) {
        this._numeroContaBancaria = value;
    }

    get numeroContaBancaria() {
        return this._numeroContaBancaria;
    }

    set valorEmConta(value) {
        this._valorEmConta = value;
    }

    get valorEmConta() {
        return this._valorEmConta;
    }
}

// Classe Corrente com herança de Conta
class ContaCorrente extends Conta {
    constructor(nomeTitular, instituicaoFinanceira, numeroContaBancaria, valorEmConta, limiteExtra) {
        super(nomeTitular, instituicaoFinanceira, numeroContaBancaria, valorEmConta);
        this._limiteExtra = limiteExtra;
    }

    set limiteExtra(value) {
        this._limiteExtra = value;
    }

    get limiteExtra() {
        return this._limiteExtra;
    }
}

// Classe Poupanca com herança de Conta
class ContaPoupanca extends Conta {
    constructor(nomeTitular, instituicaoFinanceira, numeroContaBancaria, valorEmConta, taxaJuros, dataDeVencimento) {
        super(nomeTitular, instituicaoFinanceira, numeroContaBancaria, valorEmConta);
        this._taxaJuros = taxaJuros;
        this._dataDeVencimento = dataDeVencimento;
    }

    set taxaJuros(value) {
        this._taxaJuros = value;
    }

    get taxaJuros() {
        return this._taxaJuros;
    }

    set dataDeVencimento(value) {
        this._dataDeVencimento = value;
    }

    get dataDeVencimento() {
        return this._dataDeVencimento;
    }
}

// Criando e testando um objeto de ContaCorrente
let nomeTitular = prompt("Insira o nome do titular (Conta Corrente):");
let instituicaoFinanceira = prompt("Insira a instituição financeira:");
let numeroContaBancaria = prompt("Insira o número da conta bancária:");
let valorEmConta = prompt("Insira o saldo:");
let limiteExtra = prompt("Insira o limite extra:");

let contaCorrente = new ContaCorrente(nomeTitular, instituicaoFinanceira, numeroContaBancaria, valorEmConta, limiteExtra);
alert(`Conta Corrente:\nNome: ${contaCorrente.nomeTitular}\nBanco: ${contaCorrente.instituicaoFinanceira}\nNúmero da Conta: ${contaCorrente.numeroContaBancaria}\nSaldo: ${contaCorrente.valorEmConta}\nLimite Extra: ${contaCorrente.limiteExtra}`);

// Criando e testando um objeto de ContaPoupanca
nomeTitular = prompt("Insira o nome do titular (Conta Poupança):");
instituicaoFinanceira = prompt("Insira a instituição financeira:");
numeroContaBancaria = prompt("Insira o número da conta bancária:");
valorEmConta = prompt("Insira o saldo:");
let taxaJuros = prompt("Insira a taxa de juros:");
let dataDeVencimento = prompt("Insira a data de vencimento:");

let contaPoupanca = new ContaPoupanca(nomeTitular, instituicaoFinanceira, numeroContaBancaria, valorEmConta, taxaJuros, dataDeVencimento);
alert(`Conta Poupança:\nNome: ${contaPoupanca.nomeTitular}\nBanco: ${contaPoupanca.instituicaoFinanceira}\nNúmero da Conta: ${contaPoupanca.numeroContaBancaria}\nSaldo: ${contaPoupanca.valorEmConta}\nTaxa de Juros: ${contaPoupanca.taxaJuros}\nData de Vencimento: ${contaPoupanca.dataDeVencimento}`);
