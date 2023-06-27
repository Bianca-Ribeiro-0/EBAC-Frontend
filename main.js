// fazendo a chamada com js puro:
//document.addEventListener('DOMContentLoaded', function(){
//     document.getElementById('btn-buscar-cep').addEventListener('click', function(){
//         const xhttp = new XMLHttpRequest();
//         const cep = document.getElementById('cep').value;
//         const endpoint = `https://viacep.com.br/ws/${cep}/json`;

//         xhttp.open('GET', endpoint);
//         xhttp.send();

//     })
// })

//fazendo a chamada com jquery:
$(document).ready(function() {
    $('#cep').mask('00000-000');         //adc uma mascara do cep

    $('#btn-buscar-cep').click(function() {   
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;          
        const botao = $(this);
        $(botao).find('i').addClass('d-none');                           
        $(botao).find('span').removeClass('d-none');

        // $.ajax(endpoint).done(function(resposta){
        //     const logradouro = resposta.logradouro;
        //     const bairro = resposta.bairro;                             
        //     const cidade = resposta.localidade;
        //     const estado = resposta.uf;
        //     const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;

        //     $('#endereco').val(endereco)

        //     setTimeout(function(){
        //         $(botao).find('i').removeClass('d-none');
        //         $(botao).find('span').addClass('d-none');              
        //     }, 2000);

        // })
        fetch(endpoint)              
        .then(function(resposta) {   //pegando a resposta da api com fetchAPI        
          return resposta.json();
        })
        .then(function(json){
        const logradouro = json.logradouro;            
        const bairro = json.bairro;                             
        const cidade = json.localidade;
        const estado = json.uf;
        const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;        
        $('#endereco').val(endereco);
    })
        .catch(function(erro) {
            alert('Ocorreu um erro ao buscar o endereço, tente novamente mais tarde');  //caso tenha digitado errado, o catch pegara a função erro e irá alertar o usuario
        })
        .finally(function() {
            setTimeout(function(){
                $(botao).find('i').removeClass('d-none');
                $(botao).find('span').addClass('d-none');               //após corrigir ou dar o ok no alert, o carregamento dará espaço à busca novamente após 2s
                 }, 2000);
            })
        })

        $('#formulario-pedido').submit(function(evento) {
            evento.preventDefault();                                 //previne que o usuario não envie o formulário vazio

            if (('#nome').val().length ==0) {
              throw new Error('Digite o nome');
            }
        })
    })