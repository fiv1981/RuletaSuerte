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
  { category: 'Platos tipicos', phrase: 'TORTILLA DE PATATAS' },
  { category: 'Platos tipicos', phrase: 'PAELLA VALENCIANA' },
  { category: 'Platos tipicos', phrase: 'COCIDO MADRILEÑO' },
  { category: 'Platos tipicos', phrase: 'GAZPACHO ANDALUZ' },
  { category: 'Platos tipicos', phrase: 'SALMOREJO CORDOBÉS' },
  { category: 'Platos tipicos', phrase: 'MIGAS EXTREMEÑAS' },
  { category: 'Platos tipicos', phrase: 'PULPO A LA GALLEGA' },
  { category: 'Platos tipicos', phrase: 'PATATAS BRAVAS' },
  { category: 'Platos tipicos', phrase: 'CROQUETAS CASERAS' },
  { category: 'Platos tipicos', phrase: 'CALLOS A LA MADRILENA' },
  { category: 'Platos tipicos', phrase: 'FABADA ASTURIANA' },
  { category: 'Platos tipicos', phrase: 'MERLUZA EN SALSA VERDE' },
  { category: 'Platos tipicos', phrase: 'JAMON IBERICO DE BELLOTA' },
  { category: 'Platos tipicos', phrase: 'PIMIENTOS DEL PADRON' },
  { category: 'Platos tipicos', phrase: 'HUEVOS ROTOS CON JAMON' },
  { category: 'Platos tipicos', phrase: 'TORRIJAS DE SEMANA SANTA' },
  { category: 'Platos tipicos', phrase: 'ARROZ NEGRO CON ALIOLI' },
  { category: 'Platos tipicos', phrase: 'CHURROS CON CHOCOLATE' },
  { category: 'Platos tipicos', phrase: 'LECHE FRITA CASERA' },
  { category: 'Platos tipicos', phrase: 'QUESADA PASIEGA' },
  { category: 'Peliculas', phrase: 'OCHO APELLIDOS VASCOS' },
  { category: 'Peliculas', phrase: 'LOS OTROS' },
  { category: 'Peliculas', phrase: 'MAR ADENTRO' },
  { category: 'Peliculas', phrase: 'CELDA DOSCIENTOS ONCE' },
  { category: 'Peliculas', phrase: 'EL ORFANATO' },
  { category: 'Peliculas', phrase: 'LA SOCIEDAD DE LA NIEVE' },
  { category: 'Peliculas', phrase: 'TODO SOBRE MI MADRE' },
  { category: 'Peliculas', phrase: 'VOLVER' },
  { category: 'Peliculas', phrase: 'CAMPEONES' },
  { category: 'Peliculas', phrase: 'TESIS' },
  { category: 'Peliculas', phrase: 'ABRE LOS OJOS' },
  { category: 'Peliculas', phrase: 'LA ISLA MINIMA' },
  { category: 'Peliculas', phrase: 'EL DIA DE LA BESTIA' },
  { category: 'Peliculas', phrase: 'REC' },
  { category: 'Peliculas', phrase: 'BIENVENIDO MISTER MARSHALL' },
  { category: 'Peliculas', phrase: 'AMANECE QUE NO ES POCO' },
  { category: 'Peliculas', phrase: 'EL BOLA' },
  { category: 'Peliculas', phrase: 'LA LENGUA DE LAS MARIPOSAS' },
  { category: 'Peliculas', phrase: 'AIRBAG' },
  { category: 'Peliculas', phrase: 'TORRENTE EL BRAZO TONTO DE LA LEY' },
  { category: 'Expresiones cotidianas', phrase: 'ESTOY HASTA ARRIBA DE TRABAJO' },
  { category: 'Expresiones cotidianas', phrase: 'SE ME HA HECHO TARDE' },
  { category: 'Expresiones cotidianas', phrase: 'NO TENGO NI IDEA' },
  { category: 'Expresiones cotidianas', phrase: 'VENGA YA HOMBRE' },
  { category: 'Expresiones cotidianas', phrase: 'ESTOY HECHO POLVO' },
  { category: 'Expresiones cotidianas', phrase: 'ME PILLA FATAL' },
  { category: 'Expresiones cotidianas', phrase: 'MENUDO CALOR HACE' },
  { category: 'Expresiones cotidianas', phrase: 'LUEGO TE LLAMO' },
  { category: 'Expresiones cotidianas', phrase: 'YA VEREMOS' },
  { category: 'Expresiones cotidianas', phrase: 'QUE PASADA' },
  { category: 'Expresiones cotidianas', phrase: 'ESTA CHUPADO' },
  { category: 'Expresiones cotidianas', phrase: 'ME DA IGUAL' },
  { category: 'Expresiones cotidianas', phrase: 'NO ME CUENTES PELICULAS' },
  { category: 'Expresiones cotidianas', phrase: 'VETE HACIENDO A LA IDEA' },
  { category: 'Expresiones cotidianas', phrase: 'NOS VEMOS LUEGO' },
  { category: 'Expresiones cotidianas', phrase: 'A BUENAS HORAS' },
  { category: 'Expresiones cotidianas', phrase: 'ESTOY EN ELLO' },
  { category: 'Expresiones cotidianas', phrase: 'NO TENGO COBERTURA' },
  { category: 'Expresiones cotidianas', phrase: 'HA SIDO SIN QUERER' },
  { category: 'Expresiones cotidianas', phrase: 'QUE BARBARIDAD' },
  { category: 'Frases hechas', phrase: 'METER LA PATA' },
  { category: 'Frases hechas', phrase: 'ESTAR EN LAS NUBES' },
  { category: 'Frases hechas', phrase: 'TIRAR LA CASA POR LA VENTANA' },
  { category: 'Frases hechas', phrase: 'PONERSE LAS PILAS' },
  { category: 'Frases hechas', phrase: 'IRSE POR LAS RAMAS' },
  { category: 'Frases hechas', phrase: 'TENER MAL GENIO' },
  { category: 'Frases hechas', phrase: 'SER PAN COMIDO' },
  { category: 'Frases hechas', phrase: 'DAR EN EL CLAVO' },
  { category: 'Frases hechas', phrase: 'NO PEGAR OJO' },
  { category: 'Frases hechas', phrase: 'HABLAR POR LOS CODOS' },
  { category: 'Frases hechas', phrase: 'ESTAR COMO UNA CABRA' },
  { category: 'Frases hechas', phrase: 'QUEDARSE EN BLANCO' },
  { category: 'Frases hechas', phrase: 'TENER LA SARTEN POR EL MANGO' },
  { category: 'Frases hechas', phrase: 'SER UÑA Y CARNE' },
  { category: 'Frases hechas', phrase: 'TOMAR EL PELO' },
  { category: 'Frases hechas', phrase: 'PONER EL GRITO EN EL CIELO' },
  { category: 'Frases hechas', phrase: 'ESTAR HECHO UN FLAN' },
  { category: 'Frases hechas', phrase: 'AHOGARSE EN UN VASO DE AGUA' },
  { category: 'Frases hechas', phrase: 'TENER POCAS LUCES' },
  { category: 'Frases hechas', phrase: 'NO DAR PIE CON BOLA' },
  { category: 'Refranes', phrase: 'A QUIEN MADRUGA DIOS LE AYUDA' },
  { category: 'Refranes', phrase: 'NO HAY MAL QUE POR BIEN NO VENGA' },
  { category: 'Refranes', phrase: 'MAS VALE TARDE QUE NUNCA' },
  { category: 'Refranes', phrase: 'AL MAL TIEMPO BUENA CARA' },
  { category: 'Refranes', phrase: 'NUNCA ES TARDE SI LA DICHA ES BUENA' },
  { category: 'Refranes', phrase: 'CUANDO EL RIO SUENA AGUA LLEVA' },
  { category: 'Refranes', phrase: 'A PALABRAS NECIAS OIDOS SORDOS' },
  { category: 'Refranes', phrase: 'EN CASA DEL HERRERO CUCHILLO DE PALO' },
  { category: 'Refranes', phrase: 'EL HABITO NO HACE AL MONJE' },
  { category: 'Refranes', phrase: 'NO DEJES PARA MAÑANA LO QUE PUEDAS HACER HOY' },
  { category: 'Refranes', phrase: 'QUIEN MUCHO ABARCA POCO APRIETA' },
  { category: 'Refranes', phrase: 'OJOS QUE NO VEN CORAZON QUE NO SIENTE' },
  { category: 'Refranes', phrase: 'A CABALLO REGALADO NO LE MIRES EL DIENTE' },
  { category: 'Refranes', phrase: 'DIME CON QUIEN ANDAS Y TE DIRE QUIEN ERES' },
  { category: 'Refranes', phrase: 'EL QUE LA SIGUE LA CONSIGUE' },
  { category: 'Refranes', phrase: 'NO TODO LO QUE BRILLA ES ORO' },
  { category: 'Refranes', phrase: 'DEL DICHO AL HECHO HAY TRECHO' },
  { category: 'Refranes', phrase: 'A BUEN HAMBRE NO HAY MAL PAN' },
  { category: 'Refranes', phrase: 'QUIEN TIENE UN AMIGO TIENE UN TESORO' },
  { category: 'Refranes', phrase: 'NO SE GANO ZAMORA EN UNA HORA' },
  { category: 'Monumentos y lugares', phrase: 'SAGRADA FAMILIA DE BARCELONA' },
  { category: 'Monumentos y lugares', phrase: 'ALHAMBRA DE GRANADA' },
  { category: 'Monumentos y lugares', phrase: 'ACUEDUCTO DE SEGOVIA' },
  { category: 'Monumentos y lugares', phrase: 'MEZQUITA DE CORDOBA' },
  { category: 'Monumentos y lugares', phrase: 'PLAZA MAYOR DE MADRID' },
  { category: 'Monumentos y lugares', phrase: 'CATEDRAL DE SANTIAGO DE COMPOSTELA' },
  { category: 'Monumentos y lugares', phrase: 'TEATRO ROMANO DE MERIDA' },
  { category: 'Monumentos y lugares', phrase: 'MUSEO DEL PRADO' },
  { category: 'Monumentos y lugares', phrase: 'PARQUE GUELL' },
  { category: 'Monumentos y lugares', phrase: 'COSTA DA MORTE' },
  { category: 'Monumentos y lugares', phrase: 'MONASTERIO DE PIEDRA' },
  { category: 'Monumentos y lugares', phrase: 'PUERTA DE ALCALA' },
  { category: 'Monumentos y lugares', phrase: 'TORRE DEL ORO' },
  { category: 'Monumentos y lugares', phrase: 'CIUDAD DE LAS ARTES Y LAS CIENCIAS' },
  { category: 'Monumentos y lugares', phrase: 'VALLE DEL JERTE' },
  { category: 'Monumentos y lugares', phrase: 'PICOS DE EUROPA' },
  { category: 'Monumentos y lugares', phrase: 'ISLAS CIES' },
  { category: 'Monumentos y lugares', phrase: 'PLAZA DE ESPAÑA DE SEVILLA' },
  { category: 'Monumentos y lugares', phrase: 'REAL ALCAZAR DE SEVILLA' },
  { category: 'Monumentos y lugares', phrase: 'CAMINO DE SANTIAGO' }
];

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
  solved: false,
  finishType: null
};

