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
  { category: 'Peliculas', phrase: 'OCHO APELLIDOS VASCOS' },
  { category: 'Peliculas', phrase: 'AMANECE QUE NO ES POCO' },
  { category: 'Peliculas', phrase: 'LA GRAN FAMILIA ESPANOLA' },
  { category: 'Peliculas', phrase: 'EL VERDUGO DE LUIS GARCIA BERLANGA' },
  { category: 'Peliculas', phrase: 'BIENVENIDO MISTER MARSHALL' },
  { category: 'Peliculas', phrase: 'MUJERES AL BORDE DE UN ATAQUE DE NERVIOS' },
  { category: 'Peliculas', phrase: 'EL DIA DE LA BESTIA' },
  { category: 'Peliculas', phrase: 'TESIS DE ALEJANDRO AMENABAR' },
  { category: 'Peliculas', phrase: 'ABRE LOS OJOS' },
  { category: 'Peliculas', phrase: 'TODO SOBRE MI MADRE' },
  { category: 'Peliculas', phrase: 'VOLVER DE PEDRO ALMODOVAR' },
  { category: 'Peliculas', phrase: 'MAR ADENTRO CON JAVIER BARDEM' },
  { category: 'Peliculas', phrase: 'LOS OTROS EN LA CASA' },
  { category: 'Peliculas', phrase: 'CELDA 211' },
  { category: 'Peliculas', phrase: 'CAMPEONES DE JAVIER FESSER' },
  { category: 'Peliculas', phrase: 'EL ORFANATO DE JUAN ANTONIO BAYONA' },
  { category: 'Peliculas', phrase: 'UN MONSTRUO VIENE A VERME' },
  { category: 'Peliculas', phrase: 'LA LENGUA DE LAS MARIPOSAS' },
  { category: 'Peliculas', phrase: 'EL BOSQUE ANIMADO' },
  { category: 'Peliculas', phrase: 'LAS TRECE ROSAS' },
  { category: 'Peliculas', phrase: 'EL LABERINTO DEL FAUNO' },
  { category: 'Peliculas', phrase: 'TORRENTE EL BRAZO TONTO DE LA LEY' },
  { category: 'Peliculas', phrase: 'AIRBAG DE JUANMA BAJO ULLOA' },
  { category: 'Peliculas', phrase: 'LAS BRUJAS DE ZUGARRAMURDI' },
  { category: 'Peliculas', phrase: 'LA COMUNIDAD EN EL EDIFICIO' },
  { category: 'Peliculas', phrase: 'REC EN EL RELLANO' },
  { category: 'Peliculas', phrase: 'EL REINO DE RODRIGO SOROGOYEN' },
  { category: 'Peliculas', phrase: 'AS BESTAS EN LA ALDEA' },
  { category: 'Peliculas', phrase: 'LA ISLA MINIMA' },
  { category: 'Peliculas', phrase: 'PALMERAS EN LA NIEVE' },
  { category: 'Peliculas', phrase: 'PRIMOS DE DANIEL SANCHEZ AREVALO' },
  { category: 'Peliculas', phrase: 'EL VIAJE A NINGUNA PARTE' },
  { category: 'Peliculas', phrase: 'PERFECTOS DESCONOCIDOS EN LA CENA' },
  { category: 'Peliculas', phrase: 'EL BUEN PATRON' },
  { category: 'Peliculas', phrase: 'LA TRINCHERA INFINITA' },
  { category: 'Peliculas', phrase: 'VERANO MIL NOVECIENTOS NOVENTA Y TRES' },
  { category: 'Peliculas', phrase: 'SIETE APELLIDOS CATALANES' },
  { category: 'Peliculas', phrase: 'TODOS LO SABEN' },
  { category: 'Peliculas', phrase: 'LA NOVIA DE PAULA ORTIZ' },
  { category: 'Peliculas', phrase: 'EL BOLA' },

  { category: 'Series', phrase: 'AQUI NO HAY QUIEN VIVA' },
  { category: 'Series', phrase: 'LA QUE SE AVECINA' },
  { category: 'Series', phrase: 'CUENTAME COMO PASO' },
  { category: 'Series', phrase: 'EL MINISTERIO DEL TIEMPO' },
  { category: 'Series', phrase: 'LOS HOMBRES DE PACO' },
  { category: 'Series', phrase: 'MEDICO DE FAMILIA' },
  { category: 'Series', phrase: 'COMPANEROS DE CLASE' },
  { category: 'Series', phrase: 'UN PASO ADELANTE' },
  { category: 'Series', phrase: 'LOS SERRANO EN SANTA JUSTA' },
  { category: 'Series', phrase: 'VERANO AZUL EN NERJA' },
  { category: 'Series', phrase: 'FARMACIA DE GUARDIA' },
  { category: 'Series', phrase: 'PERIODISTAS EN LA REDACCION' },
  { category: 'Series', phrase: 'CAMARA CAFE EN LA OFICINA' },
  { category: 'Series', phrase: 'AIDA EN ESPERANZA SUR' },
  { category: 'Series', phrase: 'EL COMISARIO' },
  { category: 'Series', phrase: 'HOSPITAL CENTRAL DE MADRID' },
  { category: 'Series', phrase: 'MACHOS ALFA EN LA CAPITAL' },
  { category: 'Series', phrase: 'PAQUITA SALAS REPRESENTANTE DE ACTORES' },
  { category: 'Series', phrase: 'LAS CHICAS DEL CABLE' },
  { category: 'Series', phrase: 'VALERIA EN LA GRAN VIA' },
  { category: 'Series', phrase: 'LA CASA DE PAPEL' },
  { category: 'Series', phrase: 'VIS A VIS EN CRUZ DEL SUR' },
  { category: 'Series', phrase: 'MERLI SAPERE AUDE' },
  { category: 'Series', phrase: 'FISICA O QUIMICA EN ZURBARAN' },
  { category: 'Series', phrase: 'EL INTERNADO LAS CUMBRES' },
  { category: 'Series', phrase: 'LOS PROTEGIDOS EN FAMILIA' },
  { category: 'Series', phrase: 'GRAN HOTEL' },
  { category: 'Series', phrase: 'ISABEL REINA DE CASTILLA' },
  { category: 'Series', phrase: 'REYES DE LA NOCHE' },
  { category: 'Series', phrase: 'EL PUEBLO' },
  { category: 'Series', phrase: 'ALLI ABAJO ENTRE SEVILLA Y DONOSTIA' },
  { category: 'Series', phrase: 'EL VECINO DE LAVAPIES' },
  { category: 'Series', phrase: 'CUERPO DE ELITE' },
  { category: 'Series', phrase: 'SIN TETAS NO HAY PARAISO' },
  { category: 'Series', phrase: 'LOS FAVORITOS DE MIDAS' },
  { category: 'Series', phrase: '7 VIDAS EN EL BARRIO' },
  { category: 'Series', phrase: 'EL CASO CRONICA DE SUCESOS' },
  { category: 'Series', phrase: 'LA CHICA DE NIEVE' },
  { category: 'Series', phrase: 'ENTREVIAS EN EL BARRIO' },
  { category: 'Series', phrase: 'BY ANA MILAN' },

  { category: 'Musica', phrase: 'LA CHICA DE AYER' },
  { category: 'Musica', phrase: 'DEVUELVEME A MI CHICA' },
  { category: 'Musica', phrase: 'VIVIR ASI ES MORIR DE AMOR' },
  { category: 'Musica', phrase: 'MEDITERRANEO DE JOAN MANUEL SERRAT' },
  { category: 'Musica', phrase: 'PONGAMOS QUE HABLO DE MADRID' },
  { category: 'Musica', phrase: 'Y NOS DIERON LAS DIEZ' },
  { category: 'Musica', phrase: 'PRINCESA DE JOAQUIN SABINA' },
  { category: 'Musica', phrase: 'PECES DE CIUDAD' },
  { category: 'Musica', phrase: 'A QUIEN LE IMPORTA' },
  { category: 'Musica', phrase: 'BAILANDO' },
  { category: 'Musica', phrase: 'ENTRE DOS TIERRAS' },
  { category: 'Musica', phrase: 'MALDITO DUENDE' },
  { category: 'Musica', phrase: 'LA FUERZA DEL DESTINO' },
  { category: 'Musica', phrase: 'MAQUILLAJE' },
  { category: 'Musica', phrase: 'UN ANO MAS EN LA PUERTA DEL SOL' },
  { category: 'Musica', phrase: 'ES POR TI' },
  { category: 'Musica', phrase: 'CAMINANDO POR LA VIDA' },
  { category: 'Musica', phrase: 'NO PUEDO VIVIR SIN TI' },
  { category: 'Musica', phrase: 'CORAZON PARTIO' },
  { category: 'Musica', phrase: 'AMIGA MIA DE ALEJANDRO SANZ' },
  { category: 'Musica', phrase: 'LA FLACA' },
  { category: 'Musica', phrase: 'DEPENDE DE JARABE DE PALO' },
  { category: 'Musica', phrase: 'BONITO TODO ME PARECE BONITO' },
  { category: 'Musica', phrase: 'POR LA RAJA DE TU FALDA' },
  { category: 'Musica', phrase: 'COMO CAMARON' },
  { category: 'Musica', phrase: 'ANTES DE QUE CUENTE DIEZ' },
  { category: 'Musica', phrase: 'VEINTE DE ABRIL DEL NOVENTA' },
  { category: 'Musica', phrase: 'CUENTAME AL OIDO' },
  { category: 'Musica', phrase: 'SOY UN TRUHAN SOY UN SENOR' },
  { category: 'Musica', phrase: 'ME VA ME VA' },
  { category: 'Musica', phrase: 'INSURRECCION DE EL ULTIMO DE LA FILA' },
  { category: 'Musica', phrase: 'MI GRAN NOCHE' },
  { category: 'Musica', phrase: 'LIBRE DE NINO BRAVO' },
  { category: 'Musica', phrase: 'UN BESO Y UNA FLOR' },
  { category: 'Musica', phrase: 'SUFRE MAMON' },
  { category: 'Musica', phrase: 'EN ALGUN LUGAR' },
  { category: 'Musica', phrase: 'MALAMENTE DE ROSALIA' },
  { category: 'Musica', phrase: 'MALO MALO MALO ERES' },
  { category: 'Musica', phrase: 'DOLCE VITA' },
  { category: 'Musica', phrase: 'LO HICIMOS BIEN' },

  { category: 'Comidas', phrase: 'TORTILLA DE PATATAS CON CEBOLLA' },
  { category: 'Comidas', phrase: 'BOCADILLO DE CALAMARES EN LA PLAZA MAYOR' },
  { category: 'Comidas', phrase: 'PAELLA VALENCIANA DEL DOMINGO' },
  { category: 'Comidas', phrase: 'CROQUETAS CASERAS DE JAMON' },
  { category: 'Comidas', phrase: 'PATATAS BRAVAS CON SU SALSA' },
  { category: 'Comidas', phrase: 'GAZPACHO FRESQUITO EN VERANO' },
  { category: 'Comidas', phrase: 'SALMOREJO CON HUEVO Y JAMON' },
  { category: 'Comidas', phrase: 'PULPO A LA GALLEGA' },
  { category: 'Comidas', phrase: 'CHURROS CON CHOCOLATE PARA MERENDAR' },
  { category: 'Comidas', phrase: 'LENTEJAS DE LA ABUELA' },
  { category: 'Comidas', phrase: 'COCIDO MADRILENO DE LOS TRES VUELCOS' },
  { category: 'Comidas', phrase: 'FABADA ASTURIANA CON COMPANGO' },
  { category: 'Comidas', phrase: 'MIGAS CON UVAS EN EL PUEBLO' },
  { category: 'Comidas', phrase: 'CALLOS A LA MADRILENA' },
  { category: 'Comidas', phrase: 'TORRIJAS DE SEMANA SANTA' },
  { category: 'Comidas', phrase: 'ARROZ NEGRO CON ALIOLI' },
  { category: 'Comidas', phrase: 'MERLUZA A LA ROMANA' },
  { category: 'Comidas', phrase: 'PIMIENTOS DE PADRON' },
  { category: 'Comidas', phrase: 'ENSALADILLA RUSA DE BAR DE BARRIO' },
  { category: 'Comidas', phrase: 'PINCHO DE TORTILLA RECIEN HECHO' },
  { category: 'Comidas', phrase: 'JAMON IBERICO CORTADO A CUCHILLO' },
  { category: 'Comidas', phrase: 'QUESO MANCHEGO CON PAN CRUJIENTE' },
  { category: 'Comidas', phrase: 'HORCHATA CON FARTONS' },
  { category: 'Comidas', phrase: 'TOSTADA CON TOMATE Y ACEITE' },
  { category: 'Comidas', phrase: 'SEPIA A LA PLANCHA' },
  { category: 'Comidas', phrase: 'CALAMARES A LA ANDALUZA' },
  { category: 'Comidas', phrase: 'ALBONDIGAS EN SALSA' },
  { category: 'Comidas', phrase: 'FLAN DE HUEVO CASERO' },
  { category: 'Comidas', phrase: 'ARROZ CON LECHE DE LA YAYA' },
  { category: 'Comidas', phrase: 'EMPANADA GALLEGA DE ATUN' },
  { category: 'Comidas', phrase: 'PAN CON TOMATE Y JAMON' },
  { category: 'Comidas', phrase: 'TARTA DE SANTIAGO' },
  { category: 'Comidas', phrase: 'PESCADITO FRITO EN EL CHIRINGUITO' },
  { category: 'Comidas', phrase: 'RABO DE TORO CORDOBES' },
  { category: 'Comidas', phrase: 'BACALAO AL PIL PIL' },
  { category: 'Comidas', phrase: 'SARDINAS A LA BRASA EN SAN JUAN' },
  { category: 'Comidas', phrase: 'BUNUELOS DE VIENTO RECIEN HECHOS' },
  { category: 'Comidas', phrase: 'TURRON DE JIJONA EN NAVIDAD' },
  { category: 'Comidas', phrase: 'ROSCON DE REYES CON NATA' },
  { category: 'Comidas', phrase: 'LECHE FRITA CON CANELA' },

  { category: 'Lugares y refranes', phrase: 'A QUIEN MADRUGA DIOS LE AYUDA' },
  { category: 'Lugares y refranes', phrase: 'MAS VALE TARDE QUE NUNCA' },
  { category: 'Lugares y refranes', phrase: 'AL MAL TIEMPO BUENA CARA' },
  { category: 'Lugares y refranes', phrase: 'NO HAY MAL QUE POR BIEN NO VENGA' },
  { category: 'Lugares y refranes', phrase: 'EN ABRIL AGUAS MIL' },
  { category: 'Lugares y refranes', phrase: 'DE TAL PALO TAL ASTILLA' },
  { category: 'Lugares y refranes', phrase: 'NADIE DA DUROS A PESETA' },
  { category: 'Lugares y refranes', phrase: 'A BUEN HAMBRE NO HAY MAL PAN' },
  { category: 'Lugares y refranes', phrase: 'EN CASA DEL HERRERO CUCHILLO DE PALO' },
  { category: 'Lugares y refranes', phrase: 'QUIEN MUCHO ABARCA POCO APRIETA' },
  { category: 'Lugares y refranes', phrase: 'NO SE GANO ZAMORA EN UNA HORA' },
  { category: 'Lugares y refranes', phrase: 'DIME CON QUIEN ANDAS Y TE DIRE QUIEN ERES' },
  { category: 'Lugares y refranes', phrase: 'DEL DICHO AL HECHO HAY MUCHO TRECHO' },
  { category: 'Lugares y refranes', phrase: 'A PALABRAS NECIAS OIDOS SORDOS' },
  { category: 'Lugares y refranes', phrase: 'EL HABITO NO HACE AL MONJE' },
  { category: 'Lugares y refranes', phrase: 'OJOS QUE NO VEN CORAZON QUE NO SIENTE' },
  { category: 'Lugares y refranes', phrase: 'CONTIGO PAN Y CEBOLLA' },
  { category: 'Lugares y refranes', phrase: 'EL QUE LA SIGUE LA CONSIGUE' },
  { category: 'Lugares y refranes', phrase: 'METERSE EN CAMISA DE ONCE VARAS' },
  { category: 'Lugares y refranes', phrase: 'ZAPATERO A TUS ZAPATOS' },
  { category: 'Lugares y refranes', phrase: 'PLAZA MAYOR DE SALAMANCA AL ATARDECER' },
  { category: 'Lugares y refranes', phrase: 'LA GRAN VIA LLENA DE GENTE' },
  { category: 'Lugares y refranes', phrase: 'LA CONCHA DE SAN SEBASTIAN' },
  { category: 'Lugares y refranes', phrase: 'LA MEZQUITA DE CORDOBA' },
  { category: 'Lugares y refranes', phrase: 'LA ALHAMBRA DE GRANADA' },
  { category: 'Lugares y refranes', phrase: 'LA SAGRADA FAMILIA EN BARCELONA' },
  { category: 'Lugares y refranes', phrase: 'LA CATEDRAL DE SANTIAGO DE COMPOSTELA' },
  { category: 'Lugares y refranes', phrase: 'EL ACUEDUCTO DE SEGOVIA' },
  { category: 'Lugares y refranes', phrase: 'LA PLAZA DE ESPANA DE SEVILLA' },
  { category: 'Lugares y refranes', phrase: 'EL TEATRO ROMANO DE MERIDA' },
  { category: 'Lugares y refranes', phrase: 'LAS CASAS COLGADAS DE CUENCA' },
  { category: 'Lugares y refranes', phrase: 'LA CIUDAD DE LAS ARTES Y LAS CIENCIAS' },
  { category: 'Lugares y refranes', phrase: 'LAS MEDULAS EN OTONO' },
  { category: 'Lugares y refranes', phrase: 'EL CAMINO DE SANTIAGO EN SEPTIEMBRE' },
  { category: 'Lugares y refranes', phrase: 'LA PUERTA DEL SOL EN NOCHEVIEJA' },
  { category: 'Lugares y refranes', phrase: 'EL TEMPLO DE DEBOD AL ATARDECER' },
  { category: 'Lugares y refranes', phrase: 'LA SIERRA DE GREDOS NEVADA' },
  { category: 'Lugares y refranes', phrase: 'EL CABO DE GATA FRENTE AL MAR' },
  { category: 'Lugares y refranes', phrase: 'RONDA ASOMADA AL TAJO' },
  { category: 'Lugares y refranes', phrase: 'EL GUGGENHEIM DE BILBAO' }
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
const keyboardModal = document.getElementById('keyboardModal');
const keyboardGrid = document.getElementById('keyboardGrid');

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
  while (lines.length > 3) {
    const last = lines.pop();
    lines[lines.length - 1] += ' ' + last;
  }
  return lines;
}

