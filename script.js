let indiceFrase = 0;
const frasesZueira = [
    "Tenta de novo! 😂",
    "Essa não funciona!",
    "Clicou errado de novo?",
    "Tá difícil desistir, né?"
];

function proximaTela() {
    const tela1 = document.getElementById('tela1');
    const tela2 = document.getElementById('tela2');
    if (tela1 && tela2) {
        tela1.classList.add('hidden');
        tela2.classList.remove('hidden');
    }
}

function confirmarAgendamento() {
    const dataInput = document.getElementById('data').value;
    const horaInput = document.getElementById('hora').value;

    if (!dataInput || !horaInput) {
        document.getElementById('mensagem-zueira').innerText = "Escolha a data e a hora, não foge! 😂";
        return;
    }

    // Inverte a data de AAAA-MM-DD para DD/MM/AAAA
    const dataFormatada = dataInput.split('-').reverse().join('/');

    document.getElementById('tela2').classList.add('hidden');
    document.getElementById('tela3').classList.remove('hidden');
    
    // Frase "Não aceito atrasos" removida conforme solicitado
    document.getElementById('detalhes').innerHTML = `Está combinado!<br>📅 <strong>${dataFormatada}</strong> às 🕒 <strong>${horaInput}</strong>. 🚀`;
}

function fugir() {
    const btn = document.getElementById('btn-fugitivo');
    const msg = document.getElementById('mensagem-zueira');

    msg.innerText = frasesZueira[indiceFrase % frasesZueira.length];
    indiceFrase++;

    const larguraJanela = window.innerWidth - 100;
    const alturaJanela = window.innerHeight - 50;

    const x = Math.random() * larguraJanela;
    const y = Math.random() * alturaJanela;

    btn.style.position = 'fixed';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}