const robotron = document.querySelector('#robotron');
const subtrair = document.querySelector('#subtrair');
const somar = document.querySelector('#somar');
const braco = document.querySelector('#braco');
const controle = document.querySelectorAll('.controle-ajuste');

function manipulaDados(operacao) {
  if (operacao === '-') {
    braco.value = parseInt(braco.value) - 1;
  } else if (operacao === '+') {
    braco.value = parseInt(braco.value) + 1;
  }
}

controle.forEach(elemento => {
  elemento.addEventListener('click', () => {
    manipulaDados(elemento.target.textContent);
  });
});

robotron.addEventListener('click', () => {
  console.log('Não encoste! A lataria é nova!');
});

subtrair.addEventListener('click', () => {
  manipulaDados('subtrair');
});

somar.addEventListener('click', () => {
  manipulaDados('somar');
});
