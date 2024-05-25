function verificaChute(chute) {
    const numero = +chute;

    // se o numero nao e um numero
    if(isNaN(numero)) {
        elementoChute.innerHTML += `<p class="mensagem">Valor inválido: Informe um número.</p>`;
        return;
    };

    // se o numero e maior ou menor que o permitido
    if(numero > maiorValor || numero < menorValor) {
        elementoChute.innerHTML += `<p class="mensagem">Valor inválido: O número precisa estar entre ${menorValor} e ${maiorValor}.</p>`;
        return;
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<p class="mensagem">O número secreto é menor!<i class="fa-solid fa-arrow-down"></i></p>`;
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `<p class="mensagem">O número secreto é maior!<i class="fa-solid fa-arrow-up"></i></p>`;
    } else if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <div class="controle">
                <i id="reload" onclick="recarregar()" class="fa-solid fa-rotate-right fa-2xl"></i>
            </div>
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}!</h3>
        `;
        acertou = true;
    };

};