function normalize(str) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^A-Z0-9 ]/g, '')
    .toUpperCase();
}

function pickPuzzle() {
  if (state.used.size === puzzles.length) state.used.clear();
  let index;
  do {
    index = Math.floor(Math.random() * puzzles.length);
  } while (state.used.has(index));
  state.used.add(index);
  const base = puzzles[index];
  state.puzzle = {
    category: base.category,
    phrase: normalize(base.phrase),
    guessed: new Set()
  };
  state.currentPrize = 0;
  state.solved = false;
  resultLabel.textContent = 'Gira la ruleta';
  resultHint.textContent = 'Acierta consonantes y resuelve la frase';
  phraseCategory.textContent = base.category;
  usedLetters.textContent = 'Letras usadas: -';
  renderBoard();
  renderKeyboard();
}

function renderBoard() {
  phraseBoard.innerHTML = '';
  const lines = chunkPhrase(state.puzzle.phrase);
  lines.forEach(line => {
    const row = document.createElement('div');
    row.className = 'phrase-row';
    [...line].forEach(char => {
      const cell = document.createElement('div');
      cell.className = 'letter-box';
      if (char === ' ') {
        cell.classList.add('space');
        cell.textContent = '';
      } else if (/[0-9]/.test(char) || state.puzzle.guessed.has(char)) {
        cell.textContent = char;
        cell.classList.add('revealed');
      } else {
        cell.textContent = '';
      }
      row.appendChild(cell);
    });
    phraseBoard.appendChild(row);
  });
}

