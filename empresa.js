function Pokemon(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + "Olá");
    }
}

function pokeBola(nome, tipo, sexo) {
    this.tipo = tipo;
    this.sexo = sexo;


    Pokemon.call(this,nome);
}

function Pikachu(nome) {
    pokeBola.call(this, nome, "Elétrico", "femenino");
}

function Charmander(nome) {
    pokeBola.call(this, nome, "Fogo", "Masculino");
}


const pokeBola1 = new Pikachu("Ashe");
console.log(pokeBola1);

const pokebola2 = new Charmander("Sion");