const canvas = document.getElementById('wheel');
const ctx = canvas.getContext('2d');
const resultLabel = document.getElementById('resultLabel');
const resultHint = document.getElementById('resultHint');
const scoreValue = document.getElementById('scoreValue');
const lifeValue = document.getElementById('lifeValue');
const phraseBoard = document.getElementById('phraseBoard');
const phraseCategory = document.getElementById('phraseCategory');
const wheelModal = document.getElementById('wheelModal');
const keyboardModal = document.getElementById('keyboardModal');
const keyboardGrid = document.getElementById('keyboardGrid');
const resultSplash = document.getElementById('resultSplash');
const resultSplashShape = document.getElementById('resultSplashShape');
const resultSplashText = document.getElementById('resultSplashText');
const finishModal = document.getElementById('finishModal');
const finishIcon = document.getElementById('finishIcon');
const finishTitle = document.getElementById('finishTitle');
let audioCtx;
let spinNodes = null;

function chunkPhrase(phrase, maxCharsPerLine = 16) {
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
  return lines;
}

function getAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

function beep({ frequency = 440, duration = 0.08, type = 'sine', gain = 0.03, slideTo = null }) {
  const ctx = getAudio();
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const amp = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(frequency, now);
  if (slideTo) osc.frequency.linearRampToValueAtTime(slideTo, now + duration);
  amp.gain.setValueAtTime(gain, now);
  amp.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  osc.connect(amp).connect(ctx.destination);
  osc.start(now);
  osc.stop(now + duration);
}

