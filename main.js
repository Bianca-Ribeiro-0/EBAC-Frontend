$(document).ready(function(){ /* Aqui começamos com a jquery */
    $('header button').click(function(){ /* chamamos o header button e fazemos uma função, cada vez que clica neste botão ele rola pra baixo */
        $('form').slideDown();
    })

     $('#botao-cancelar').click(function(){ 
        $('form').slideUp();
     })

    $('form').on('submit', function (e){
        e.preventDefault();
        const endNovaImg = $('#img-nova').val();
        const novoItem = $('<li style="display=none"></li>');

        $(`<img src="${endNovaImg}" />`).appendTo(novoItem);
        $(`
        <div class="overlay-img-link"> 
             <a href="${endNovaImg}" target="_blank" title="Ver imagem em tamanho real"
                 Ver imagem em tamanho real
             </a>
        </div>
        `).appendTo(novoItem);

        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(5000);
        $('#img-nova').val('');

    })  

})