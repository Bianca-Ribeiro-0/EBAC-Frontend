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
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;          //o botao de busca terá a função de chamar a api, através do endpoint
        const botao = $(this);
        $(botao).find('i').addClass('d-none');                           // qnd a lupa for clicada irá ser removida dando espaço ao carregamento
        $(botao).find('span').removeClass('d-none');

        $.ajax(endpoint).done(function(resposta){
            const logradouro = resposta.logradouro;
            const bairro = resposta.bairro;                             //qnd ocorrer resposta no endpoint, irá aparecer no campo endereço com o padrao definido
            const cidade = resposta.localidade;
            const estado = resposta.uf;
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;

            $('#endereco').val(endereco)

            setTimeout(function(){
                $(botao).find('i').removeClass('d-none');
                $(botao).find('span').addClass('d-none');              //após finalizar a busca, o botao de carregamento irá sumir após 2segundos
            }, 2000);

        })
    })
})

