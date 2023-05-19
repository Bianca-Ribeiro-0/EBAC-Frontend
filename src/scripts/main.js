document.addEventListener('DOMContentLoaded', function(){       //o conteudo do script pode ser carregado sem precisar do css
    document.getElementById('form-sorteador').addEventListener('submit', function(evento){   //se referindo ao formulario no html
        evento.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value;    //Deverá pegar o número maximo que o ux determinou, .value pegando o valor do campo
        numeroMaximo = parseInt(numeroMaximo);  //traduzindo string para int

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);

        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    })
})