function playClick() {
  beep({ frequency: 780, duration: 0.025, type: 'triangle', gain: 0.014, slideTo: 640 });
}
function startSpinSound(duration = 3.4) {
  const ctx = getAudio();
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const tremolo = ctx.createOscillator();
  const tremoloGain = ctx.createGain();
  const filter = ctx.createBiquadFilter();
  const amp = ctx.createGain();
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(520, now);
  osc.frequency.exponentialRampToValueAtTime(210, now + duration);
  tremolo.type = 'sine';
  tremolo.frequency.setValueAtTime(22, now);
  tremolo.frequency.exponentialRampToValueAtTime(6, now + duration);
  tremoloGain.gain.setValueAtTime(140, now);
  tremoloGain.gain.exponentialRampToValueAtTime(18, now + duration);
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(1800, now);
  filter.frequency.exponentialRampToValueAtTime(620, now + duration);
  amp.gain.setValueAtTime(0.0001, now);
  amp.gain.linearRampToValueAtTime(0.024, now + 0.04);
  amp.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  tremolo.connect(tremoloGain).connect(osc.frequency);
  osc.connect(filter).connect(amp).connect(ctx.destination);
  osc.start(now);
  tremolo.start(now);
  spinNodes = { osc, tremolo, amp, ctx, stopAt: now + duration };
}

