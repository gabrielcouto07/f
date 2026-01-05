let indiceFrase= 0;

const frasesZueira = [
   "tenta de novo",
    "Essa nao funciona",
    "Clicou errado de novo?"
];

function fugir() {
    const btn = document.getElementById('btn-fugitivo');
    const msg = document.getElementById('mensagem-zueira');

    msg.innerText = frasesZueira[indiceFrase % frasesZueira.length];
    indiceFrase++;
    
    // Torna o botão flutuante
    btn.style.position = 'fixed';

    // Calcula nova posição
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);

    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
}

function proximaTela() {
    document.getElementById('tela1').classList.add('hidden');
    document.getElementById('tela2').classList.remove('hidden');
}

function confirmar(data) {
    document.getElementById('tela2').classList.add('hidden');
    document.getElementById('tela3').classList.remove('hidden');
    document.getElementById('detalhes').innerHTML = `Marcado para <strong>${data}</strong>! <br>`;
}