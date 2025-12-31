// Dados mockados (substitua por backend quando disponível)
const sorteios = [
  {
    titulo: "Sorteio em 02/2024",
    premiacao: "Premiação especial",
    data: "13/04/2024",
    hora: "18h00",
    preco: "R$ 0,99"
  },
  {
    titulo: "Sorteio em 02/2024",
    premiacao: "Premiação exclusiva",
    data: "13/04/2024",
    hora: "18h00",
    preco: "R$ 0,99"
  },
  {
    titulo: "Sorteio em 01/2025",
    premiacao: "Grande prêmio",
    data: "01/01/2025",
    hora: "18h00",
    preco: "R$ 1,99"
  }
];

const ganhadores = [
  {
    sorteioTitulo: "Sorteio 01/01/2025",
    premio: "R$ 10.000.000,00",
    data: "01/01/2024",
    nome: "José Paulo da Silva"
  },
  {
    sorteioTitulo: "Sorteio 12/12/2024",
    premio: "R$ 150.000,00",
    data: "12/12/2024",
    nome: "Mariana Souza"
  },
  {
    sorteioTitulo: "Sorteio 30/11/2024",
    premio: "R$ 75.000,00",
    data: "30/11/2024",
    nome: "Carlos Lima"
  }
];

// Renderização de sorteios
function renderSorteios() {
  const list = document.getElementById('sorteiosList');
  list.innerHTML = '';
  sorteios.forEach(s => {
    const el = document.createElement('div');
    el.className = 'sorteio-item';
    el.innerHTML = `
      <div class="sorteio-meta">
        <div class="sorteio-title">${s.titulo}</div>
        <div class="sorteio-info">Premiação: <strong>${s.premiacao}</strong></div>
        <div class="sorteio-info">Sorteio dia ${s.data} às ${s.hora}</div>
      </div>
      <div class="sorteio-actions">
        <span class="price">Título: ${s.preco}</span>
        <button class="primary" aria-label="Participar do ${s.titulo}">Participe agora</button>
      </div>
    `;
    list.appendChild(el);
  });
}

// Renderização de ganhadores
function renderGanhadores(limit = ganhadores.length) {
  const list = document.getElementById('winnersList');
  list.innerHTML = '';
  ganhadores.slice(0, limit).forEach(g => {
    const el = document.createElement('div');
    el.className = 'winner-item';
    el.innerHTML = `
      <div>
        <div class="winner-name">${g.nome}</div>
        <div class="winner-info">${g.sorteioTitulo} • ${g.data}</div>
      </div>
      <div class="winner-actions">
        <div class="winner-prize">${g.premio}</div>
        <button class="reaction" aria-label="Ver reação de ${g.nome}">Ver reação</button>
      </div>
    `;
    list.appendChild(el);
  });
}

// Ver outros ganhadores (carregar mais)
let winnersShown = 2;
function setupVerOutros() {
  const btn = document.getElementById('btnVerOutros');
  // Render inicial com limite
  renderGanhadores(winnersShown);
  btn.addEventListener('click', () => {
    winnersShown = Math.min(winnersShown + 1, ganhadores.length);
    renderGanhadores(winnersShown);
  });
}

// CTA principal
function setupCTA() {
  const cta = document.getElementById('ctaParticipar');
  cta.addEventListener('click', () => {
    window.scrollTo({ top: document.querySelector('.sorteios').offsetTop - 10, behavior: 'smooth' });
  });
}

// Countdown até 18h local
function startCountdown() {
  function update() {
    const now = new Date();
    const target = new Date();
    target.setHours(18, 0, 0, 0);
    if (target < now) target.setDate(target.getDate() + 1);
    const diff = target - now;

    const h = Math.floor(diff / 3_600_000);
    const m = Math.floor((diff % 3_600_000) / 60_000);
    const s = Math.floor((diff % 60_000) / 1000);
    const el = document.getElementById('countdown');
    if (el) el.textContent =
      `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  }
  update();
  setInterval(update, 1000);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  renderSorteios();
  setupVerOutros();
  setupCTA();
  startCountdown();
});