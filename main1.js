const form = document.getElementById('numeros');
const numA = document.getElementById('CampoA');
const numB= document.getElementById('CampoB');
let formEValido = false;

function ValidarNum (numA, numB){
    numA = parseFloat (CampoA);
    numB = parseFloat (CampoB);
    numB > numA
        
    }

form.addEventListener('submit', function(e){

    e.preventDefault();
    const numA = document.getElementById('CampoA');
    const numB = document.getElementById('CampoB');
    const MensagemSucesso = `Sucesso! o montante de: ${CampoB.value}</b> é maior que: ${CampoA.value}`;
    

    formEValido = ValidarNum(CampoA.value, CampoB.value) 
    if (formEValido){
        const containerMensagemSucesso = document.querySelector(".sucess");
        containerMensagemSucesso.innerHTML = MensagemSucesso;
        containerMensagemSucesso.style.display = 'block';      

        CampoA.value = '';
        CampoB.value = '';

        } else{
            CampoB.style.border = '1px solid red';
            document.querySelector('.error').style.display = 'block'; 
        }
    
    });

