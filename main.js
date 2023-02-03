const form = document.getElementById("form-deposito"); 
const nomeBeneficiario = document.getElementById('nome-beneficiário'); //ele pega o nome do beneficiário . Essas são as const globais para validação
let formEValido = false;

function validarNome(nomeCompleto){ // criamos uma função para validar o nome inserido
   const NomeArray = nomeCompleto.split(' '); // Depois, uma contante para validar o nome inserido em duas partes 
   return NomeArray.length >= 2; // aqui ele irá ver se o nome tem 2 partes, caso sim será validado
} 

form.addEventListener('submit', function (e){ 

    e.preventDefault();// chamamos a função, cancelando a ação padrão do submit

    const numeroConta = document.getElementById("numero-conta");
    const valorDeposito = document.getElementById("valor-deposito");
    const mensagemSucesso = `Sucesso! o montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b>- conta <b>${numeroConta.value}</b>`;
   
   
    formEValido = validarNome(nomeBeneficiario.value) // validamos se todos as constantes são válidas
    if (formEValido){
        const containerMensagemSucesso = document.querySelector(".sucess");
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';      // puxa a classe sucess fazendo uma nova contante, fazendo com que esse conteudo so apareça dps de enviado

        nomeBeneficiario.value = '';
        numeroConta.value = '';
        valorDeposito.value = ''; // caso de sucesso, esses campos ficarão vazios.

        } else{
            nomeBeneficiario.style.border = '1px solid red';
            document.querySelector('.error').style.display = 'block'; // se estiver inválido ele vai se personalizar
        }
  
  
  
    /* if(!validarNome(nomeBeneficiario.value)){ // chamamos a função validar nome dnv, e vemos se o nome está correto
        alert("Nome incompleto");
    } else{
        alert ("ok!");
    }*/
})

nomeBeneficiario.addEventListener('keyup', function (e) {
    console.log(e.target.value);
    formEValido = validarNome(e.target.value);

    if(!formEValido) {
        nomeBeneficiario.classList.add('erro');
        document.querySelector('.error').style.display = 'block';
    } else{
        nomeBeneficiario.classList.remove('erro');
        document.querySelector('.error').style.display = 'none'; // qnd fazemos isso, permite que o ux não preencha td pra dps saber q tem algo incorreto, mostra no tempo real!
    }
});
