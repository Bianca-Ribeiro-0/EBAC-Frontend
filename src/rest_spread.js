//funcao de somar numeros com uma function normal
function somar() {
    let soma = 0;

    for (let i=0; i < arguments.length; i++) {
        soma += arguments[i];
    }
}
console.log(somar(10, 20));

//funcao de somar numeros com o rest, dando o mesmo resultado - utilizamos como argumento de função
function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}
console.log(somarComRest(10, 20, 30));


//spread operator - utilizamos utilizamos para concatenações, preenchimento de objetos e etc
const numeros = [1, 2, 3, 4]
console.log(numeros)


// espalhando as propriedades de um objeto 
const timesSp = ['Santos', 'SP', 'Palmeiras'];
const timesRj = ['Vasco', 'Flamengo'];

const timesFutebol = [...timesSp, ...timesRj];
console.log(timesFutebol);


//utilizando spread para reaproveitar código
const carroDaJulia = {
    modelo: 'Gol',
    marca: 'Ww',
    motor: 1.6
}

const carroDaAna = {
    ...carroDaJulia,
    motor: 1.8
}
console.log(carroDaAna);


//desestruturação 
const { motor: motorDoCarroDaAna } = carroDaAna;
const { motor: motorDoCarroDaJulia } = carroDaJulia;