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

const phraseTemplates = [
  ['Películas', 'EL SILENCIO DE LOS CORDEROS'],
  ['Películas', 'REGRESO AL FUTURO'],
  ['Películas', 'EN BUSCA DEL ARCA PERDIDA'],
  ['Películas', 'LA VIDA ES BELLA'],
  ['Películas', 'EL CLUB DE LOS POETAS MUERTOS'],
  ['Películas', 'CADENA PERPETUA'],
  ['Películas', 'ATRAPAME SI PUEDES'],
  ['Películas', 'BAILANDO CON LOBOS'],
  ['Películas', 'EL NOMBRE DE LA ROSA'],
  ['Películas', 'LA LISTA DE SCHINDLER'],
  ['Series', 'JUEGO DE TRONOS'],
  ['Series', 'LA CASA DE PAPEL'],
  ['Series', 'COMO CONOCI A VUESTRA MADRE'],
  ['Series', 'COSAS MAS EXTRAÑAS'],
  ['Series', 'EL CUENTO DE LA CRIADA'],
  ['Series', 'LA QUE SE AVECINA'],
  ['Series', 'A DOS METROS BAJO TIERRA'],
  ['Series', 'LOS SIMPSON'],
  ['Series', 'MODERN FAMILY'],
  ['Series', 'THE BIG BANG THEORY'],
  ['Música', 'BOHEMIAN RHAPSODY'],
  ['Música', 'WE WILL ROCK YOU'],
  ['Música', 'NO PUEDO VIVIR SIN TI'],
  ['Música', 'ENTRE DOS TIERRAS'],
  ['Música', 'LA CHICA DE AYER'],
  ['Música', 'DEVUELVEME A MI CHICA'],
  ['Música', 'VIVIR ASI ES MORIR DE AMOR'],
  ['Música', 'MEDITERRANEO'],
  ['Música', 'CORAZON PARTIO'],
  ['Música', 'BESO'],
  ['Lugares', 'TORRE EIFFEL'],
  ['Lugares', 'PLAZA MAYOR DE MADRID'],
  ['Lugares', 'PARQUE NACIONAL DE ORDESA'],
  ['Lugares', 'PUENTE DE BROOKLYN'],
  ['Lugares', 'GRAN VIA DE MADRID'],
  ['Lugares', 'MONTE FUJI'],
  ['Lugares', 'MURALLA CHINA'],
  ['Lugares', 'MUSEO DEL PRADO'],
  ['Lugares', 'CENTRAL PARK'],
  ['Lugares', 'ALHAMBRA DE GRANADA'],
  ['Expresiones', 'A QUIEN MADRUGA DIOS LE AYUDA'],
  ['Expresiones', 'NO HAY MAL QUE POR BIEN NO VENGA'],
  ['Expresiones', 'MAS VALE TARDE QUE NUNCA'],
  ['Expresiones', 'AL MAL TIEMPO BUENA CARA'],
  ['Expresiones', 'EN CASA DEL HERRERO CUCHILLO DE PALO'],
  ['Expresiones', 'NUNCA ES TARDE SI LA DICHA ES BUENA'],
  ['Expresiones', 'CUANDO EL RIO SUENA AGUA LLEVA'],
  ['Expresiones', 'MUCHO RUIDO Y POCAS NUECES'],
  ['Expresiones', 'A PALABRAS NECIAS OIDOS SORDOS'],
  ['Expresiones', 'EL HABITO NO HACE AL MONJE']
];

const puzzles = Array.from({ length: 200 }, (_, index) => {
  const [category, phrase] = phraseTemplates[index % phraseTemplates.length];
  return { category, phrase: `${phrase} ${String(index + 1).padStart(3, '0')}` };
});

