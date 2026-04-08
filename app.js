const segments = [
  { label: '100', value: 100, color: '#f59e0b' },
  { label: '150', value: 150, color: '#10b981' },
  { label: '200', value: 200, color: '#3b82f6' },
  { label: 'Quiebra', value: 'bankrupt', color: '#ef4444' },
  { label: '250', value: 250, color: '#8b5cf6' },
  { label: '300', value: 300, color: '#ec4899' },
  { label: 'Pierde turno', value: 'lose', color: '#f97316' },
  { label: '500', value: 500, color: '#14b8a6' }
];

const puzzles = [
  { category: 'Películas', phrase: 'EL REY LEON' },
  { category: 'Series', phrase: 'LA CASA DE PAPEL' },
  { category: 'Música', phrase: 'MECANO' },
  { category: 'Lugares', phrase: 'TORRE EIFFEL' },
  { category: 'Expresiones', phrase: 'A QUIEN MADRUGA DIOS LE AYUDA' }
];

const state = {
  score: 0,
  lives: 3,
  currentPrize: 0,
  used: new Set(),
  puzzle: null,
  angle: 0,
  spinning: false
};

const canvas = document.getElementById('wheel');
const ctx = canvas.getContext('2d');
const resultLabel = document.getElementById('resultLabel');
const resultHint = document.getElementById('resultHint');
const scoreValue = document.getElementById('scoreValue');
const lifeValue = document.getElementById('lifeValue');
const phraseBoard = document.getElementById('phraseBoard');
const phraseCategory = document.getElementById('phraseCategory');
const usedLetters = document.getElementById('usedLetters');
const letterInput = document.getElementById('letterInput');

function pickPuzzle() {
  state.puzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
  state.used = new Set([' ']);
  state.score = 0;
  state.lives = 3;
  state.currentPrize = 0;
  updateUI();
}

function drawWheel() {
  const { width, height } = canvas;
  const cx = width / 2;
  const cy = height / 2;
  const radius = 230;
  const slice = (Math.PI * 2) / segments.length;
  ctx.clearRect(0, 0, width, height);
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(state.angle);

  segments.forEach((seg, i) => {
    const start = i * slice;
    const end = start + slice;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, radius, start, end);
    ctx.closePath();
    ctx.fillStyle = seg.color;
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,.25)';
    ctx.stroke();

    ctx.save();
    ctx.rotate(start + slice / 2);
    ctx.fillStyle = '#fff';
    ctx.font = '700 24px Inter';
    ctx.textAlign = 'right';
    ctx.fillText(seg.label, radius - 16, 10);
    ctx.restore();
  });

  ctx.restore();
  ctx.beginPath();
  ctx.moveTo(cx + radius + 12, cy);
  ctx.lineTo(cx + radius + 42, cy - 18);
  ctx.lineTo(cx + radius + 42, cy + 18);
  ctx.closePath();
  ctx.fillStyle = '#fff';
  ctx.fill();
}

function updateUI() {
  scoreValue.textContent = state.score;
  lifeValue.textContent = state.lives;
  phraseCategory.textContent = state.puzzle.category;
  phraseBoard.innerHTML = '';

  [...state.puzzle.phrase].forEach((char) => {
    const tile = document.createElement('div');
    tile.className = `tile${char === ' ' ? ' space' : ''}`;
    tile.textContent = char === ' ' ? '' : (state.used.has(char) ? char : '');
    phraseBoard.appendChild(tile);
  });

  usedLetters.textContent = [...state.used].filter((l) => l !== ' ').sort().join(', ') || 'Ninguna';
  drawWheel();
}

function spinWheel() {
  if (state.spinning) return;
  state.spinning = true;
  const turns = 8 + Math.random() * 4;
  const finalAngle = state.angle + turns * Math.PI * 2 + Math.random() * Math.PI * 2;
  const start = performance.now();
  const duration = 4200;

  function frame(now) {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 4);
    state.angle = state.angle + (finalAngle - state.angle) * eased;
    drawWheel();
    if (t < 1) return requestAnimationFrame(frame);
    state.angle = finalAngle % (Math.PI * 2);
    state.spinning = false;
    resolveSpin();
  }

  requestAnimationFrame(frame);
}

function resolveSpin() {
  const slice = (Math.PI * 2) / segments.length;
  const normalized = (Math.PI * 2 - state.angle + slice / 2) % (Math.PI * 2);
  const index = Math.floor(normalized / slice) % segments.length;
  const seg = segments[index];

  if (seg.value === 'bankrupt') {
    state.score = 0;
    state.currentPrize = 0;
    resultLabel.textContent = '¡Quiebra!';
    resultHint.textContent = 'Pierdes todos los puntos acumulados.';
  } else if (seg.value === 'lose') {
    state.lives = Math.max(0, state.lives - 1);
    state.currentPrize = 0;
    resultLabel.textContent = 'Pierdes turno';
    resultHint.textContent = 'Vuelve a girar si aún te quedan vidas.';
  } else {
    state.currentPrize = seg.value;
    resultLabel.textContent = `${seg.label} puntos por letra`;
    resultHint.textContent = 'Escribe una consonante o vocal para probar suerte.';
  }

  updateUI();
}

function guessLetter() {
  const letter = letterInput.value.trim().toUpperCase();
  if (!letter || !/^[A-ZÑ]$/.test(letter) || state.used.has(letter) || !state.currentPrize) return;

  state.used.add(letter);
  const count = [...state.puzzle.phrase].filter((c) => c === letter).length;

  if (count) {
    state.score += count * state.currentPrize;
    resultLabel.textContent = `¡${count} ${count === 1 ? 'acierto' : 'aciertos'}!`;
    resultHint.textContent = `Has ganado ${count * state.currentPrize} puntos.`;
  } else {
    state.lives = Math.max(0, state.lives - 1);
    resultLabel.textContent = 'No está';
    resultHint.textContent = 'Pierdes una vida. Prueba otra vez.';
  }

  state.currentPrize = 0;
  letterInput.value = '';

  const solved = [...state.puzzle.phrase].every((c) => c === ' ' || state.used.has(c));
  if (solved) {
    resultLabel.textContent = '¡Has resuelto el panel!';
    resultHint.textContent = `Puntuación final: ${state.score}`;
  }

  updateUI();
}

function solvePuzzle() {
  const answer = prompt('Escribe la solución completa:');
  if (!answer) return;

  if (answer.trim().toUpperCase() === state.puzzle.phrase) {
    [...state.puzzle.phrase].forEach((c) => state.used.add(c));
    resultLabel.textContent = '¡Correcto!';
    resultHint.textContent = `Has resuelto el panel con ${state.score} puntos.`;
  } else {
    state.lives = Math.max(0, state.lives - 1);
    resultLabel.textContent = 'No es correcto';
    resultHint.textContent = 'Pierdes una vida.';
  }

  updateUI();
}

document.getElementById('spinBtn').addEventListener('click', spinWheel);
document.getElementById('guessBtn').addEventListener('click', guessLetter);
document.getElementById('solveBtn').addEventListener('click', solvePuzzle);
document.getElementById('resetBtn').addEventListener('click', pickPuzzle);
letterInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') guessLetter();
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

pickPuzzle();
