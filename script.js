let indiceFrase = 0;
const frasesZueira = [
    "Tenta de novo! 😂",
    "Essa não funciona!",
    "Clicou errado de novo?",
    "Tá difícil desistir, né?"
];

function proximaTela() {
    document.getElementById('tela1').classList.add('hidden');
    document.getElementById('tela2').classList.remove('hidden');
}

function confirmarAgendamento() {
    // Corrigi os IDs para baterem com o HTML acima
    const dataInput = document.getElementById('data').value;
    const horaInput = document.getElementById('hora').value;

    if (!dataInput || !horaInput) {
        document.getElementById('mensagem-zueira').innerText = "Escolha a data e a hora, não foge! 😂";
        return;
    }

    const dataFormatada = dataInput.split('-').reverse().join('/');

    document.getElementById('tela2').classList.add('hidden');
    document.getElementById('tela3').classList.remove('hidden');
    
    document.getElementById('detalhes').innerHTML = `Está combinado!<br>📅 <strong>${dataFormatada}</strong> às 🕒 <strong>${horaInput}</strong>.<br>Não aceito atrasos! 🚀`;
}

function fugir() {
    const btn = document.getElementById('btn-fugitivo');
    const msg = document.getElementById('mensagem-zueira');

    // Lógica da mensagem
    msg.innerText = frasesZueira[indiceFrase % frasesZueira.length];
    indiceFrase++;

    // Lógica do movimento
    const larguraJanela = window.innerWidth - 100;
    const alturaJanela = window.innerHeight - 50;

    const x = Math.random() * larguraJanela;
    const y = Math.random() * alturaJanela;

    btn.style.position = 'fixed'; // 'fixed' funciona melhor para fugir da tela toda
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}