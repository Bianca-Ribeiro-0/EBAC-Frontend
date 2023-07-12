<script setup>
import { reactive } from 'vue';

const nome = 'Bianca'
const meuObj = {
  nome: 'bia',
  filmeFav: 'Rocky'
}   

//declarando uma funcao com o nome da const 
function dizOla(nome) {
  return `${nome} diz ola`;
}

//no vue é necessario uma const para a imagem
const enderecoDaImagem = "https://www.estadao.com.br/resizer/lq0fJOzO4Vhysjg2Yv7FSk8c_40=/1200x900/filters:format(jpg):quality(80):focal(-5x-5:5x5)/cloudfront-us-east-1.images.arcpublishing.com/estadao/YK5WCTVQZBOQNOCZHWCN4Z2CDY.jpg"
const imagemMars = "https://timnews.com.br/system/images/photos/15312698/original/open-uri20221126-18-xx3suz?1669492090"

const botaoEstaHabilitado = false;
const gostaDaSailor = true;
const gostaDaMars = true;
const estaAutorizado = true;

// adicionando constante reactive - html
const estado = reactive({
  contador: 0,
  email: '',
  saldo: 5000,
  transferindo: 0,
  nomes: ['Bia', 'Paulo', 'Ana'],
  nomeInserido: '',
})
function incrementar(){
  estado.contador++;
}

function decrementar() {
  estado.contador --;
}

function alteraEmail(evento) {
  evento.email = evento.target.value;
}

function mostraSaldoFuturo() {
  const {saldo, transferindo} = estado;
  return saldo - transferindo;
}

function validaValor() {
  const {saldo, transferindo} = estado;
  return saldo >= transferindo;
}

function cadastraNome() {
  if (estado.nomeInserido.length >= 3) {
    estado.nomes.push(estado.nomeInserido)
  } else {
    alert("Digite mais caracteres")
  }
}

</script>


<!-- fazemos uma referencia do js atraves do {{  }} -->
<template>
  <h1>{{ dizOla('leo') }}</h1> 
  <img v-if="gostaDaSailor" :src="enderecoDaImagem" alt="">
  <img v-else-if="gostaDaMars" :src="imagemMars" alt="">
  <h2 v-else>Não curti Sailors</h2>
  <h1 v-if="estaAutorizado">Bem-vindo</h1>
  <h1 v-else>Nao possui acesso</h1>

  <button :disabled="botaoEstaHabilitado">Enviar</button>

  <br />
  <hr />

  
  {{ estado.contador }}

  <button @click="incrementar" type="button">+</button>
  <button @click="decrementar" type="button">-</button>

  <br />
  <hr />

  {{ estado.email }}
  <input type="email" @keyup="alteraEmail">

  <br />
  <hr />

  saldo: {{ estado.saldo }} <br />
  transferindo: {{estado.transferindo}} <br />
  saldo depois da transferencia: {{ mostraSaldoFuturo }} <br />
  <input :class="{ invalido: !validaValor() }" @keyup="evento => estado.transferindo = evento.target.value" type="number" placeholder="quantia para transferir">
  <button>Transferir</button>

  <br />
  <hr />

  <ul>
    <li v-for="nome in nomes">
    {{ estado.nomes }}
    </li>
  </ul>
  <input @keyup="evento => estado.nomeInserido = evento.target.value" type="text" placeholder="digite um novo nome">
  <button @click="cadastraNome" type="button">Cadastrar</button>

  <h3 v-for="nome in estado.nomes">{{ nome }}</h3>
</template>


<style scoped>
img {
  max-width: 200px;
}

.invalido {
  outline-color: red;
  border-color: red;
}

</style>    