function drawWheel() {
  const radius = canvas.width / 2;
  const cx = radius;
  const cy = radius;
  const arc = (Math.PI * 2) / segments.length;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate((state.angle * Math.PI) / 180);

  segments.forEach((segment, index) => {
    const start = index * arc;
    const end = start + arc;

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, radius - 10, start, end);
    ctx.closePath();
    ctx.fillStyle = segment.color;
    ctx.fill();

    ctx.save();
    ctx.rotate(start + arc / 2);
    ctx.textAlign = 'right';
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 20px system-ui';
    ctx.fillText(segment.label, radius - 30, 8);
    ctx.restore();
  });

  ctx.restore();

  ctx.beginPath();
  ctx.arc(cx, cy, 28, 0, Math.PI * 2);
  ctx.fillStyle = '#0f172a';
  ctx.fill();
}

function updateHud() {
  scoreValue.textContent = state.score;
  lifeValue.textContent = '❤'.repeat(state.lives);
}

function openWheel() {
  state.wheelVisible = true;
  wheelModal.classList.remove('hidden');
}

function closeWheel() {
  state.wheelVisible = false;
  wheelModal.classList.add('hidden');
}

function openKeyboard() {
  state.keyboardVisible = true;
  keyboardModal.classList.remove('hidden');
}

