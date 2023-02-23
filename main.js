const form = document.getElementById('atividade'); // Id form atividade global
const imgAprovado = '<img src ="./images/aprovado.png" alt="emoji feliz" />'; // constantes aprovado e reprovado 
const imgReprovado = '<img src ="./images/reprovado.png" alt="emoji triste" />';
const atividades =[]; // arrays para receber os valores
const notas = [];
const spanAprovado = '<span class="Resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="Resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima: "));

let linhas =''; // retorna vazio o corpo da tabela no html

form.addEventListener('submit', function(e){    // vai chamar as funções criadas
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});
 
function adicionaLinha(){ // puxo os elementbyid do nome e nota 
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)){ // if para verificar se no array nome atv já está cadastrado
        alert(`A atividade: ${inputNomeAtividade} já foi inserida`);
    } else {
        atividades.push(inputNomeAtividade.value); // td vez que adc linha for chamado, fazemos um push nesses arrays para adc conteudo
        notas.push(parseFloat(inputNotaAtividade.value));
    
        let linha = '<tr>'; //linha + linha = outro conteudo. Puxo o tr pra cá para o ux possa adc conteudo 
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado }</tr>`; // if ? else :
        linha += '</tr>';
    
        linhas += linha;  // cada vez que os conteudos forem adc, ele vai adc no corpo da tabela
    }

    inputNomeAtividade.value='';
    inputNotaAtividade.value='';

}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody'); //td vez que for atualizado ele retornará vazio 
    corpoTabela.innerHTML = linhas;

}

function atualizaMediaFinal(){
    const mediaFinal = CalculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >=notaMinima ? spanAprovado : spanReprovado;
}

function CalculaMediaFinal(){
    let somaNotas = 0;
    for (let i=0; i< notas.length; i++){
        somaNotas +=notas[i]
    }

    return media = somaNotas/notas.length; 

}