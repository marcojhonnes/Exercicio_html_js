const form = document.querySelector('form');
const campoA = document.querySelector('#campoA');
const campoB = document.querySelector('#campoB');
let formEvalido = false;

function validaFormulario(campoA, campoB) {
  return valorA < valorB;
}

form.addEventListener('submit', function(event) {
  event.preventDefault();

  

  const valorA = parseInt(campoA.value);
  const valorB = parseInt(campoB.value);
  const mensagemSucesso = `o valor : ${campoA.value} é menor que o valor : ${campoB.value}! tudo certo!`;
 
  formEvalido = (valorA < valorB)
  if (formEvalido) {
    const containerMensagemSucesso = document.querySelector('.menssagem-sucesso');
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = 'block';

    campoA.value = '';
    campoB.value = '';
    document.querySelector('.menssagem-erro').style.display = 'none';
   
  } else {
    campoA.style.border = '1px solid red';
    document.querySelector('.menssagem-erro').style.display = 'block'; 
  }
})

campoA.addEventListener('keyup', function(e) {
  const valorA = parseInt(campoA.value);
  const valorB = parseInt(campoB.value);

  if(!e.target.value || !validaFormulario(valorA > valorB)) {
    campoA.classList.add('error');
    document.querySelector('.menssagem-erro').style.display = 'block';
  } else {
    campoA.classList.remove('error');
    document.querySelector('.menssagem-erro').style.display = 'none';
  }
});
