"use strict";

//relacionando os alunos com suas notas no array
var Alunos = [{
  nome: 'Bianca',
  nota: 10
}, {
  nome: 'Ana',
  nota: 4
}, {
  nome: 'Isa',
  nota: 6
}, {
  nome: 'Gustavo',
  nota: 7
}, {
  nome: 'Leo',
  nota: 5
}];

//funcao para filtrar os aprovados com a nota Minima de 6 pontos e quais os alunos aprovados
function FiltraAprovados(notaMinima, alunosAprovados) {
  return alunosAprovados.filter(function (aluno) {
    return aluno.nota >= notaMinima;
  });
}

//defindindo a nota minima 
var Aprovados = FiltraAprovados(6, Alunos);
console.log(Aprovados);