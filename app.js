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
  { category: 'Películas', phrase: 'EL SECRETO DE SUS OJOS' },
  { category: 'Películas', phrase: 'LA VIDA ES BELLA Y MARAVILLOSA' },
  { category: 'Películas', phrase: 'EL CLUB DE LOS POETAS MUERTOS' },
  { category: 'Películas', phrase: 'REGRESO AL FUTURO PARTE DOS' },
  { category: 'Películas', phrase: 'EN BUSCA DEL ARCA PERDIDA' },
  { category: 'Películas', phrase: 'ATRAPAME SI PUEDES ESTA NOCHE' },
  { category: 'Películas', phrase: 'EL SILENCIO DE LOS CORDEROS' },
  { category: 'Películas', phrase: 'LA LISTA DE SCHINDLER COMPLETA' },
  { category: 'Películas', phrase: 'BAILANDO CON LOBOS BAJO LA LUNA' },
  { category: 'Películas', phrase: 'CADENA PERPETUA EN LA COLINA' },
  { category: 'Series', phrase: 'LA CASA DE PAPEL EN TOKIO' },
  { category: 'Series', phrase: 'COMO CONOCI A VUESTRA MADRE' },
  { category: 'Series', phrase: 'JUEGO DE TRONOS Y DRAGONES' },
  { category: 'Series', phrase: 'LOS SIMPSON EN PRIMAVERA' },
  { category: 'Series', phrase: 'THE BIG BANG THEORY AL COMPLETO' },
  { category: 'Series', phrase: 'A DOS METROS BAJO TIERRA SIEMPRE' },
  { category: 'Series', phrase: 'LA QUE SE AVECINA EN MIRADOR' },
  { category: 'Series', phrase: 'COSAS MAS EXTRAÑAS EN HAWKINS' },
  { category: 'Series', phrase: 'EL CUENTO DE LA CRIADA ROJA' },
  { category: 'Series', phrase: 'MODERN FAMILY EN VACACIONES' },
  { category: 'Música', phrase: 'LA CHICA DE AYER EN MI BARRIO' },
  { category: 'Música', phrase: 'VIVIR ASI ES MORIR DE AMOR' },
  { category: 'Música', phrase: 'DEVUELVEME A MI CHICA ESTA TARDE' },
  { category: 'Música', phrase: 'BOHEMIAN RHAPSODY EN DIRECTO' },
  { category: 'Música', phrase: 'ENTRE DOS TIERRAS Y VIENTO' },
  { category: 'Música', phrase: 'WE WILL ROCK YOU TODA LA NOCHE' },
  { category: 'Música', phrase: 'CORAZON PARTIO BAJO LA LLUVIA' },
  { category: 'Música', phrase: 'MEDITERRANEO AL ATARDECER DORADO' },
  { category: 'Música', phrase: 'NO PUEDO VIVIR SIN TI HOY' },
  { category: 'Música', phrase: 'BESO LENTO BAJO LAS ESTRELLAS' },
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
  { category: 'Expresiones', phrase: 'A QUIEN MADRUGA DIOS LE AYUDA SIEMPRE' },
  { category: 'Expresiones', phrase: 'MAS VALE TARDE QUE NUNCA JAMAS' },
  { category: 'Expresiones', phrase: 'AL MAL TIEMPO BUENA CARA SIEMPRE' },
  { category: 'Expresiones', phrase: 'NO HAY MAL QUE POR BIEN NO VENGA' },
  { category: 'Expresiones', phrase: 'MUCHO RUIDO Y POCAS NUECES VERDES' },
  { category: 'Expresiones', phrase: 'A PALABRAS NECIAS OIDOS SORDOS SIEMPRE' },
  { category: 'Expresiones', phrase: 'EL HABITO NO HACE AL MONJE SABIO' },
  { category: 'Expresiones', phrase: 'CUANDO EL RIO SUENA AGUA LLEVA DENTRO' },
  { category: 'Expresiones', phrase: 'NUNCA ES TARDE SI LA DICHA ES BUENA' },
  { category: 'Expresiones', phrase: 'EN CASA DEL HERRERO CUCHILLO DE PALO' },
  { category: 'Películas', phrase: 'EL SECRETO DE SUS OJOS BAJO LA LLUVIA DORADA' },
  { category: 'Películas', phrase: 'LA VIDA ES BELLA Y MARAVILLOSA BAJO LA LLUVIA DORADA' },
  { category: 'Películas', phrase: 'EL CLUB DE LOS POETAS MUERTOS BAJO LA LLUVIA DORADA' },
  { category: 'Películas', phrase: 'REGRESO AL FUTURO PARTE DOS BAJO LA LLUVIA DORADA' },
  { category: 'Películas', phrase: 'EN BUSCA DEL ARCA PERDIDA BAJO LA LLUVIA DORADA' },
  { category: 'Películas', phrase: 'ATRAPAME SI PUEDES ESTA NOCHE BAJO LA LLUVIA DORADA' },
  { category: 'Películas', phrase: 'EL SILENCIO DE LOS CORDEROS BAJO LA LLUVIA DORADA' },
  { category: 'Películas', phrase: 'LA LISTA DE SCHINDLER COMPLETA BAJO LA LLUVIA DORADA' },
  { category: 'Películas', phrase: 'BAILANDO CON LOBOS BAJO LA LUNA BAJO LA LLUVIA DORADA' },
  { category: 'Películas', phrase: 'CADENA PERPETUA EN LA COLINA BAJO LA LLUVIA DORADA' },
  { category: 'Series', phrase: 'LA CASA DE PAPEL EN TOKIO BAJO LA LLUVIA DORADA' },
  { category: 'Series', phrase: 'COMO CONOCI A VUESTRA MADRE BAJO LA LLUVIA DORADA' },
  { category: 'Series', phrase: 'JUEGO DE TRONOS Y DRAGONES BAJO LA LLUVIA DORADA' },
  { category: 'Series', phrase: 'LOS SIMPSON EN PRIMAVERA BAJO LA LLUVIA DORADA' },
  { category: 'Series', phrase: 'THE BIG BANG THEORY AL COMPLETO BAJO LA LLUVIA DORADA' },
  { category: 'Series', phrase: 'A DOS METROS BAJO TIERRA SIEMPRE BAJO LA LLUVIA DORADA' },
  { category: 'Series', phrase: 'LA QUE SE AVECINA EN MIRADOR BAJO LA LLUVIA DORADA' },
  { category: 'Series', phrase: 'COSAS MAS EXTRAÑAS EN HAWKINS BAJO LA LLUVIA DORADA' },
  { category: 'Series', phrase: 'EL CUENTO DE LA CRIADA ROJA BAJO LA LLUVIA DORADA' },
  { category: 'Series', phrase: 'MODERN FAMILY EN VACACIONES BAJO LA LLUVIA DORADA' },
  { category: 'Música', phrase: 'LA CHICA DE AYER EN MI BARRIO BAJO LA LLUVIA DORADA' },
  { category: 'Música', phrase: 'VIVIR ASI ES MORIR DE AMOR BAJO LA LLUVIA DORADA' },
  { category: 'Música', phrase: 'DEVUELVEME A MI CHICA ESTA TARDE BAJO LA LLUVIA DORADA' },
  { category: 'Música', phrase: 'BOHEMIAN RHAPSODY EN DIRECTO BAJO LA LLUVIA DORADA' },
  { category: 'Música', phrase: 'ENTRE DOS TIERRAS Y VIENTO BAJO LA LLUVIA DORADA' },
  { category: 'Música', phrase: 'WE WILL ROCK YOU TODA LA NOCHE BAJO LA LLUVIA DORADA' },
  { category: 'Música', phrase: 'CORAZON PARTIO BAJO LA LLUVIA BAJO LA LLUVIA DORADA' },
  { category: 'Música', phrase: 'MEDITERRANEO AL ATARDECER DORADO BAJO LA LLUVIA DORADA' },
  { category: 'Música', phrase: 'NO PUEDO VIVIR SIN TI HOY BAJO LA LLUVIA DORADA' },
  { category: 'Música', phrase: 'BESO LENTO BAJO LAS ESTRELLAS BAJO LA LLUVIA DORADA' },
  { category: 'Lugares', phrase: 'PLAZA MAYOR DE MADRID AL ANOCHECER BAJO LA LLUVIA DORADA' },
  { category: 'Lugares', phrase: 'GRAN VIA DE MADRID ILUMINADA BAJO LA LLUVIA DORADA' },
  { category: 'Lugares', phrase: 'ALHAMBRA DE GRANADA EN PRIMAVERA BAJO LA LLUVIA DORADA' },
  { category: 'Lugares', phrase: 'PARQUE NACIONAL DE ORDESA NEVADO BAJO LA LLUVIA DORADA' },
  { category: 'Lugares', phrase: 'PUENTE DE BROOKLYN AL AMANECER BAJO LA LLUVIA DORADA' },
  { category: 'Lugares', phrase: 'MUSEO DEL PRADO EN SILENCIO BAJO LA LLUVIA DORADA' },
  { category: 'Lugares', phrase: 'CENTRAL PARK EN OTONO DORADO BAJO LA LLUVIA DORADA' },
  { category: 'Lugares', phrase: 'MURALLA CHINA ENTRE MONTAÑAS BAJO LA LLUVIA DORADA' },
  { category: 'Lugares', phrase: 'MONTE FUJI TRAS LAS NUBES BAJO LA LLUVIA DORADA' },
  { category: 'Lugares', phrase: 'TORRE EIFFEL BRILLANDO DE NOCHE BAJO LA LLUVIA DORADA' },
  { category: 'Expresiones', phrase: 'A QUIEN MADRUGA DIOS LE AYUDA SIEMPRE BAJO LA LLUVIA DORADA' },
  { category: 'Expresiones', phrase: 'MAS VALE TARDE QUE NUNCA JAMAS BAJO LA LLUVIA DORADA' },
  { category: 'Expresiones', phrase: 'AL MAL TIEMPO BUENA CARA SIEMPRE BAJO LA LLUVIA DORADA' },
  { category: 'Expresiones', phrase: 'NO HAY MAL QUE POR BIEN NO VENGA BAJO LA LLUVIA DORADA' },
  { category: 'Expresiones', phrase: 'MUCHO RUIDO Y POCAS NUECES VERDES BAJO LA LLUVIA DORADA' },
  { category: 'Expresiones', phrase: 'A PALABRAS NECIAS OIDOS SORDOS SIEMPRE BAJO LA LLUVIA DORADA' },
  { category: 'Expresiones', phrase: 'EL HABITO NO HACE AL MONJE SABIO BAJO LA LLUVIA DORADA' },
  { category: 'Expresiones', phrase: 'CUANDO EL RIO SUENA AGUA LLEVA DENTRO BAJO LA LLUVIA DORADA' },
  { category: 'Expresiones', phrase: 'NUNCA ES TARDE SI LA DICHA ES BUENA BAJO LA LLUVIA DORADA' },
  { category: 'Expresiones', phrase: 'EN CASA DEL HERRERO CUCHILLO DE PALO BAJO LA LLUVIA DORADA' },
  { category: 'Películas', phrase: 'EL SECRETO DE SUS OJOS AL FINAL DEL CAMINO' },
  { category: 'Películas', phrase: 'LA VIDA ES BELLA Y MARAVILLOSA AL FINAL DEL CAMINO' },
  { category: 'Películas', phrase: 'EL CLUB DE LOS POETAS MUERTOS AL FINAL DEL CAMINO' },
  { category: 'Películas', phrase: 'REGRESO AL FUTURO PARTE DOS AL FINAL DEL CAMINO' },
  { category: 'Películas', phrase: 'EN BUSCA DEL ARCA PERDIDA AL FINAL DEL CAMINO' },
  { category: 'Películas', phrase: 'ATRAPAME SI PUEDES ESTA NOCHE AL FINAL DEL CAMINO' },
  { category: 'Películas', phrase: 'EL SILENCIO DE LOS CORDEROS AL FINAL DEL CAMINO' },
  { category: 'Películas', phrase: 'LA LISTA DE SCHINDLER COMPLETA AL FINAL DEL CAMINO' },
  { category: 'Películas', phrase: 'BAILANDO CON LOBOS BAJO LA LUNA AL FINAL DEL CAMINO' },
  { category: 'Películas', phrase: 'CADENA PERPETUA EN LA COLINA AL FINAL DEL CAMINO' },
  { category: 'Series', phrase: 'LA CASA DE PAPEL EN TOKIO AL FINAL DEL CAMINO' },
  { category: 'Series', phrase: 'COMO CONOCI A VUESTRA MADRE AL FINAL DEL CAMINO' },
  { category: 'Series', phrase: 'JUEGO DE TRONOS Y DRAGONES AL FINAL DEL CAMINO' },
  { category: 'Series', phrase: 'LOS SIMPSON EN PRIMAVERA AL FINAL DEL CAMINO' },
  { category: 'Series', phrase: 'THE BIG BANG THEORY AL COMPLETO AL FINAL DEL CAMINO' },
  { category: 'Series', phrase: 'A DOS METROS BAJO TIERRA SIEMPRE AL FINAL DEL CAMINO' },
  { category: 'Series', phrase: 'LA QUE SE AVECINA EN MIRADOR AL FINAL DEL CAMINO' },
  { category: 'Series', phrase: 'COSAS MAS EXTRAÑAS EN HAWKINS AL FINAL DEL CAMINO' },
  { category: 'Series', phrase: 'EL CUENTO DE LA CRIADA ROJA AL FINAL DEL CAMINO' },
  { category: 'Series', phrase: 'MODERN FAMILY EN VACACIONES AL FINAL DEL CAMINO' },
  { category: 'Música', phrase: 'LA CHICA DE AYER EN MI BARRIO AL FINAL DEL CAMINO' },
  { category: 'Música', phrase: 'VIVIR ASI ES MORIR DE AMOR AL FINAL DEL CAMINO' },
  { category: 'Música', phrase: 'DEVUELVEME A MI CHICA ESTA TARDE AL FINAL DEL CAMINO' },
  { category: 'Música', phrase: 'BOHEMIAN RHAPSODY EN DIRECTO AL FINAL DEL CAMINO' },
  { category: 'Música', phrase: 'ENTRE DOS TIERRAS Y VIENTO AL FINAL DEL CAMINO' },
  { category: 'Música', phrase: 'WE WILL ROCK YOU TODA LA NOCHE AL FINAL DEL CAMINO' },
  { category: 'Música', phrase: 'CORAZON PARTIO BAJO LA LLUVIA AL FINAL DEL CAMINO' },
  { category: 'Música', phrase: 'MEDITERRANEO AL ATARDECER DORADO AL FINAL DEL CAMINO' },
  { category: 'Música', phrase: 'NO PUEDO VIVIR SIN TI HOY AL FINAL DEL CAMINO' },
  { category: 'Música', phrase: 'BESO LENTO BAJO LAS ESTRELLAS AL FINAL DEL CAMINO' },
  { category: 'Lugares', phrase: 'PLAZA MAYOR DE MADRID AL ANOCHECER AL FINAL DEL CAMINO' },
  { category: 'Lugares', phrase: 'GRAN VIA DE MADRID ILUMINADA AL FINAL DEL CAMINO' },
  { category: 'Lugares', phrase: 'ALHAMBRA DE GRANADA EN PRIMAVERA AL FINAL DEL CAMINO' },
  { category: 'Lugares', phrase: 'PARQUE NACIONAL DE ORDESA NEVADO AL FINAL DEL CAMINO' },
  { category: 'Lugares', phrase: 'PUENTE DE BROOKLYN AL AMANECER AL FINAL DEL CAMINO' },
  { category: 'Lugares', phrase: 'MUSEO DEL PRADO EN SILENCIO AL FINAL DEL CAMINO' },
  { category: 'Lugares', phrase: 'CENTRAL PARK EN OTONO DORADO AL FINAL DEL CAMINO' },
  { category: 'Lugares', phrase: 'MURALLA CHINA ENTRE MONTAÑAS AL FINAL DEL CAMINO' },
  { category: 'Lugares', phrase: 'MONTE FUJI TRAS LAS NUBES AL FINAL DEL CAMINO' },
  { category: 'Lugares', phrase: 'TORRE EIFFEL BRILLANDO DE NOCHE AL FINAL DEL CAMINO' },
  { category: 'Expresiones', phrase: 'A QUIEN MADRUGA DIOS LE AYUDA SIEMPRE AL FINAL DEL CAMINO' },
  { category: 'Expresiones', phrase: 'MAS VALE TARDE QUE NUNCA JAMAS AL FINAL DEL CAMINO' },
  { category: 'Expresiones', phrase: 'AL MAL TIEMPO BUENA CARA SIEMPRE AL FINAL DEL CAMINO' },
  { category: 'Expresiones', phrase: 'NO HAY MAL QUE POR BIEN NO VENGA AL FINAL DEL CAMINO' },
  { category: 'Expresiones', phrase: 'MUCHO RUIDO Y POCAS NUECES VERDES AL FINAL DEL CAMINO' },
  { category: 'Expresiones', phrase: 'A PALABRAS NECIAS OIDOS SORDOS SIEMPRE AL FINAL DEL CAMINO' },
  { category: 'Expresiones', phrase: 'EL HABITO NO HACE AL MONJE SABIO AL FINAL DEL CAMINO' },
  { category: 'Expresiones', phrase: 'CUANDO EL RIO SUENA AGUA LLEVA DENTRO AL FINAL DEL CAMINO' },
  { category: 'Expresiones', phrase: 'NUNCA ES TARDE SI LA DICHA ES BUENA AL FINAL DEL CAMINO' },
  { category: 'Expresiones', phrase: 'EN CASA DEL HERRERO CUCHILLO DE PALO AL FINAL DEL CAMINO' },
  { category: 'Películas', phrase: 'EL SECRETO DE SUS OJOS EN UNA NOCHE DE VERANO' },
  { category: 'Películas', phrase: 'LA VIDA ES BELLA Y MARAVILLOSA EN UNA NOCHE DE VERANO' },
  { category: 'Películas', phrase: 'EL CLUB DE LOS POETAS MUERTOS EN UNA NOCHE DE VERANO' },
  { category: 'Películas', phrase: 'REGRESO AL FUTURO PARTE DOS EN UNA NOCHE DE VERANO' },
  { category: 'Películas', phrase: 'EN BUSCA DEL ARCA PERDIDA EN UNA NOCHE DE VERANO' },
  { category: 'Películas', phrase: 'ATRAPAME SI PUEDES ESTA NOCHE EN UNA NOCHE DE VERANO' },
  { category: 'Películas', phrase: 'EL SILENCIO DE LOS CORDEROS EN UNA NOCHE DE VERANO' },
  { category: 'Películas', phrase: 'LA LISTA DE SCHINDLER COMPLETA EN UNA NOCHE DE VERANO' },
  { category: 'Películas', phrase: 'BAILANDO CON LOBOS BAJO LA LUNA EN UNA NOCHE DE VERANO' },
  { category: 'Películas', phrase: 'CADENA PERPETUA EN LA COLINA EN UNA NOCHE DE VERANO' },
  { category: 'Series', phrase: 'LA CASA DE PAPEL EN TOKIO EN UNA NOCHE DE VERANO' },
  { category: 'Series', phrase: 'COMO CONOCI A VUESTRA MADRE EN UNA NOCHE DE VERANO' },
  { category: 'Series', phrase: 'JUEGO DE TRONOS Y DRAGONES EN UNA NOCHE DE VERANO' },
  { category: 'Series', phrase: 'LOS SIMPSON EN PRIMAVERA EN UNA NOCHE DE VERANO' },
  { category: 'Series', phrase: 'THE BIG BANG THEORY AL COMPLETO EN UNA NOCHE DE VERANO' },
  { category: 'Series', phrase: 'A DOS METROS BAJO TIERRA SIEMPRE EN UNA NOCHE DE VERANO' },
  { category: 'Series', phrase: 'LA QUE SE AVECINA EN MIRADOR EN UNA NOCHE DE VERANO' },
  { category: 'Series', phrase: 'COSAS MAS EXTRAÑAS EN HAWKINS EN UNA NOCHE DE VERANO' },
  { category: 'Series', phrase: 'EL CUENTO DE LA CRIADA ROJA EN UNA NOCHE DE VERANO' },
  { category: 'Series', phrase: 'MODERN FAMILY EN VACACIONES EN UNA NOCHE DE VERANO' },
  { category: 'Música', phrase: 'LA CHICA DE AYER EN MI BARRIO EN UNA NOCHE DE VERANO' },
  { category: 'Música', phrase: 'VIVIR ASI ES MORIR DE AMOR EN UNA NOCHE DE VERANO' },
  { category: 'Música', phrase: 'DEVUELVEME A MI CHICA ESTA TARDE EN UNA NOCHE DE VERANO' },
  { category: 'Música', phrase: 'BOHEMIAN RHAPSODY EN DIRECTO EN UNA NOCHE DE VERANO' },
  { category: 'Música', phrase: 'ENTRE DOS TIERRAS Y VIENTO EN UNA NOCHE DE VERANO' },
  { category: 'Música', phrase: 'WE WILL ROCK YOU TODA LA NOCHE EN UNA NOCHE DE VERANO' },
  { category: 'Música', phrase: 'CORAZON PARTIO BAJO LA LLUVIA EN UNA NOCHE DE VERANO' },
  { category: 'Música', phrase: 'MEDITERRANEO AL ATARDECER DORADO EN UNA NOCHE DE VERANO' },
  { category: 'Música', phrase: 'NO PUEDO VIVIR SIN TI HOY EN UNA NOCHE DE VERANO' },
  { category: 'Música', phrase: 'BESO LENTO BAJO LAS ESTRELLAS EN UNA NOCHE DE VERANO' },
  { category: 'Lugares', phrase: 'PLAZA MAYOR DE MADRID AL ANOCHECER EN UNA NOCHE DE VERANO' },
  { category: 'Lugares', phrase: 'GRAN VIA DE MADRID ILUMINADA EN UNA NOCHE DE VERANO' },
  { category: 'Lugares', phrase: 'ALHAMBRA DE GRANADA EN PRIMAVERA EN UNA NOCHE DE VERANO' },
  { category: 'Lugares', phrase: 'PARQUE NACIONAL DE ORDESA NEVADO EN UNA NOCHE DE VERANO' },
  { category: 'Lugares', phrase: 'PUENTE DE BROOKLYN AL AMANECER EN UNA NOCHE DE VERANO' },
  { category: 'Lugares', phrase: 'MUSEO DEL PRADO EN SILENCIO EN UNA NOCHE DE VERANO' },
  { category: 'Lugares', phrase: 'CENTRAL PARK EN OTONO DORADO EN UNA NOCHE DE VERANO' },
  { category: 'Lugares', phrase: 'MURALLA CHINA ENTRE MONTAÑAS EN UNA NOCHE DE VERANO' },
  { category: 'Lugares', phrase: 'MONTE FUJI TRAS LAS NUBES EN UNA NOCHE DE VERANO' },
  { category: 'Lugares', phrase: 'TORRE EIFFEL BRILLANDO DE NOCHE EN UNA NOCHE DE VERANO' },
  { category: 'Expresiones', phrase: 'A QUIEN MADRUGA DIOS LE AYUDA SIEMPRE EN UNA NOCHE DE VERANO' },
  { category: 'Expresiones', phrase: 'MAS VALE TARDE QUE NUNCA JAMAS EN UNA NOCHE DE VERANO' },
  { category: 'Expresiones', phrase: 'AL MAL TIEMPO BUENA CARA SIEMPRE EN UNA NOCHE DE VERANO' },
  { category: 'Expresiones', phrase: 'NO HAY MAL QUE POR BIEN NO VENGA EN UNA NOCHE DE VERANO' },
  { category: 'Expresiones', phrase: 'MUCHO RUIDO Y POCAS NUECES VERDES EN UNA NOCHE DE VERANO' },
  { category: 'Expresiones', phrase: 'A PALABRAS NECIAS OIDOS SORDOS SIEMPRE EN UNA NOCHE DE VERANO' },
  { category: 'Expresiones', phrase: 'EL HABITO NO HACE AL MONJE SABIO EN UNA NOCHE DE VERANO' },
  { category: 'Expresiones', phrase: 'CUANDO EL RIO SUENA AGUA LLEVA DENTRO EN UNA NOCHE DE VERANO' },
  { category: 'Expresiones', phrase: 'NUNCA ES TARDE SI LA DICHA ES BUENA EN UNA NOCHE DE VERANO' },
  { category: 'Expresiones', phrase: 'EN CASA DEL HERRERO CUCHILLO DE PALO EN UNA NOCHE DE VERANO' }
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