function closeKeyboard() {
  state.keyboardVisible = false;
  keyboardModal.classList.add('hidden');
}

function spinWheel() {
  if (state.spinning || state.solved) return;
  state.spinning = true;
  const turns = 1800 + Math.random() * 1800;
  state.angle += turns;
  canvas.style.transition = 'transform 4s cubic-bezier(0.2, 0.8, 0.2, 1)';
  canvas.style.transform = `rotate(${state.angle}deg)`;

  setTimeout(() => {
    state.spinning = false;
    const normalized = ((360 - (state.angle % 360)) + 22.5) % 360;
    const index = Math.floor(normalized / 45) % segments.length;
    const prize = segments[index];
    handlePrize(prize);
  }, 4000);
}

function handlePrize(prize) {
  if (prize.value === 'bankrupt') {
    state.score = 0;
    state.currentPrize = 0;
    resultLabel.textContent = 'Quiebra';
    resultHint.textContent = 'Pierdes todos los puntos';
    updateHud();
    closeWheel();
    return;
  }

  if (prize.value === 'lose') {
    state.currentPrize = 0;
    state.lives = Math.max(0, state.lives - 1);
    resultLabel.textContent = 'Pierdes turno';
    resultHint.textContent = 'Te quedas sin intento';
    updateHud();
    closeWheel();
    if (state.lives === 0) gameOver(false);
    return;
  }

  state.currentPrize = prize.value;
  resultLabel.textContent = `${prize.label} puntos por consonante`;
  resultHint.textContent = 'Elige una letra';
  updateHud();
  closeWheel();
  openKeyboard();
}

