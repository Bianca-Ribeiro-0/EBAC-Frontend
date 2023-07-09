class calcular {
    n1: number;
    n2; number: any;
    
    constructor(n1: number, n2: number) {
        this.n1 = n1;
        this.n2 = n2;
    }
    calcular(): number {
        return this.n1 * this.n2;
    }
}

class Oi {
    nome!: String;
    
    constructior(nome: string) {
        this.nome = nome;
    }

    dizOla() {
        return `${this.nome} diz Olá`;
    }
}