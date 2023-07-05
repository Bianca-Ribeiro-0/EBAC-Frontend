"use strict";

var redesSociais = ['Facebook', 'Instagram', 'Twitter']; //formando um array

//usando o for para mostrar os itens do array
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil na rede social: ".concat(redesSociais[i]));
}

//usando a espressao forEach para mostrar os items do array + sua posição
redesSociais.forEach(function (item, indice) {
  console.log("#".concat(indice, "Eu tenho perfil na rede social: ").concat(item));
});

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

//adicionando um aluno ao array
alunos2.push({
  nome: 'Lucio',
  curso: 'backend'
});

//expressao find para encontrar paula no array de nomes
var paula = alunos2.find(function (item) {
  return item.nome == 'Paula';
});

//findIndex para encontrar a posição da julia
var Julia = alunos2.findIndex(function (item) {
  return item.nome == 'Julia';
});

//retorna true ou false se todos são relacionados ao curso de front-end
var alunosFront = alunos2.every(function (item) {
  item.curso === 'Front-end';
});

//verificando se existe pelo menos 1 relacionado ao curso backend e front
var alunosBack = alunos2.some(function (item) {
  return item.curso === 'backend' & item.curso === 'frond-end';
});

//filtrando alunos do curso
function filtraAlunos(aluno) {
  return aluno.curso === 'backend';
}
var alunosBackend = alunos.filter(filtraAlunos);
console.log(alunosBackend);

//multiplicando numeros do array
var numeros = [1, 2, 3, 4, 5];
var dobroDosNumeros = numeros.map(function (numeroAtual) {
  return numeroAtual * 2;
});
console.log(dobroDosNumeros);

//somando todos os numeros do array
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);

//mostrando os nomes dos alunos
var nomeDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome);
  return acumulador;
}, '');