$(document).ready(function(){
    $('#carrossel-imgs').slick({
        autoplay: true,
    });
    $('.menu-hamburger').click(function(){
        $('nav').slideToggle();
    })
    
    $('#telefone').mask('(00)0000-00000', {
        placeholder: '(00)0000-00000'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoInteresse:{
                required: false
            }
        },
        messages:{
            nome: "Por favor, insira o seu nome"
        },

        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
                alert("Existem ${camposIncorretos} camposIncorretos")
            }
        }
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');

        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000) 
    })
})