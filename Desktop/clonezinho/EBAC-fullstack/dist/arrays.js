"use strict";

var redesSociais = ['Facebook', 'Instagram', 'Twitter']; //formando um array

// //usando o for para mostrar os itens do array
// for (let i = 0; i < redesSociais.length; i++) {
//     console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
// }

// //usando a espressao forEach para mostrar os items do array + sua posição
// redesSociais.forEach(function(item, indice) {
//     console.log(`#${indice}Eu tenho perfil na rede social: ${item}`)
// })

//definindo um array para alunos
var alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];

//imprimindo com o map o nome + curso de cada um
var alunos2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    curso: 'Front-end'
  };
});
console.log(alunos2);
alunos2.push({
  nome: 'Lucio',
  curso: 'backend'
});

//expressao find para encontrar paula no array de nomes
var paula = alunos2.find(function (item) {
  return item.nome == 'Paula';
});

// //findIndex para encontrar a posição da julia
// const Julia = alunos2.findIndex(function (item) {
//     return item.nome == 'Julia'
// })

// //retorna true ou false se todos são relacionados ao curso de front-end
// const alunosFront = alunos2.every(function(item) {
//     item.curso === 'Front-end'
// })

// //verificando se existe pelo menos 1 relacionado ao curso backend e front
// const alunosBack = alunos2.some(function(item) {
//     return item.curso === 'backend' & item.curso === 'frond-end' 
// })

function filtraAlunos(aluno) {
  return aluno.curso === 'backend';
}
var alunosBackend = alunos.filter(filtraAlunos);
console.log(alunosBackend);

// const numeros = [1, 2, 3, 4, 5]
// const dobroDosNumeros = numeros.map(function(numeroAtual){
//     return numeroAtual * 2;
// })
// console.log(dobroDosNumeros);