const state = {
  score: 0,
  lives: 3,
  currentPrize: 0,
  used: new Set(),
  puzzle: null,
  angle: 0,
  spinning: false,
  wheelVisible: false,
  keyboardVisible: false,
  solved: false
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
const wheelModal = document.getElementById('wheelModal');
const wheelPrize = document.getElementById('wheelPrize');
const keyboardModal = document.getElementById('keyboardModal');
const keyboardGrid = document.getElementById('keyboardGrid');

function chunkPhrase(phrase, maxCharsPerLine = 18) {
  const words = phrase.split(' ');
  const lines = [];
  let current = '';
  for (const word of words) {
    if (!current) {
      current = word;
      continue;
    }
    if ((current + ' ' + word).length <= maxCharsPerLine) {
      current += ' ' + word;
    } else {
      lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines.slice(0, 3);
}

function pickPuzzle() {
  state.puzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
  state.used = new Set([' ']);
  state.score = 0;
  state.lives = 3;
  state.currentPrize = 0;
  state.solved = false;
  state.wheelVisible = false;
  state.keyboardVisible = false;
  resultLabel.textContent = 'Pulsa Girar para comenzar';
  resultHint.textContent = 'Gira la ruleta, elige letra desde el teclado del juego y resuelve el panel.';
  updateUI();
}

function drawWheel() {
  const { width, height } = canvas;
  const cx = width / 2;
  const cy = height / 2;
  const radius = 170;
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
    ctx.strokeStyle = 'rgba(255,255,255,.26)';
    ctx.stroke();
    ctx.save();
    ctx.rotate(start + slice / 2);
    ctx.fillStyle = '#fff';
    ctx.font = '700 20px Inter';
    ctx.textAlign = 'right';
    ctx.fillText(seg.label, radius - 14, 8);
    ctx.restore();
  });

  ctx.restore();
  ctx.beginPath();
  ctx.moveTo(cx, cy - radius - 18);
  ctx.lineTo(cx - 20, cy - radius - 54);
  ctx.lineTo(cx + 20, cy - radius - 54);
  ctx.closePath();
  ctx.fillStyle = '#fff';
  ctx.fill();
}

function updateUI() {
  scoreValue.textContent = state.score;
  lifeValue.textContent = state.lives;
  phraseCategory.textContent = state.puzzle.category;
  phraseBoard.innerHTML = '';

  const lines = chunkPhrase(state.puzzle.phrase, window.innerHeight < 700 ? 16 : 20);
  lines.forEach((line) => {
    const row = document.createElement('div');
    row.className = 'phrase-row';
    [...line].forEach((char) => {
      const tile = document.createElement('div');
      tile.className = `tile${char === ' ' ? ' space' : ''}`;
      tile.textContent = char === ' ' ? '' : (state.used.has(char) ? char : '');
      row.appendChild(tile);
    });
    phraseBoard.appendChild(row);
  });

  usedLetters.textContent = [...state.used].filter((l) => l !== ' ').sort().join(', ') || 'Ninguna';
  wheelModal.classList.toggle('visible', state.wheelVisible);
  keyboardModal.classList.toggle('visible', state.keyboardVisible);
  drawWheel();
  renderKeyboard();
}

function renderKeyboard() {
  const letters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
  keyboardGrid.innerHTML = letters.map((letter) => `
    <button class="key-btn" data-letter="${letter}" ${state.used.has(letter) || !state.currentPrize || state.solved ? 'disabled' : ''}>${letter}</button>
  `).join('');
  keyboardGrid.querySelectorAll('[data-letter]').forEach((btn) => {
    btn.addEventListener('click', () => pickLetter(btn.dataset.letter));
  });
}

function openWheel() {
  if (state.spinning || state.solved) return;
  state.wheelVisible = true;
  state.keyboardVisible = false;
  updateUI();
}

function spinWheel() {
  if (state.spinning) return;
  state.spinning = true;
  const turns = 7 + Math.random() * 3;
  const finalAngle = state.angle + turns * Math.PI * 2 + Math.random() * Math.PI * 2;
  const start = performance.now();
  const duration = 3400;

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
  const normalized = (state.angle + Math.PI * 2) % (Math.PI * 2);
  const index = Math.floor(((Math.PI * 2 - normalized) % (Math.PI * 2)) / slice) % segments.length;
  const seg = segments[index];

  if (seg.value === 'bankrupt') {
    state.score = 0;
    state.currentPrize = 0;
    state.wheelVisible = false;
    resultLabel.textContent = '¡Quiebra!';
    resultHint.textContent = 'Pierdes los puntos y puedes volver a girar.';
  } else if (seg.value === 'lose') {
    state.lives = Math.max(0, state.lives - 1);
    state.currentPrize = 0;
    state.wheelVisible = false;
    resultLabel.textContent = 'Pierdes turno';
    resultHint.textContent = 'Has perdido una vida. Vuelve a girar.';
  } else {
    state.currentPrize = seg.value;
    state.wheelVisible = false;
    state.keyboardVisible = true;
    resultLabel.textContent = `${seg.label} por acierto`;
    resultHint.textContent = 'Elige una letra en el teclado del juego.';
  }

  wheelPrize.textContent = seg.label;
  updateUI();
}

function pickLetter(letter) {
  if (!state.currentPrize || state.used.has(letter) || state.solved) return;
  state.keyboardVisible = false;
  state.used.add(letter);
  const count = [...state.puzzle.phrase].filter((c) => c === letter).length;

  if (count) {
    state.score += count * state.currentPrize;
    resultLabel.textContent = `¡${count} ${count === 1 ? 'letra' : 'letras'}!`;
    resultHint.textContent = `Sumas ${count * state.currentPrize} puntos. Puedes volver a girar.`;
  } else {
    state.lives = Math.max(0, state.lives - 1);
    resultLabel.textContent = 'No aparece';
    resultHint.textContent = 'La letra no está. Pierdes una vida.';
  }

  state.currentPrize = 0;
  state.solved = [...state.puzzle.phrase].every((c) => c === ' ' || state.used.has(c));
  if (state.solved) {
    resultLabel.textContent = '¡Panel resuelto!';
    resultHint.textContent = `Puntuación final: ${state.score}`;
  }

  updateUI();
}

function solvePuzzle() {
  if (state.solved) return;
  const answer = prompt('Escribe la solución completa:');
  if (!answer) return;
  if (answer.trim().toUpperCase() === state.puzzle.phrase) {
    [...state.puzzle.phrase].forEach((c) => state.used.add(c));
    state.solved = true;
    resultLabel.textContent = '¡Correcto!';
    resultHint.textContent = `Has resuelto el panel con ${state.score} puntos.`;
  } else {
    state.lives = Math.max(0, state.lives - 1);
    resultLabel.textContent = 'No es correcto';
    resultHint.textContent = 'Pierdes una vida y puedes seguir jugando.';
  }
  updateUI();
}

document.getElementById('spinBtn').addEventListener('click', openWheel);
document.getElementById('wheelSpinBtn').addEventListener('click', spinWheel);
document.getElementById('solveBtn').addEventListener('click', solvePuzzle);
document.getElementById('resetBtn').addEventListener('click', pickPuzzle);
document.getElementById('closeWheelBtn').addEventListener('click', () => {
  if (state.spinning) return;
  state.wheelVisible = false;
  updateUI();
});
document.getElementById('closeKeyboardBtn').addEventListener('click', () => {
  state.keyboardVisible = false;
  updateUI();
});
window.addEventListener('resize', updateUI);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

pickPuzzle();