function stopSpinSound() {
  if (!spinNodes) return;
  const { osc, tremolo, amp, ctx } = spinNodes;
  const now = ctx.currentTime;
  amp.gain.cancelScheduledValues(now);
  amp.gain.setValueAtTime(Math.max(amp.gain.value, 0.0001), now);
  amp.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
  osc.stop(now + 0.1);
  tremolo.stop(now + 0.1);
  spinNodes = null;
}
function playResultBoom() {
  beep({ frequency: 150, slideTo: 90, duration: 0.16, type: 'sine', gain: 0.05 });
  setTimeout(() => beep({ frequency: 510, slideTo: 340, duration: 0.14, type: 'triangle', gain: 0.03 }), 60);
}
function playBankrupt() {
  beep({ frequency: 210, duration: 0.1, type: 'sawtooth', gain: 0.03, slideTo: 150 });
  setTimeout(() => beep({ frequency: 160, duration: 0.16, type: 'square', gain: 0.028, slideTo: 110 }), 80);
}
function playLoseTurn() {
  beep({ frequency: 280, duration: 0.08, type: 'triangle', gain: 0.025, slideTo: 220 });
  setTimeout(() => beep({ frequency: 190, duration: 0.12, type: 'triangle', gain: 0.022, slideTo: 140 }), 70);
}
function playSuccess() {
  beep({ frequency: 740, duration: 0.05, type: 'triangle', gain: 0.02, slideTo: 920 });
  setTimeout(() => beep({ frequency: 980, duration: 0.08, type: 'sine', gain: 0.025, slideTo: 1240 }), 75);
}
function showFinishModal(type = 'victory') {
  finishIcon.textContent = type === 'victory' ? '🏆' : '⛔';
  finishTitle.textContent = type === 'victory' ? '¡RESUELTO!' : 'SIN VIDAS';
  state.finishType = type;
  document.getElementById('playAgainBtn').textContent = type === 'victory' ? 'Volver a jugar' : 'Volver a empezar';
  document.getElementById('closeFinishBtn').textContent = type === 'victory' ? 'Cerrar' : 'Reiniciar';
  finishModal.classList.add('visible');
}

function closeFinishModal() {
  finishModal.classList.remove('visible');
}

function playVictory() {
  const ctx = getAudio();
  const now = ctx.currentTime;
  const notes = [523.25, 659.25, 783.99, 1046.5, 1318.51, 1567.98];
  notes.forEach((note, index) => {
    const osc = ctx.createOscillator();
    const shimmer = ctx.createOscillator();
    const shimmerGain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    const amp = ctx.createGain();
    const start = now + index * 0.18;
    const end = start + 0.68;
    osc.type = index < 3 ? 'triangle' : 'sine';
    osc.frequency.setValueAtTime(note, start);
    osc.frequency.linearRampToValueAtTime(note * 1.015, end);
    shimmer.type = 'sine';
    shimmer.frequency.setValueAtTime(4 + index, start);
    shimmerGain.gain.setValueAtTime(9 + index * 2, start);
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2200 + index * 280, start);
    amp.gain.setValueAtTime(0.0001, start);
    amp.gain.linearRampToValueAtTime(0.018 + index * 0.003, start + 0.06);
    amp.gain.exponentialRampToValueAtTime(0.0001, end);
    shimmer.connect(shimmerGain).connect(osc.frequency);
    osc.connect(filter).connect(amp).connect(ctx.destination);
    osc.start(start);
    shimmer.start(start);
    osc.stop(end);
    shimmer.stop(end);
  });
  setTimeout(() => beep({ frequency: 1760, duration: 0.42, type: 'sine', gain: 0.05, slideTo: 2093 }), 980);
}
function playError() {
  beep({ frequency: 280, duration: 0.08, type: 'triangle', gain: 0.025, slideTo: 210 });
  setTimeout(() => beep({ frequency: 220, duration: 0.09, type: 'triangle', gain: 0.02, slideTo: 170 }), 70);
}