function renderKeyboard() {
  keyboardGrid.innerHTML = '';
  const letters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
  letters.forEach(letter => {
    const btn = document.createElement('button');
    btn.className = 'key';
    btn.textContent = letter;
    btn.disabled = state.puzzle?.guessed.has(letter);
    btn.addEventListener('click', () => guessLetter(letter));
    keyboardGrid.appendChild(btn);
  });
}

function guessLetter(letter) {
  if (!state.puzzle || state.solved) return;
  state.puzzle.guessed.add(letter);
  const phrase = state.puzzle.phrase;
  const matches = [...phrase].filter(char => char === letter).length;

  if (matches > 0) {
    state.score += matches * state.currentPrize;
    resultLabel.textContent = `La letra ${letter} aparece ${matches} veces`;
    resultHint.textContent = 'Puedes resolver o seguir jugando';
  } else {
    state.lives = Math.max(0, state.lives - 1);
    resultLabel.textContent = `La letra ${letter} no esta`;
    resultHint.textContent = 'Vuelve a girar la ruleta';
  }

  usedLetters.textContent = `Letras usadas: ${[...state.puzzle.guessed].join(', ')}`;
  renderBoard();
  renderKeyboard();
  updateHud();
  closeKeyboard();

  if (isSolved()) {
    gameOver(true);
  } else if (state.lives === 0) {
    gameOver(false);
  }
}

