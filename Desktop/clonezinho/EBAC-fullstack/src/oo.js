"use strict";
//deixando explicito as atribuitos
class Pessoa {
    constructior(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOla() {
        return `${this.nome} diz Olá`;
    }
}
class contaBancaria {
    constructor(numeroConta) {
        this.saldo = 0;
        this.numeroConta = numeroConta;
    }
    //código da agencia, o static pertence a classe e não à instancia
    static retornaNumeroDoBanco() {
        return 125;
    }
    //retornando o saldo da conta 
    getSaldo() {
        return this.saldo;
    }
    //adicionando um valor no saldo pré-existente
    depositar(valor) {
        this.saldo += valor;
    }
}
//por conta do protected na classe bancaria é possível acessar o saldo, com private não é possível
class contaBancariaPF extends contaBancaria {
    depositar(valor) {
        this.saldo += valor;
    }
}
const contaDoPedro = new contaBancariaPF(233292);
contaBancaria.retornaNumeroDoBanco();