function showResultSplash(text, seg) {
  resultSplashText.textContent = text;
  resultSplashShape.classList.remove('is-bankrupt', 'is-lose');
  resultSplashShape.style.background = `linear-gradient(135deg, ${seg.color}, rgba(255,255,255,0.26))`;
  if (text === 'QUIEBRA') resultSplashShape.classList.add('is-bankrupt');
  if (text === 'PIERDE TURNO') resultSplashShape.classList.add('is-lose');
  resultSplash.classList.add('visible');
  setTimeout(() => resultSplash.classList.remove('visible'), 950);
}

function pickPuzzle() {
  state.puzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
  state.used = new Set([' ']);
  state.score = 0;
  state.lives = 3;
  state.currentPrize = 0;
  state.solved = false;
  state.finishType = null;
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

  const isPortrait = window.innerHeight > window.innerWidth;
  const lines = chunkPhrase(state.puzzle.phrase, isPortrait ? 9 : window.innerHeight < 700 ? 16 : 20);
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

  wheelModal.classList.toggle('visible', state.wheelVisible);
  keyboardModal.classList.toggle('visible', state.keyboardVisible);
  drawWheel();
  renderKeyboard();
}

function renderKeyboard() {
  const letters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
  const isLandscape = window.matchMedia('(orientation: landscape)').matches;
  const isSmallLandscape = isLandscape && window.innerHeight <= 640;
  const isPortraitMobile = !isLandscape && window.innerWidth <= 900;
  const columns = isSmallLandscape ? 6 : isPortraitMobile ? 6 : 7;
  const remainder = letters.length % columns;
  const fillerCount = remainder === 0 ? 0 : columns - remainder;
  const padded = [...letters, ...Array.from({ length: fillerCount }, () => '')];
  keyboardGrid.innerHTML = padded.map((letter) => {
    if (!letter) return '<div class="key-pad" aria-hidden="true"></div>';
    const used = state.used.has(letter);
    const hit = used && state.puzzle.phrase.includes(letter);
    const tone = used ? (hit ? ' key-btn--hit' : ' key-btn--miss') : '';
    return `
      <button class="key-btn${tone}" data-letter="${letter}" ${used || !state.currentPrize || state.solved ? 'disabled' : ''}>${letter}</button>
    `;
  }).join('');
  keyboardGrid.querySelectorAll('[data-letter]').forEach((btn) => {
    btn.addEventListener('click', () => pickLetter(btn.dataset.letter));
  });
}

function openWheel() {
  if (state.spinning || state.solved || state.lives <= 0 || state.finishType) return;
  playClick();
  state.wheelVisible = true;
  state.keyboardVisible = false;
  updateUI();
}

