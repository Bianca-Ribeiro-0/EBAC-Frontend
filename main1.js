const form = document.getElementById('numeros');
const numA = document.getElementById('CampoA');
const numB= document.getElementById('CampoB');

function ValidarNum (nA, nB){
      const validacao =   nA < nB
      return validacao;
    }

form.addEventListener('submit', function(e){
    e.preventDefault();

    let formEValido = false;
    const MensagemSucesso = `Sucesso! o montante de: ${numB.value}</b> É maior que: ${numA.value}`;
    

    formEValido = ValidarNum(numA.value, numB.value) 
    if (formEValido){
        const containerMensagemSucesso = document.querySelector(".sucess");
        containerMensagemSucesso.innerHTML = MensagemSucesso;
        containerMensagemSucesso.style.display = 'block';      
        } else{
            CampoB.style.border = '1px solid red';
            document.querySelector('.error').style.display = 'block'; 
        }
    
    })
