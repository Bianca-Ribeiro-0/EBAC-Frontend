//  Função com js puro:
//function Pokemon(nomeDoPokemon, tipoDoPokemon) {
//     this.nome = nomeDoPokemon;
//     this.tipo = tipoDoPokemon;
// } 
// const pikachu = new Pokemon("Pikachu", "Eletrico")


class Pokemon {
 #hp = 100;

    constructor(nomeDoPokemon, tipoDoPokemon) {
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }
    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
    }
    recebeuAtaque() {
        this.#hp -= 10;
    }
    exibeHp() {
        console.log(this.#hp)
    }
}

class Pikachu extends Pokemon {
    constructor() {
        super('Pikachu', 'Eletrico')
    }
    atacar() {
        console.log(`${this.nome} atacou com choque do trovão`)
    }
}

const pikachudoAsh = new Pikachu();
pikachudoAsh.recebeuAtaque();
console.log(pikachudoAsh.hp);
pikachudoAsh.atacar();
pikachudoAsh.exibeHp();