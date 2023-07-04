"use strict";

var _this = void 0;
var minhaFuncao = function minhaFuncao() {
  return "Diz Olá";
}; //const simples de retorno

//const de objeto
var retornaCarro = function retornaCarro() {
  return {
    modelo: 'Ka',
    fabricante: 'Ford'
  };
};
console.log(minhaFuncao());
var carro = {
  velocidadeAtual: 40,
  acelerar: function acelerar() {
    this.velocidadeAtual += 10;
  },
  frear: function frear() {
    _this.velocidadeAtual -= 10;
  }
};
carro.acelerar();
carro.frear();
console.log(carro.velocidadeAtual);