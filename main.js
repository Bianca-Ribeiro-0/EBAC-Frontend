$(document).ready(function(){ /* Aqui começamos o Jquery */
 
    $('form').on('submit', function (e){
        e.preventDefault();
        const novaTaf = $('#nova-tarefa').val(); /* é feito uma const referenciando o ID no HTML campo input */
        const novoItem = $('<li></li>'); /* é feito mais uma const referenciando a lista no html  */

        novoItem.append(novaTaf); /* a const NovoItem faz um append para novaTaf, pois é ele que recebe o usuário */
        $('ol').append(novoItem); /* o ol no html faz um append para o novoItem */

        $('#nova-tarefa').val(''); 
    
        $('ol').on('click', 'li', function() {
            $(this).toggleClass('riscado');      /* é feita uma função. No ol, quando clicamos vai chamar o ToggleClass('riscado'), o qual sua definição foi feita no css*/
          });          
    })  
})