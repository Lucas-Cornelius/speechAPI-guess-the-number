const elementoChute = document.querySelector('#chute');
const play = document.querySelector(('#play'));
let acertou = false;

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-br';

play.addEventListener('click', () => {
    recognition.start();
    play.setAttribute('disabled', 'disabled');
});

function recarregar() {
    window.location.reload();
};

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `;
    verificaChute(chute);
};

function onSpeak (e) {
    const chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
};

recognition.addEventListener('result', onSpeak);

recognition.addEventListener('end', () => {
    if (!acertou) {
        recognition.start();
    };
});

