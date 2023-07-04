"use strict";

//funcao de somar numeros com uma function normal
function somar() {
  var soma = 0;
  for (var i = 0; i < arguments.length; i++) {
    soma += arguments[i];
  }
}
console.log(somar(10, 20));

//funcao de somar numeros com o rest, dando o mesmo resultado - utilizamos como argumento de função
function somarComRest() {
  for (var _len = arguments.length, numeros = new Array(_len), _key = 0; _key < _len; _key++) {
    numeros[_key] = arguments[_key];
  }
  var soma = numeros.reduce(function (total, numeroAtual) {
    total += numeroAtual;
    return total;
  }, 0);
  return soma;
}
console.log(somarComRest(10, 20, 30));

//spread operator - utilizamos utilizamos para concatenações, preenchimento de objetos e etc
var numeros = [1, 2, 3, 4];
console.log(numeros);
var timesSp = ['Santos', 'SP', 'Palmeiras'];
var timesRj = ['Vasco', 'Flamengo'];
var timesFutebol = timesSp.concat(timesRj);
console.log(timesFutebol);