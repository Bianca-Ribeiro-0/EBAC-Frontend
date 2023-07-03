const redesSociais = ['Facebook', 'Instagram', 'Twitter']; //formando um array

//usando o for para mostrar os itens do array
for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
}

//usando a espressao forEach para mostrar os items do array + sua posição
redesSociais.forEach(function(item, indice) {
    console.log(`#${indice}Eu tenho perfil na rede social: ${item}`)
})

//definindo um array para alunos
const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];

//imprimindo com o map o nome + curso de cada um
const alunos2 = alunos.map(function (itemAtual) {
     return {
        nome: itemAtual,
        curso: 'Front-end'
    }
})
console.log(alunos2);

//adicionando um aluno ao array
alunos2.push({
    nome:'Lucio',
    curso: 'backend'
})


//expressao find para encontrar paula no array de nomes
const paula = alunos2.find(function (item) {
    return item.nome == 'Paula'
})

//findIndex para encontrar a posição da julia
const Julia = alunos2.findIndex(function (item) {
    return item.nome == 'Julia'
})

//retorna true ou false se todos são relacionados ao curso de front-end
const alunosFront = alunos2.every(function(item) {
    item.curso === 'Front-end'
})

//verificando se existe pelo menos 1 relacionado ao curso backend e front
const alunosBack = alunos2.some(function(item) {
    return item.curso === 'backend' & item.curso === 'frond-end' 
})

//filtrando alunos do curso
function filtraAlunos(aluno) {
    return aluno.curso === 'backend';
}
const alunosBackend = alunos.filter(filtraAlunos);
console.log(alunosBackend);


//multiplicando numeros do array
const numeros = [1, 2, 3, 4, 5]
const dobroDosNumeros = numeros.map(function(numeroAtual){
    return numeroAtual * 2;
})
console.log(dobroDosNumeros);

//somando todos os numeros do array
const nums = [10, 20, 30, 10]
const soma = nums.reduce(function(acumulador, itemAtual) {
    acumulador += itemAtual;
    return acumulador
}, 0)

//mostrando os nomes dos alunos
const nomeDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
    acumulador += `${itemAtual.nome}`; 
    return acumulador
}, '')