$(document).ready(function(){

    $('#telefone').mask('(00)0000-00000', {
        placeholder: '(00)0000-00000'
    });

    $('#CPF').mask('000000000-00',{
        placeholder:'000000000-00'
    });

    $('#CEP').mask('00000-000',{
        placeholder:'00000-000'
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
            CPF: {
                required: true
            },
            enderecoCompleto:{
                required: true
            },
            CEP:{
                required: true
            }
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

})