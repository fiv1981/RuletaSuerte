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
  { category: 'Películas', phrase: 'EL SECRETO DE SUS OJOS ABIERTOS' },
  { category: 'Películas', phrase: 'LA VIDA ES BELLA CADA MANANA' },
  { category: 'Películas', phrase: 'EL CLUB DE LOS POETAS MUERTOS' },
  { category: 'Películas', phrase: 'REGRESO AL FUTURO PARTE DOS' },
  { category: 'Películas', phrase: 'EN BUSCA DEL ARCA PERDIDA' },
  { category: 'Películas', phrase: 'ATRAPAME SI PUEDES ESTA VEZ' },
  { category: 'Películas', phrase: 'EL SILENCIO DE LOS CORDEROS' },
  { category: 'Películas', phrase: 'LA LISTA DE SCHINDLER COMPLETA' },
  { category: 'Películas', phrase: 'BAILANDO CON LOBOS TODA LA TARDE' },
  { category: 'Películas', phrase: 'CADENA PERPETUA EN LA MONTAÑA' },
  { category: 'Películas', phrase: 'EL NOMBRE DE LA ROSA ANTIGUA' },
  { category: 'Películas', phrase: 'LA HISTORIA INTERMINABLE SIN FINAL' },
  { category: 'Películas', phrase: 'PARQUE JURASICO BAJO LA LLUVIA' },
  { category: 'Películas', phrase: 'EL REY LEON EN LA SABANA' },
  { category: 'Películas', phrase: 'MISION IMPOSIBLE PROTOCOLO FANTASMA' },
  { category: 'Películas', phrase: 'MARY POPPINS VUELVE A CASA' },
  { category: 'Películas', phrase: 'CANTANDO BAJO LA LLUVIA FINA' },
  { category: 'Películas', phrase: 'LOS CAZAFANTASMAS EN NUEVA YORK' },
  { category: 'Películas', phrase: 'EL CASTILLO AMBULANTE EN LLAMAS' },
  { category: 'Películas', phrase: 'LA PRINCESA PROMETIDA PARA SIEMPRE' },
  { category: 'Películas', phrase: 'EL MAGO DE OZ Y SU CAMINO' },
  { category: 'Películas', phrase: 'PIRATAS DEL CARIBE MAR ABIERTO' },
  { category: 'Películas', phrase: 'EDUARDO MANOSTIJERAS EN INVIERNO' },
  { category: 'Películas', phrase: 'LA BELLA Y LA BESTIA ENCANTADA' },
  { category: 'Películas', phrase: 'BUSCANDO A NEMO BAJO EL MAR' },
  { category: 'Películas', phrase: 'TOY STORY EN EL VIEJO DESVAN' },
  { category: 'Películas', phrase: 'ALADDIN Y LA LAMPARA MAGICA' },
  { category: 'Películas', phrase: 'MULAN EN EL CAMPO DE BATALLA' },
  { category: 'Películas', phrase: 'HARRY POTTER Y EL CALIZ' },
  { category: 'Películas', phrase: 'EL LABERINTO DEL FAUNO OSCURO' },
  { category: 'Películas', phrase: 'CASABLANCA BAJO EL HUMO BLANCO' },
  { category: 'Películas', phrase: 'DESAYUNO CON DIAMANTES AL AMANECER' },
  { category: 'Películas', phrase: 'CINE PARADISO EN LA PLAZA' },
  { category: 'Películas', phrase: 'LA GRAN EVASION BAJO TIERRA' },
  { category: 'Películas', phrase: 'ROBIN HOOD PRINCIPE DE LADRONES' },
  { category: 'Películas', phrase: 'UN PEZ LLAMADO WANDA EN LONDRES' },
  { category: 'Películas', phrase: 'SINGIN IN THE RAIN BAJO FAROLES' },
  { category: 'Películas', phrase: 'EL PADRINO EN LA SOMBRA' },
  { category: 'Películas', phrase: 'UNA NOCHE EN LA OPERA ANTIGUA' },
  { category: 'Películas', phrase: 'SONRISAS Y LAGRIMAS EN LA COLINA' },
  { category: 'Series', phrase: 'LA CASA DE PAPEL EN MADRID' },
  { category: 'Series', phrase: 'COMO CONOCI A VUESTRA MADRE' },
  { category: 'Series', phrase: 'JUEGO DE TRONOS EN PONIENTE' },
  { category: 'Series', phrase: 'LOS SIMPSON EN SPRINGFIELD' },
  { category: 'Series', phrase: 'THE BIG BANG THEORY COMPLETA' },
  { category: 'Series', phrase: 'A DOS METROS BAJO TIERRA' },
  { category: 'Series', phrase: 'LA QUE SE AVECINA EN MONTEPINAR' },
  { category: 'Series', phrase: 'COSAS MAS EXTRAÑAS EN HAWKINS' },
  { category: 'Series', phrase: 'EL CUENTO DE LA CRIADA ROJA' },
  { category: 'Series', phrase: 'MODERN FAMILY DE VIAJE JUNTOS' },
  { category: 'Series', phrase: 'FRIENDS EN EL CENTRAL PERK' },
  { category: 'Series', phrase: 'ANATOMIA DE GREY EN SEATTLE' },
  { category: 'Series', phrase: 'PERDIDOS EN UNA ISLA REMOTA' },
  { category: 'Series', phrase: 'BREAKING BAD EN EL DESIERTO' },
  { category: 'Series', phrase: 'BETTER CALL SAUL EN ALBUQUERQUE' },
  { category: 'Series', phrase: 'HOUSE M D EN EL HOSPITAL' },
  { category: 'Series', phrase: 'EL PRINCIPE DE BEL AIR' },
  { category: 'Series', phrase: 'COMISARIO MONTALBANO FRENTE AL MAR' },
  { category: 'Series', phrase: 'PEAKY BLINDERS EN BIRMINGHAM' },
  { category: 'Series', phrase: 'LOS BRIDGERTON EN EL BAILE' },
  { category: 'Series', phrase: 'OUTLANDER ENTRE DOS SIGLOS' },
  { category: 'Series', phrase: 'VIKINGOS HACIA TIERRAS LEJANAS' },
  { category: 'Series', phrase: 'NARCOS EN LA CIUDAD AMURALLADA' },
  { category: 'Series', phrase: 'THE CROWN DENTRO DEL PALACIO' },
  { category: 'Series', phrase: 'MACHOS ALFA EN MADRID CENTRO' },
  { category: 'Series', phrase: 'TED LASSO EN RICHMOND PARK' },
  { category: 'Series', phrase: 'SEPARATION EN LA OFICINA BLANCA' },
  { category: 'Series', phrase: 'TRUE DETECTIVE ENTRE PANTANOS' },
  { category: 'Series', phrase: 'THE OFFICE EN SCRANTON SIEMPRE' },
  { category: 'Series', phrase: 'EL MINISTERIO DEL TIEMPO' },
  { category: 'Series', phrase: 'THE MANDALORIAN EN LA GALAXIA' },
  { category: 'Series', phrase: 'WEDNESDAY EN LA ACADEMIA' },
  { category: 'Series', phrase: 'COBRA KAI EN EL DOJO' },
  { category: 'Series', phrase: 'STRANGER THINGS EN HALLOWEEN' },
  { category: 'Series', phrase: 'LOS SOPRANO EN NUEVA JERSEY' },
  { category: 'Series', phrase: 'SUCCESSION EN LA TORRE ALTA' },
  { category: 'Series', phrase: 'BLACK MIRROR FRENTE A PANTALLAS' },
  { category: 'Series', phrase: 'SHERLOCK EN BAKER STREET' },
  { category: 'Series', phrase: 'DOWNTON ABBEY EN LA CAMPINA' },
  { category: 'Series', phrase: 'LOS HOMBRES DE PACO' },
  { category: 'Música', phrase: 'LA CHICA DE AYER EN MI BARRIO' },
  { category: 'Música', phrase: 'VIVIR ASI ES MORIR DE AMOR' },
  { category: 'Música', phrase: 'DEVUELVEME A MI CHICA AHORA' },
  { category: 'Música', phrase: 'BOHEMIAN RHAPSODY EN DIRECTO' },
  { category: 'Música', phrase: 'ENTRE DOS TIERRAS Y VIENTO' },
  { category: 'Música', phrase: 'WE WILL ROCK YOU SIN DESCANSO' },
  { category: 'Música', phrase: 'CORAZON PARTIO BAJO LA LLUVIA' },
  { category: 'Música', phrase: 'MEDITERRANEO AL ATARDECER' },
  { category: 'Música', phrase: 'NO PUEDO VIVIR SIN TI' },
  { category: 'Música', phrase: 'BESO LENTO BAJO LAS ESTRELLAS' },
  { category: 'Música', phrase: 'BAILANDO EN LA COCINA VACIA' },
  { category: 'Música', phrase: 'HEROES DEL SILENCIO EN DIRECTO' },
  { category: 'Música', phrase: 'BONITA COMO UNA ROSA BLANCA' },
  { category: 'Música', phrase: 'ZAPATOS NUEVOS SOBRE EL ASFALTO' },
  { category: 'Música', phrase: 'QUIERO TENER TU PRESENCIA CERCA' },
  { category: 'Música', phrase: 'LA FUERZA DEL DESTINO LLAMA' },
  { category: 'Música', phrase: 'ES POR TI TODA LA VIDA' },
  { category: 'Música', phrase: 'COLOR ESPERANZA PARA MANANA' },
  { category: 'Música', phrase: 'MI GRAN NOCHE EN LA RADIO' },
  { category: 'Música', phrase: 'CAMINANDO POR LA VIDA DESPACIO' },
  { category: 'Música', phrase: 'VUELVE PRONTO ANTES DEL ALBA' },
  { category: 'Música', phrase: 'TE DEJO MADRID POR UN TIEMPO' },
  { category: 'Música', phrase: 'Y NOS DIERON LAS DIEZ' },
  { category: 'Música', phrase: 'QUE NADIE SEPA MI SUFRIR' },
  { category: 'Música', phrase: 'MALDITA PRIMAVERA EN ABRIL' },
  { category: 'Música', phrase: 'COSTUMBRES ARGENTINAS DE BARRIO' },
  { category: 'Música', phrase: 'LAGRIMAS NEGRAS JUNTO AL RIO' },
  { category: 'Música', phrase: '20 DE ABRIL DEL NOVENTA' },
  { category: 'Música', phrase: 'Y COMO ES EL POR DENTRO' },
  { category: 'Música', phrase: 'LA FLACA CRUZA LA PLAZA' },
  { category: 'Música', phrase: 'EN ALGUN LUGAR MUY LEJANO' },
  { category: 'Música', phrase: 'RAYANDO EL SOL EN AGOSTO' },
  { category: 'Música', phrase: 'CLAVADO EN UN BAR VACIO' },
  { category: 'Música', phrase: 'DE MUSICA LIGERA EN VIVO' },
  { category: 'Música', phrase: 'PONGAMOS QUE HABLO DE MADRID' },
  { category: 'Música', phrase: 'HABLANDO A TU CORAZON ABIERTO' },
  { category: 'Música', phrase: 'PARA NO VERTE MAS NUNCA' },
  { category: 'Música', phrase: 'DURMIENDO SOLA A ORILLAS DEL MAR' },
  { category: 'Música', phrase: 'LA BILIRRUBINA SIGUE SUBIENDO' },
  { category: 'Música', phrase: 'MI AGUA SALADA SABE A SUR' },
  { category: 'Lugares', phrase: 'PLAZA MAYOR DE MADRID AL ANOCHECER' },
  { category: 'Lugares', phrase: 'GRAN VIA DE MADRID ILUMINADA' },
  { category: 'Lugares', phrase: 'ALHAMBRA DE GRANADA EN PRIMAVERA' },
  { category: 'Lugares', phrase: 'PARQUE NACIONAL DE ORDESA NEVADO' },
  { category: 'Lugares', phrase: 'PUENTE DE BROOKLYN AL AMANECER' },
  { category: 'Lugares', phrase: 'MUSEO DEL PRADO EN SILENCIO' },
  { category: 'Lugares', phrase: 'CENTRAL PARK EN OTONO DORADO' },
  { category: 'Lugares', phrase: 'MURALLA CHINA ENTRE MONTAÑAS' },
  { category: 'Lugares', phrase: 'MONTE FUJI TRAS LAS NUBES' },
  { category: 'Lugares', phrase: 'TORRE EIFFEL BRILLANDO DE NOCHE' },
  { category: 'Lugares', phrase: 'PLAYA DE LA CONCHA EN CALMA' },
  { category: 'Lugares', phrase: 'TEATRO ROMANO DE MERIDA' },
  { category: 'Lugares', phrase: 'ACUEDUCTO DE SEGOVIA EN PIEDRA' },
  { category: 'Lugares', phrase: 'CATEDRAL DE SANTIAGO AL FONDO' },
  { category: 'Lugares', phrase: 'VALLE DEL JERTE EN FLOR' },
  { category: 'Lugares', phrase: 'PLAZA DE ESPANA EN SEVILLA' },
  { category: 'Lugares', phrase: 'RIO DUERO ENTRE VINEDOS' },
  { category: 'Lugares', phrase: 'COSTA BRAVA SOBRE EL MEDITERRANEO' },
  { category: 'Lugares', phrase: 'LAGO DI COMO AL ATARDECER' },
  { category: 'Lugares', phrase: 'COLISEO ROMANO BAJO EL SOL' },
  { category: 'Lugares', phrase: 'MACHU PICCHU ENTRE LA NIEBLA' },
  { category: 'Lugares', phrase: 'ISLA DE SANTORINI EN BLANCO' },
  { category: 'Lugares', phrase: 'TIMES SQUARE LLENA DE LUCES' },
  { category: 'Lugares', phrase: 'PUERTA DE ALCALA EN MADRID' },
  { category: 'Lugares', phrase: 'PALACIO REAL DE ARANJUEZ' },
  { category: 'Lugares', phrase: 'CALA MACARELLA AGUA TURQUESA' },
  { category: 'Lugares', phrase: 'SIERRA NEVADA CUBIERTA DE NIEVE' },
  { category: 'Lugares', phrase: 'PARQUE GUELL SOBRE BARCELONA' },
  { category: 'Lugares', phrase: 'BOSQUE DE IRATI EN OTONO' },
  { category: 'Lugares', phrase: 'PICOS DE EUROPA ENTRE NUBES' },
  { category: 'Lugares', phrase: 'RIO SENA BAJO LOS PUENTES' },
  { category: 'Lugares', phrase: 'CINQUE TERRE FRENTE AL MAR' },
  { category: 'Lugares', phrase: 'PLAZA SAN MARCOS DE VENECIA' },
  { category: 'Lugares', phrase: 'MUSEO GUGGENHEIM DE BILBAO' },
  { category: 'Lugares', phrase: 'MONASTERIO DE PIEDRA Y CASCADAS' },
  { category: 'Lugares', phrase: 'CAMPANARIO DE PISA INCLINADO' },
  { category: 'Lugares', phrase: 'VALLE SAGRADO DE LOS INCAS' },
  { category: 'Lugares', phrase: 'PASEO DE RECOLETOS EN OTONO' },
  { category: 'Lugares', phrase: 'TEMPLO DE DEBOD AL ATARDECER' },
  { category: 'Lugares', phrase: 'TORRES DEL PAINE EN SILENCIO' },
  { category: 'Expresiones', phrase: 'A QUIEN MADRUGA DIOS LE AYUDA' },
  { category: 'Expresiones', phrase: 'MAS VALE TARDE QUE NUNCA' },
  { category: 'Expresiones', phrase: 'AL MAL TIEMPO BUENA CARA' },
  { category: 'Expresiones', phrase: 'NO HAY MAL QUE POR BIEN NO VENGA' },
  { category: 'Expresiones', phrase: 'MUCHO RUIDO Y POCAS NUECES' },
  { category: 'Expresiones', phrase: 'A PALABRAS NECIAS OIDOS SORDOS' },
  { category: 'Expresiones', phrase: 'EL HABITO NO HACE AL MONJE' },
  { category: 'Expresiones', phrase: 'CUANDO EL RIO SUENA AGUA LLEVA' },
  { category: 'Expresiones', phrase: 'NUNCA ES TARDE SI LA DICHA ES BUENA' },
  { category: 'Expresiones', phrase: 'EN CASA DEL HERRERO CUCHILLO DE PALO' },
  { category: 'Expresiones', phrase: 'NO DEJES PARA MANANA LO DE HOY' },
  { category: 'Expresiones', phrase: 'AL QUE MADRUGA TODO LE LLEGA' },
  { category: 'Expresiones', phrase: 'QUIEN TIENE UN AMIGO TIENE UN TESORO' },
  { category: 'Expresiones', phrase: 'DEL DICHO AL HECHO HAY TRECHO' },
  { category: 'Expresiones', phrase: 'EL QUE LA SIGUE LA CONSIGUE' },
  { category: 'Expresiones', phrase: 'A CABALLO REGALADO NO LE MIRES EL DIENTE' },
  { category: 'Expresiones', phrase: 'DIME CON QUIEN ANDAS Y TE DIRE QUIEN ERES' },
  { category: 'Expresiones', phrase: 'NO TODO LO QUE BRILLA ES ORO' },
  { category: 'Expresiones', phrase: 'ZAPATERO A TUS ZAPATOS SIEMPRE' },
  { category: 'Expresiones', phrase: 'METERSE EN CAMISA DE ONCE VARAS' },
  { category: 'Expresiones', phrase: 'EN BOCA CERRADA NO ENTRAN MOSCAS' },
  { category: 'Expresiones', phrase: 'QUIEN MUCHO ABARCA POCO APRIETA' },
  { category: 'Expresiones', phrase: 'OJOS QUE NO VEN CORAZON QUE NO SIENTE' },
  { category: 'Expresiones', phrase: 'EL MUNDO ES UN PANUELO PEQUENO' },
  { category: 'Expresiones', phrase: 'A BUEN HAMBRE NO HAY MAL PAN' },
  { category: 'Expresiones', phrase: 'CONTIGO PAN Y CEBOLLA SIEMPRE' },
  { category: 'Expresiones', phrase: 'NO SE GANO ZAMORA EN UNA HORA' },
  { category: 'Expresiones', phrase: 'DE TAL PALO TAL ASTILLA' },
  { category: 'Expresiones', phrase: 'EL SABER NO OCUPA LUGAR' },
  { category: 'Expresiones', phrase: 'HABLAR POR LOS CODOS SIN PARAR' },
  { category: 'Expresiones', phrase: 'SER UÑA Y CARNE TODA LA VIDA' },
  { category: 'Expresiones', phrase: 'QUEDARSE EN BLANCO ANTE TODOS' },
  { category: 'Expresiones', phrase: 'TENER LA SARTEN POR EL MANGO' },
  { category: 'Expresiones', phrase: 'IRSE POR LAS RAMAS DEMASIADO' },
  { category: 'Expresiones', phrase: 'ESTAR ENTRE LA ESPADA Y LA PARED' },
  { category: 'Expresiones', phrase: 'TENER POCAS LUCES ESTA TARDE' },
  { category: 'Expresiones', phrase: 'ESTAR EN LAS NUBES TODO EL DIA' },
  { category: 'Expresiones', phrase: 'LLAMAR AL PAN PAN Y AL VINO VINO' },
  { category: 'Expresiones', phrase: 'PONERSE LAS PILAS DESDE TEMPRANO' },
  { category: 'Expresiones', phrase: 'SACAR LAS CASTANAS DEL FUEGO' }
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
  const normalized = ((-state.angle - Math.PI / 2) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
  const index = Math.round(normalized / slice) % segments.length;
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
document.getElementById('openKeyboardBtn').addEventListener('click', () => {
  if (state.solved) return;
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
window.addEventListener('resize', updateUI);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

pickPuzzle();