function isSolved() {
  return [...state.puzzle.phrase].every(char => char === ' ' || /[0-9]/.test(char) || state.puzzle.guessed.has(char));
}

function solveAttempt() {
  const answer = prompt('Escribe la frase completa');
  if (!answer) return;
  if (normalize(answer) === state.puzzle.phrase) {
    [...state.puzzle.phrase].forEach(char => {
      if (char !== ' ') state.puzzle.guessed.add(char);
    });
    renderBoard();
    gameOver(true);
  } else {
    state.lives = Math.max(0, state.lives - 1);
    resultLabel.textContent = 'No es correcto';
    resultHint.textContent = 'Pierdes una vida';
    updateHud();
    if (state.lives === 0) gameOver(false);
  }
}

function gameOver(win) {
  state.solved = true;
  closeWheel();
  closeKeyboard();
  if (win) {
    resultLabel.textContent = 'Has resuelto la frase';
    resultHint.textContent = 'Pulsa nueva ronda para seguir';
  } else {
    [...state.puzzle.phrase].forEach(char => {
      if (char !== ' ') state.puzzle.guessed.add(char);
    });
    renderBoard();
    resultLabel.textContent = 'Fin de la partida';
    resultHint.textContent = `La frase era: ${state.puzzle.phrase}`;
  }
}

document.getElementById('spinButton').addEventListener('click', () => {
  openWheel();
  spinWheel();
});

document.getElementById('solveButton').addEventListener('click', solveAttempt);
document.getElementById('nextButton').addEventListener('click', () => {
  state.lives = 3;
  pickPuzzle();
  updateHud();
});

drawWheel();
pickPuzzle();
updateHud();