function spinWheel() {
  if (state.spinning) return;
  const duration = 3400;
  startSpinSound(duration / 1000);
  state.spinning = true;
  const slice = (Math.PI * 2) / segments.length;
  const winningIndex = Math.floor(Math.random() * segments.length);
  const segmentCenter = winningIndex * slice + slice / 2;
  const targetNormalized = ((-Math.PI / 2) - segmentCenter + Math.PI * 2) % (Math.PI * 2);
  const currentNormalized = ((state.angle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
  const extraTurns = (7 + Math.floor(Math.random() * 3)) * Math.PI * 2;
  const delta = (targetNormalized - currentNormalized + Math.PI * 2) % (Math.PI * 2);
  const startAngle = state.angle;
  const finalAngle = state.angle + extraTurns + delta;
  state.pendingSegment = segments[winningIndex];
  const start = performance.now();

  function frame(now) {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 4);
    state.angle = startAngle + (finalAngle - startAngle) * eased;
    drawWheel();
    if (t < 1) return requestAnimationFrame(frame);
    state.angle = targetNormalized;
    state.spinning = false;
    stopSpinSound();
    drawWheel();
    resolveSpin();
  }

  requestAnimationFrame(frame);
}

function resolveSpin() {
  const seg = state.pendingSegment || segments[0];

  if (seg.value === 'bankrupt') {
    state.score = 0;
    state.currentPrize = 0;
    state.wheelVisible = false;
    resultLabel.textContent = '¡Quiebra!';
    resultHint.textContent = 'Pierdes los puntos y puedes volver a girar.';
    showResultSplash('QUIEBRA', seg);
    playBankrupt();
  } else if (seg.value === 'lose') {
    state.lives = Math.max(0, state.lives - 1);
    state.currentPrize = 0;
    state.wheelVisible = false;
    resultLabel.textContent = 'Pierdes turno';
    resultHint.textContent = 'Has perdido una vida.';
    showResultSplash('PIERDE TURNO', seg);
    playLoseTurn();
  } else {
    state.currentPrize = seg.value;
    state.wheelVisible = false;
    resultLabel.textContent = `${seg.label} por acierto`;
    resultHint.textContent = 'Elige una letra en el teclado del juego.';
    showResultSplash(String(seg.label), seg);
    playResultBoom();
    setTimeout(() => {
      state.keyboardVisible = true;
      updateUI();
    }, 240);
  }

  state.pendingSegment = null;
  updateUI();
  if (state.lives <= 0 && !state.solved) {
    resultLabel.textContent = 'Sin vidas';
    resultHint.textContent = `Puntuación final: ${state.score}`;
    showFinishModal('lose');
  }
}

function pickLetter(letter) {
  if (!state.currentPrize || state.used.has(letter) || state.solved || state.lives <= 0 || state.finishType) return;
  state.keyboardVisible = false;
  state.used.add(letter);
  const count = [...state.puzzle.phrase].filter((c) => c === letter).length;

  if (count) {
    state.score += count * state.currentPrize;
    resultLabel.textContent = `¡${count} ${count === 1 ? 'letra' : 'letras'}!`;
    resultHint.textContent = `Sumas ${count * state.currentPrize} puntos. Puedes volver a girar.`;
    playSuccess();
  } else {
    state.lives = Math.max(0, state.lives - 1);
    resultLabel.textContent = 'No aparece';
    resultHint.textContent = 'La letra no está. Pierdes una vida.';
    playError();
  }

  state.currentPrize = 0;
  state.solved = [...state.puzzle.phrase].every((c) => c === ' ' || state.used.has(c));
  if (state.solved) {
    resultLabel.textContent = '¡Panel resuelto!';
    resultHint.textContent = `Puntuación final: ${state.score}`;
    showFinishModal('victory');
    playVictory();
  } else if (state.lives <= 0) {
    resultLabel.textContent = 'Sin vidas';
    resultHint.textContent = `Puntuación final: ${state.score}`;
    showFinishModal('lose');
    playError();
  }

  updateUI();
}

function solvePuzzle() {
  if (state.solved || state.lives <= 0 || state.finishType) return;
  const answer = prompt('Escribe la solución completa:');
  if (!answer) return;
  if (answer.trim().toUpperCase() === state.puzzle.phrase) {
    [...state.puzzle.phrase].forEach((c) => state.used.add(c));
    state.solved = true;
    resultLabel.textContent = '¡Correcto!';
    resultHint.textContent = `Has resuelto el panel con ${state.score} puntos.`;
    showFinishModal('victory');
    playVictory();
  } else {
    state.lives = Math.max(0, state.lives - 1);
    resultLabel.textContent = 'No es correcto';
    resultHint.textContent = 'Pierdes una vida y puedes seguir jugando.';
    playError();
  }
  updateUI();
}

document.getElementById('spinBtn').addEventListener('click', openWheel);
document.getElementById('wheelSpinBtn').addEventListener('click', spinWheel);
document.getElementById('solveBtn').addEventListener('click', () => {
  playClick();
  solvePuzzle();
});
document.getElementById('openKeyboardBtn').addEventListener('click', () => {
  playClick();
  if (state.solved || state.lives <= 0 || state.finishType) return;
  state.keyboardVisible = true;
  state.wheelVisible = false;
  updateUI();
});
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
document.getElementById('playAgainBtn').addEventListener('click', () => {
  closeFinishModal();
  if (state.finishType === 'lose') {
    state.used = new Set([' ']);
    state.lives = 3;
    state.currentPrize = 0;
    state.solved = false;
    state.finishType = null;
    resultLabel.textContent = 'Pulsa Girar para continuar';
    resultHint.textContent = 'Tienes otra oportunidad con el mismo panel.';
    updateUI();
    return;
  }
  pickPuzzle();
});
document.getElementById('closeFinishBtn').addEventListener('click', () => {
  closeFinishModal();
  if (state.finishType === 'lose') {
    pickPuzzle();
  }
});
window.addEventListener('resize', updateUI);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

pickPuzzle();
