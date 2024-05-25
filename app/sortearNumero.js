let menorValor = 1;
let maiorValor =  100;

const elementoMenorValor = document.querySelector('#menor-valor');
const elementoMaiorValor = document.querySelector('#maior-valor');

elementoMenorValor.textContent = menorValor;
elementoMaiorValor.textContent = maiorValor;

function mudarValor() {
    const numeroATrocar = prompt('Informe o valor:');
    if(!numeroATrocar.trim() || isNaN(parseInt(numeroATrocar)) || numeroATrocar<menorValor) {
        alert('O valor informado não pode ser atribuido.');
        return;
    };
    elementoMaiorValor.textContent = numeroATrocar;
    maiorValor = numeroATrocar;
    numeroSecreto = sortearNumeroSecreto();
};

elementoMaiorValor.addEventListener('click', () => {
    mudarValor();
});

function sortearNumeroSecreto () {
    return parseInt(Math.random() * maiorValor+1);
};

let numeroSecreto = sortearNumeroSecreto();