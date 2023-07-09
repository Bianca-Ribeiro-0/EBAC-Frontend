//criando uma classe conta com os atributos definidos
class Conta {
    numeroDaConta: number;
    saldo: number = 0;

    constructor(numeroDaConta: number ) {
        this.numeroDaConta = numeroDaConta;
    }
}

//heraça
class contaSalario extends Conta {
    depositar(valor: number) {
        this.saldo +=valor;
    }
}

interface ITransactional {
    transferir: (valor: number, destinatario: Conta) => boolean;
    taxaTransferencia: number;
}


class ContaCorrente extends Conta implements ITransactional {
    transferir (valor: number, destinatario: Conta) {
        destinatario.saldo += (valor - this.taxaTransferencia);
        return true;
    }
    taxaTransferencia: number = 0;

}