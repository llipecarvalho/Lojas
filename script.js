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
        <a href="pages/Lainan%20Junger/index.html" class="primary" aria-label="Participar do ${s.titulo}">Participe agora</a>
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
    if (winnersShown >= ganhadores.length) {
      btn.disabled = true;
      btn.textContent = 'Todos exibidos';
    }
  });
}

// CTA principal
function setupCTA() {
  const cta = document.getElementById('ctaParticipar');
  if (!cta) return;
  cta.addEventListener('click', () => {
    // comportamento simples: abrir modal ou redirecionar.
    // Aqui apenas abre uma nova aba para página de compra (substitua pela rota real).
    window.open('#', '_self');
  });
}

// Countdown até 18h local
function startCountdown() {
  const el = document.getElementById('countdown');
  if (!el) return;

  function getNext18() {
    const now = new Date();
    const next = new Date(now);
    next.setHours(18, 0, 0, 0);
    if (now >= next) next.setDate(next.getDate() + 1);
    return next;
  }

  let target = getNext18();

  function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  function update() {
    const now = new Date();
    let diff = target - now;
    if (diff <= 0) {
      // Recalcula próximo 18h e exibe 00:00:00 brevemente antes de recontar
      target = getNext18();
      diff = Math.max(0, target - now);
    }
    el.textContent = formatTime(diff);
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
// ...existing code...