// DADOS
// ══════════════════════════════════
const EXERCICIOS = [
  { nome: 'Supino Reto',          grupo: 'Peito',    series: '4×10',   dificuldade: 'Intermédio', calorias: 8 },
  { nome: 'Supino Inclinado',     grupo: 'Peito',    series: '3×12',   dificuldade: 'Intermédio', calorias: 7 },
  { nome: 'Flexões',              grupo: 'Peito',    series: '4×15',   dificuldade: 'Iniciante',  calorias: 7 },
  { nome: 'Crucifixo',            grupo: 'Peito',    series: '3×12',   dificuldade: 'Iniciante',  calorias: 6 },
  { nome: 'Pull-up',              grupo: 'Costas',   series: '4×8',    dificuldade: 'Avançado',   calorias: 8 },
  { nome: 'Remada Curvada',       grupo: 'Costas',   series: '4×10',   dificuldade: 'Intermédio', calorias: 7 },
  { nome: 'Puxada Alta',          grupo: 'Costas',   series: '4×12',   dificuldade: 'Iniciante',  calorias: 6 },
  { nome: 'Remada Unilateral',    grupo: 'Costas',   series: '3×12',   dificuldade: 'Iniciante',  calorias: 6 },
  { nome: 'Agachamento',          grupo: 'Pernas',   series: '4×12',   dificuldade: 'Intermédio', calorias: 9 },
  { nome: 'Leg Press',            grupo: 'Pernas',   series: '4×15',   dificuldade: 'Iniciante',  calorias: 8 },
  { nome: 'Afundo',               grupo: 'Pernas',   series: '3×12',   dificuldade: 'Iniciante',  calorias: 7 },
  { nome: 'Extensão de Pernas',   grupo: 'Pernas',   series: '4×15',   dificuldade: 'Iniciante',  calorias: 5 },
  { nome: 'Curl Femoral',         grupo: 'Pernas',   series: '4×15',   dificuldade: 'Iniciante',  calorias: 5 },
  { nome: 'Press Militar',        grupo: 'Ombros',   series: '4×10',   dificuldade: 'Intermédio', calorias: 7 },
  { nome: 'Elevação Lateral',     grupo: 'Ombros',   series: '4×15',   dificuldade: 'Iniciante',  calorias: 5 },
  { nome: 'Elevação Frontal',     grupo: 'Ombros',   series: '3×12',   dificuldade: 'Iniciante',  calorias: 5 },
  { nome: 'Rosca Direta',         grupo: 'Bíceps',   series: '4×12',   dificuldade: 'Iniciante',  calorias: 5 },
  { nome: 'Rosca Martelo',        grupo: 'Bíceps',   series: '4×12',   dificuldade: 'Iniciante',  calorias: 5 },
  { nome: 'Tríceps Corda',        grupo: 'Tríceps',  series: '4×15',   dificuldade: 'Iniciante',  calorias: 5 },
  { nome: 'Paralelas',            grupo: 'Tríceps',  series: '4×10',   dificuldade: 'Intermédio', calorias: 7 },
  { nome: 'Prancha',              grupo: 'Abdómen',  series: '4×60s',  dificuldade: 'Iniciante',  calorias: 4 },
  { nome: 'Crunch',               grupo: 'Abdómen',  series: '4×20',   dificuldade: 'Iniciante',  calorias: 5 },
  { nome: 'Russian Twist',        grupo: 'Abdómen',  series: '3×20',   dificuldade: 'Iniciante',  calorias: 5 },
  { nome: 'Hip Thrust',           grupo: 'Glúteos',  series: '4×15',   dificuldade: 'Iniciante',  calorias: 6 },
  { nome: 'Glute Bridge',         grupo: 'Glúteos',  series: '4×20',   dificuldade: 'Iniciante',  calorias: 5 },
  { nome: 'Corrida',              grupo: 'Cardio',   series: '30 min', dificuldade: 'Intermédio', calorias: 11 },
  { nome: 'Corda de Saltar',      grupo: 'Cardio',   series: '15 min', dificuldade: 'Iniciante',  calorias: 12 },
  { nome: 'Burpees',              grupo: 'Cardio',   series: '4×10',   dificuldade: 'Avançado',   calorias: 13 },
];

const TREINOS = [
  // ── MUSCULAÇÃO
  { nome: 'Força Básica',          tipo: 'Musculação',    duracao: 30, dificuldade: 'Iniciante',  exercicios: ['Flexões', 'Agachamento', 'Crunch', 'Glute Bridge'],                                     calorias: 240 },
  { nome: 'Musculação Iniciante',  tipo: 'Musculação',    duracao: 45, dificuldade: 'Iniciante',  exercicios: ['Supino Reto', 'Leg Press', 'Puxada Alta', 'Rosca Direta', 'Prancha'],                   calorias: 320 },
  { nome: 'Corpo Completo Início', tipo: 'Musculação',    duracao: 60, dificuldade: 'Iniciante',  exercicios: ['Flexões', 'Agachamento', 'Puxada Alta', 'Crunch', 'Glute Bridge', 'Afundo'],            calorias: 400 },
  { nome: 'Força Total Início',    tipo: 'Musculação',    duracao: 90, dificuldade: 'Iniciante',  exercicios: ['Supino Reto', 'Leg Press', 'Puxada Alta', 'Rosca Direta', 'Prancha', 'Afundo'],         calorias: 520 },
  { nome: 'Musculação Express',    tipo: 'Musculação',    duracao: 30, dificuldade: 'Intermédio', exercicios: ['Supino Reto', 'Remada Curvada', 'Agachamento', 'Press Militar'],                        calorias: 350 },
  { nome: 'Peito + Tríceps',       tipo: 'Musculação',    duracao: 60, dificuldade: 'Intermédio', exercicios: ['Supino Reto', 'Supino Inclinado', 'Crucifixo', 'Tríceps Corda', 'Paralelas'],            calorias: 450 },
  { nome: 'Costas + Bíceps',       tipo: 'Musculação',    duracao: 60, dificuldade: 'Intermédio', exercicios: ['Pull-up', 'Remada Curvada', 'Puxada Alta', 'Rosca Direta', 'Rosca Martelo'],            calorias: 420 },
  { nome: 'Ombros + Core',         tipo: 'Musculação',    duracao: 45, dificuldade: 'Intermédio', exercicios: ['Press Militar', 'Elevação Lateral', 'Prancha', 'Crunch', 'Russian Twist'],              calorias: 380 },
  { nome: 'Glúteos + Pernas',      tipo: 'Musculação',    duracao: 60, dificuldade: 'Intermédio', exercicios: ['Hip Thrust', 'Glute Bridge', 'Afundo', 'Leg Press', 'Agachamento'],                     calorias: 480 },
  { nome: 'Power Build 90',        tipo: 'Musculação',    duracao: 90, dificuldade: 'Intermédio', exercicios: ['Supino Reto', 'Remada Curvada', 'Agachamento', 'Press Militar', 'Rosca Direta', 'Prancha'], calorias: 620 },
  { nome: 'Força Rápida Av.',      tipo: 'Musculação',    duracao: 30, dificuldade: 'Avançado',   exercicios: ['Agachamento', 'Supino Reto', 'Pull-up', 'Press Militar'],                               calorias: 400 },
  { nome: 'Hipertrofia Av.',       tipo: 'Musculação',    duracao: 45, dificuldade: 'Avançado',   exercicios: ['Supino Reto', 'Remada Curvada', 'Agachamento', 'Press Militar', 'Pull-up'],             calorias: 520 },
  { nome: 'Pernas Completo',       tipo: 'Musculação',    duracao: 60, dificuldade: 'Avançado',   exercicios: ['Agachamento', 'Leg Press', 'Afundo', 'Curl Femoral', 'Extensão de Pernas'],             calorias: 550 },
  { nome: 'Peito Avançado',        tipo: 'Musculação',    duracao: 90, dificuldade: 'Avançado',   exercicios: ['Supino Reto', 'Supino Inclinado', 'Crucifixo', 'Flexões', 'Paralelas'],                 calorias: 600 },
  { nome: 'Upper Body Avançado',   tipo: 'Musculação',    duracao: 90, dificuldade: 'Avançado',   exercicios: ['Pull-up', 'Supino Reto', 'Press Militar', 'Remada Curvada', 'Paralelas'],               calorias: 650 },

  // ── CARDIO
  { nome: 'Cardio Leve',           tipo: 'Cardio',        duracao: 30, dificuldade: 'Iniciante',  exercicios: ['Corrida', 'Corda de Saltar'],                                                           calorias: 280 },
  { nome: 'Caminhada Ativa',       tipo: 'Cardio',        duracao: 45, dificuldade: 'Iniciante',  exercicios: ['Corrida', 'Corda de Saltar'],                                                           calorias: 350 },
  { nome: 'Cardio Suave 60',       tipo: 'Cardio',        duracao: 60, dificuldade: 'Iniciante',  exercicios: ['Corrida', 'Corda de Saltar', 'Crunch'],                                                 calorias: 430 },
  { nome: 'Cardio Longo Início',   tipo: 'Cardio',        duracao: 90, dificuldade: 'Iniciante',  exercicios: ['Corrida', 'Corda de Saltar'],                                                           calorias: 580 },
  { nome: 'Cardio Express',        tipo: 'Cardio',        duracao: 30, dificuldade: 'Intermédio', exercicios: ['Corrida', 'Burpees', 'Corda de Saltar'],                                                calorias: 380 },
  { nome: 'Corrida Intervalada',   tipo: 'Cardio',        duracao: 45, dificuldade: 'Intermédio', exercicios: ['Corrida', 'Corda de Saltar', 'Burpees'],                                                calorias: 430 },
  { nome: 'Cardio Moderado',       tipo: 'Cardio',        duracao: 60, dificuldade: 'Intermédio', exercicios: ['Corrida', 'Burpees', 'Corda de Saltar'],                                                calorias: 520 },
  { nome: 'Resistência Cardio',    tipo: 'Cardio',        duracao: 90, dificuldade: 'Intermédio', exercicios: ['Corrida', 'Burpees', 'Corda de Saltar', 'Crunch'],                                      calorias: 720 },
  { nome: 'Cardio Sprint Av.',      tipo: 'Cardio',        duracao: 30, dificuldade: 'Avançado',   exercicios: ['Burpees', 'Corrida', 'Corda de Saltar'],                                                calorias: 420 },
  { nome: 'Cardio Explosivo 45',   tipo: 'Cardio',        duracao: 45, dificuldade: 'Avançado',   exercicios: ['Burpees', 'Corrida', 'Corda de Saltar'],                                                calorias: 540 },
  { nome: 'Cardio Intenso',        tipo: 'Cardio',        duracao: 60, dificuldade: 'Avançado',   exercicios: ['Burpees', 'Corrida', 'Corda de Saltar'],                                                calorias: 620 },
  { nome: 'Endurance',             tipo: 'Cardio',        duracao: 90, dificuldade: 'Avançado',   exercicios: ['Corrida', 'Burpees', 'Corda de Saltar'],                                                calorias: 850 },

  // ── HIIT 
  { nome: 'HIIT Iniciante',        tipo: 'HIIT',          duracao: 30, dificuldade: 'Iniciante',  exercicios: ['Corrida', 'Corda de Saltar', 'Crunch'],                                                 calorias: 300 },
  { nome: 'HIIT Básico',           tipo: 'HIIT',          duracao: 45, dificuldade: 'Iniciante',  exercicios: ['Corda de Saltar', 'Crunch', 'Agachamento'],                                             calorias: 380 },
  { nome: 'HIIT Longo Início',     tipo: 'HIIT',          duracao: 60, dificuldade: 'Iniciante',  exercicios: ['Corrida', 'Corda de Saltar', 'Crunch', 'Agachamento'],                                  calorias: 460 },
  { nome: 'HIIT Resistência Iníc', tipo: 'HIIT',          duracao: 90, dificuldade: 'Iniciante',  exercicios: ['Corrida', 'Corda de Saltar', 'Crunch', 'Agachamento', 'Glute Bridge'],                  calorias: 600 },
  { nome: 'HIIT Intermédio',       tipo: 'HIIT',          duracao: 30, dificuldade: 'Intermédio', exercicios: ['Burpees', 'Corda de Saltar', 'Corrida'],                                                calorias: 420 },
  { nome: 'HIIT Circuit',          tipo: 'HIIT',          duracao: 45, dificuldade: 'Intermédio', exercicios: ['Burpees', 'Corrida', 'Corda de Saltar', 'Crunch'],                                      calorias: 500 },
  { nome: 'HIIT Power 60',         tipo: 'HIIT',          duracao: 60, dificuldade: 'Intermédio', exercicios: ['Burpees', 'Corrida', 'Corda de Saltar', 'Agachamento', 'Prancha'],                      calorias: 620 },
  { nome: 'HIIT Endurance Int.',   tipo: 'HIIT',          duracao: 90, dificuldade: 'Intermédio', exercicios: ['Burpees', 'Corrida', 'Corda de Saltar', 'Agachamento', 'Prancha', 'Crunch'],            calorias: 820 },
  { nome: 'HIIT Avançado',         tipo: 'HIIT',          duracao: 30, dificuldade: 'Avançado',   exercicios: ['Burpees', 'Corda de Saltar', 'Corrida'],                                                calorias: 450 },
  { nome: 'HIIT Extremo',          tipo: 'HIIT',          duracao: 45, dificuldade: 'Avançado',   exercicios: ['Burpees', 'Pull-up', 'Corrida', 'Corda de Saltar'],                                     calorias: 600 },
  { nome: 'HIIT Elite 60',         tipo: 'HIIT',          duracao: 60, dificuldade: 'Avançado',   exercicios: ['Burpees', 'Pull-up', 'Corrida', 'Corda de Saltar', 'Agachamento'],                      calorias: 750 },
  { nome: 'HIIT Ultra 90',         tipo: 'HIIT',          duracao: 90, dificuldade: 'Avançado',   exercicios: ['Burpees', 'Pull-up', 'Corrida', 'Corda de Saltar', 'Agachamento', 'Prancha'],           calorias: 950 },

  // ── FUNCIONAL
  { nome: 'Funcional Iniciante',   tipo: 'Funcional',     duracao: 30, dificuldade: 'Iniciante',  exercicios: ['Agachamento', 'Flexões', 'Crunch', 'Glute Bridge'],                                     calorias: 250 },
  { nome: 'Full Body Iniciante',   tipo: 'Funcional',     duracao: 45, dificuldade: 'Iniciante',  exercicios: ['Flexões', 'Agachamento', 'Prancha', 'Crunch', 'Afundo'],                                calorias: 350 },
  { nome: 'Funcional Completo 60', tipo: 'Funcional',     duracao: 60, dificuldade: 'Iniciante',  exercicios: ['Agachamento', 'Flexões', 'Crunch', 'Prancha', 'Afundo', 'Glute Bridge'],                calorias: 440 },
  { nome: 'Funcional Total Iníc',  tipo: 'Funcional',     duracao: 90, dificuldade: 'Iniciante',  exercicios: ['Agachamento', 'Flexões', 'Crunch', 'Prancha', 'Afundo', 'Glute Bridge'],                calorias: 580 },
  { nome: 'Funcional Express',     tipo: 'Funcional',     duracao: 30, dificuldade: 'Intermédio', exercicios: ['Burpees', 'Agachamento', 'Prancha', 'Crunch'],                                          calorias: 360 },
  { nome: 'Funcional Intermédio',  tipo: 'Funcional',     duracao: 45, dificuldade: 'Intermédio', exercicios: ['Burpees', 'Agachamento', 'Prancha', 'Crunch', 'Afundo'],                                calorias: 420 },
  { nome: 'Treino Funcional 60',   tipo: 'Funcional',     duracao: 60, dificuldade: 'Intermédio', exercicios: ['Burpees', 'Agachamento', 'Remada Curvada', 'Prancha', 'Russian Twist'],                 calorias: 500 },
  { nome: 'Funcional Resistência', tipo: 'Funcional',     duracao: 90, dificuldade: 'Intermédio', exercicios: ['Burpees', 'Agachamento', 'Remada Curvada', 'Prancha', 'Russian Twist', 'Afundo'],       calorias: 680 },
  { nome: 'Funcional Força Av.',   tipo: 'Funcional',     duracao: 30, dificuldade: 'Avançado',   exercicios: ['Burpees', 'Pull-up', 'Agachamento', 'Prancha'],                                          calorias: 380 },
  { nome: 'Funcional Power 45',    tipo: 'Funcional',     duracao: 45, dificuldade: 'Avançado',   exercicios: ['Burpees', 'Pull-up', 'Agachamento', 'Prancha', 'Russian Twist'],                        calorias: 500 },
  { nome: 'Funcional Avançado',    tipo: 'Funcional',     duracao: 60, dificuldade: 'Avançado',   exercicios: ['Burpees', 'Pull-up', 'Agachamento', 'Prancha', 'Russian Twist'],                        calorias: 580 },
  { nome: 'Atleta Funcional',      tipo: 'Funcional',     duracao: 90, dificuldade: 'Avançado',   exercicios: ['Burpees', 'Pull-up', 'Agachamento', 'Press Militar', 'Prancha', 'Russian Twist'],       calorias: 720 },

  // ── FLEXIBILIDADE
  { nome: 'Alongamento Básico',    tipo: 'Flexibilidade', duracao: 30, dificuldade: 'Iniciante',  exercicios: ['Prancha', 'Crunch', 'Glute Bridge'],                                                    calorias: 120 },
  { nome: 'Yoga & Mobilidade',     tipo: 'Flexibilidade', duracao: 45, dificuldade: 'Iniciante',  exercicios: ['Prancha', 'Glute Bridge'],                                                              calorias: 150 },
  { nome: 'Flex & Relax 60',       tipo: 'Flexibilidade', duracao: 60, dificuldade: 'Iniciante',  exercicios: ['Prancha', 'Crunch', 'Glute Bridge', 'Hip Thrust'],                                      calorias: 190 },
  { nome: 'Yoga Longo Início',     tipo: 'Flexibilidade', duracao: 90, dificuldade: 'Iniciante',  exercicios: ['Prancha', 'Crunch', 'Glute Bridge', 'Hip Thrust', 'Russian Twist'],                     calorias: 250 },
  { nome: 'Mobilidade Express',    tipo: 'Flexibilidade', duracao: 30, dificuldade: 'Intermédio', exercicios: ['Prancha', 'Crunch', 'Russian Twist', 'Glute Bridge'],                                   calorias: 170 },
  { nome: 'Pilates & Core',        tipo: 'Flexibilidade', duracao: 45, dificuldade: 'Intermédio', exercicios: ['Prancha', 'Crunch', 'Russian Twist', 'Glute Bridge'],                                   calorias: 220 },
  { nome: 'Mobilidade Completa',   tipo: 'Flexibilidade', duracao: 60, dificuldade: 'Intermédio', exercicios: ['Prancha', 'Crunch', 'Russian Twist', 'Hip Thrust', 'Glute Bridge'],                     calorias: 280 },
  { nome: 'Flex Resistência Int.', tipo: 'Flexibilidade', duracao: 90, dificuldade: 'Intermédio', exercicios: ['Prancha', 'Crunch', 'Russian Twist', 'Hip Thrust', 'Glute Bridge', 'Pull-up'],          calorias: 360 },
  { nome: 'Flex Rápida Av.',       tipo: 'Flexibilidade', duracao: 30, dificuldade: 'Avançado',   exercicios: ['Prancha', 'Pull-up', 'Russian Twist', 'Hip Thrust'],                                    calorias: 240 },
  { nome: 'Mobilidade Av. 45',     tipo: 'Flexibilidade', duracao: 45, dificuldade: 'Avançado',   exercicios: ['Prancha', 'Pull-up', 'Russian Twist', 'Hip Thrust', 'Glute Bridge'],                    calorias: 300 },
  { nome: 'Yoga Avançado',         tipo: 'Flexibilidade', duracao: 60, dificuldade: 'Avançado',   exercicios: ['Prancha', 'Pull-up', 'Russian Twist', 'Hip Thrust', 'Glute Bridge'],                    calorias: 320 },
  { nome: 'Flexibilidade Total',   tipo: 'Flexibilidade', duracao: 90, dificuldade: 'Avançado',   exercicios: ['Prancha', 'Pull-up', 'Russian Twist', 'Hip Thrust', 'Glute Bridge', 'Crunch'],          calorias: 380 },
];

// (MET) por atividade
const MET_ATIVIDADES = {
  corrida:     9.8,
  ciclismo:    7.5,
  natacao:     8.0,
  musculacao:  5.0,
  yoga:        3.0,
  futebol:     7.0,
  caminhada:   3.5,
  corda:      12.3,
  hiit:       10.5,
};

const ALIMENTOS = [
  { nome: '🍕 Pizza (1 fatia)', calorias: 266 },
  { nome: '🍔 Hambúrguer',      calorias: 295 },
  { nome: '🍫 Chocolate 100g',  calorias: 535 },
  { nome: '🍺 Cerveja 330ml',   calorias: 150 },
  { nome: '🍦 Gelado',          calorias: 200 },
  { nome: '🍩 Donut',           calorias: 250 },
];

const PALAVRAS_FITNESS = ['Fitness', 'Ginasio', 'Forca', 'Treino', 'Musculo', 'Ativo', 'Ganhos', 'Levantar', 'Correr', 'PRO', 'HIIT', 'Cardio'];

// ── Estado da aplicação ──
let contadorAgua     = 0;
let metaAgua         = 8;
let historicoPassword = [];
let historicoSorteio  = [];
let graficosIniciados = false;
let temporizadorToast;

//LOGIN / LOGOUT
// ══════════════════════════════════
function fazerLogin() {
  const utilizador = document.getElementById('login-user').value.trim();
  const senha      = document.getElementById('login-pass').value.trim();

  if (utilizador === 'admin' && senha === '1234') {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('app').style.display = 'block';
    document.getElementById('avatar-initials').textContent = utilizador.slice(0, 2).toUpperCase();
    document.getElementById('user-display').textContent    = capitalizarPrimeira(utilizador);
    document.getElementById('topbar-name').textContent     = capitalizarPrimeira(utilizador);
    document.getElementById('current-date').textContent    = new Date().toLocaleDateString('pt-PT', { weekday: 'long', day: 'numeric', month: 'long' });
    iniciarGarrafas();
    iniciarExercicios();
    setTimeout(iniciarGraficosBase, 100);

 // EXERCICIO 1  //
  } else {
    alert("Credenciais incorretas.");
  }
}

 //  EXERCICIO 2  //
function fazerLogout() {
  const confirmar = confirm("Deseja fazer logout?");
  if (confirmar) {
    alert("Você foi desconectado");

    document.getElementById('app').style.display = 'none';
    document.getElementById('login-screen').style.display = 'flex';

    contadorAgua = 0;
    metaAgua = 8;

    mostrarSeccao('dashboard', document.querySelector('.nav-item.active'));

  } else {
    alert("Você continua conectado");
  }
}

document.addEventListener('keydown', evento => {
  if (evento.key === 'Enter') fazerLogin();
});

// NAV
// ══════════════════════════════════
function mostrarSeccao(idSeccao, elementoNav) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('sec-' + idSeccao).classList.add('active');
  if (elementoNav) elementoNav.classList.add('active');
  // Gráficos da página dedicada só são criados na primeira visita
  if (idSeccao === 'graficos' && !graficosIniciados) {
    graficosIniciados = true;
    iniciarGraficosPagina();
  }
}

//UTIL
// ══════════════════════════════════
function capitalizarPrimeira(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

//IMC
// ══════════════════════════════════
function calcularIMC() {
  const peso   = parseFloat(document.getElementById('imc-peso').value);
  const altura = parseFloat(document.getElementById('imc-altura').value) / 100;
  const idade  = parseInt(document.getElementById('imc-idade').value);
  const genero = document.getElementById('imc-genero').value;

  if (!peso || !altura || peso < 30 || altura < 1) {
    mostrarNotificacao('⚠️ Atenção', 'Preenche todos os campos corretamente.');
    return;
  }

  const imc = (peso / (altura * altura)).toFixed(1);

  // EXERCICIO 3//
  const nome = prompt("Digite seu nome:");

  if (nome === null) {
    return;
  }

  const categorias = [
    { maximo: 18.4, etiqueta: 'Abaixo do peso 🔵', cor: '#4fc3f7', posicao: 5  },
    { maximo: 24.9, etiqueta: 'Peso normal ✅',     cor: '#66bb6a', posicao: 30 },
    { maximo: 29.9, etiqueta: 'Sobrepeso ⚠️',       cor: '#ffee58', posicao: 55 },
    { maximo: 34.9, etiqueta: 'Obesidade I 🔴',     cor: '#ffa726', posicao: 70 },
    { maximo: 39.9, etiqueta: 'Obesidade II 🔴',    cor: '#ef5350', posicao: 85 },
    { maximo: 999,  etiqueta: 'Obesidade III 🚨',   cor: '#b71c1c', posicao: 98 },
  ];

  const categoria = categorias.find(c => imc <= c.maximo);

  document.getElementById('imc-valor').innerHTML =
    nome + ", seu IMC é: " + imc;

  document.getElementById('imc-categoria').textContent = categoria.etiqueta;
  document.getElementById('imc-categoria').style.color = categoria.cor;
  document.getElementById('bmi-ptr').style.left        = categoria.posicao + '%';
  document.getElementById('imc-result').style.display  = 'block';
  document.getElementById('dash-imc').textContent      = imc;

  // Taxa Metabólica Basal
  const tmb = genero === 'm'
    ? 88.36 + (13.4 * peso) + (4.8 * altura * 100) - (5.7 * (idade || 25))
    : 447.6 + (9.2 * peso) + (3.1 * altura * 100) - (4.3 * (idade || 25));

  // Peso ideal
  const pesoIdeal = genero === 'm'
    ? (50 + 0.91 * (altura * 100 - 152.4)).toFixed(1)
    : (45.5 + 0.91 * (altura * 100 - 152.4)).toFixed(1);

  document.getElementById('tmb-val').textContent        = Math.round(tmb);
  document.getElementById('peso-ideal-val').textContent = pesoIdeal + ' kg';
  document.getElementById('imc-extras').style.display   = 'block';

  mostrarNotificacao(
    '✅ IMC Calculado',
    `O teu IMC é ${imc} — ${categoria.etiqueta.replace(/[^\w\s]/g, '').trim()}`
  );
}

//CONVERSOR DE CALORIAS
// ══════════════════════════════════
function calcularCalorias() {

  const atividade = document.getElementById('cal-atividade').value;
  const minutos   = parseFloat(document.getElementById('cal-minutos').value);
  const peso      = parseFloat(document.getElementById('cal-peso').value) || 70;

  if (!minutos || minutos < 1) {
    mostrarNotificacao('⚠️', 'Indica a duração em minutos.');
    return;
  }

  const met = MET_ATIVIDADES[atividade] || 6;
  const totalKcal = Math.round(met * peso * (minutos / 60));

  // EXERCICIO 4  //
  document.getElementById('cal-valor').innerHTML =
  "Você perdeu " + totalKcal + " calorias em seu exercício de " + minutos + " minutos.";
  
  document.getElementById('cal-result').style.display = 'block';

  // Mostrar equivalências alimentares
  const equivalencias = document.getElementById('cal-equiv');

 equivalencias.innerHTML = '';

  ALIMENTOS.forEach(alimento => {
    const porcoes = (totalKcal / alimento.calorias).toFixed(1);

    const percentagem = ((totalKcal / alimento.calorias) * 100).toFixed(0);

    const cartao = document.createElement('div');
    cartao.className = 'food-chip';
    cartao.innerHTML = `<span>${alimento.nome}</span> 
    <span class="food-cal">${porcoes}× (${percentagem}%)</span>`;
    equivalencias.appendChild(cartao);
  });

}

function calcularAlimento() {
  const caloriasBase = parseInt(document.getElementById('food-select').value);
  const quantidade   = parseInt(document.getElementById('food-qtd').value) || 1;
  const totalKcal    = caloriasBase * quantidade;

  document.getElementById('food-kcal').textContent      = totalKcal;
  document.getElementById('food-result').style.display  = 'block';

  // Quanto exercício é preciso para queimar essas calorias
  const listaExercicios = document.getElementById('food-exercises');
  listaExercicios.innerHTML = '';
  const atividades = [
    { nome: '🏃 Corrida',     met: 9.8 },
    { nome: '🚴 Ciclismo',    met: 7.5 },
    { nome: '🏋️ Musculação', met: 5.0 },
    { nome: '🏊 Natação',     met: 8.0 },
  ];
  atividades.forEach(atividade => {
    const minutos = Math.round((totalKcal / (atividade.met * 70)) * 60);
    const linha   = document.createElement('div');
    linha.style.cssText = 'background:var(--bg3);border-radius:8px;padding:10px 14px;margin-bottom:8px;display:flex;justify-content:space-between;font-size:13px;';
    linha.innerHTML = `<span>${atividade.nome}</span><span style="color:var(--neon);font-weight:700">${minutos} min</span>`;
    listaExercicios.appendChild(linha);
  });
}

// GERADOR DE PASSWORD
// ══════════════════════════════════
function atualizarComprimento() {
  document.getElementById('pass-len-label').textContent = document.getElementById('pass-len').value;
}

function gerarPassword() {
  const comprimento  = parseInt(document.getElementById('pass-len').value);
  const maiusculas   = document.getElementById('pass-upper').checked;
  const minusculas   = document.getElementById('pass-lower').checked;
  const numeros      = document.getElementById('pass-nums').checked;
  const simbolos     = document.getElementById('pass-special').checked;
  const temaFitness  = document.getElementById('pass-fitness').checked;

  if (!maiusculas && !minusculas && !numeros && !simbolos && !temaFitness) {
    mostrarNotificacao('⚠️', 'Seleciona pelo menos um tipo de caracter.');
    return;
  }

  let caracteres = '';
  if (maiusculas) caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (minusculas) caracteres += 'abcdefghijklmnopqrstuvwxyz';
  if (numeros)    caracteres += '0123456789';
  if (simbolos)   caracteres += '!@#$%^&*()_+-=[]{}|;:,.<>?';

  let password = '';
  if (temaFitness) {
    const palavra = PALAVRAS_FITNESS[Math.floor(Math.random() * PALAVRAS_FITNESS.length)];
    password = palavra;
    while (password.length < comprimento) {
      password += caracteres
        ? caracteres[Math.floor(Math.random() * caracteres.length)]
        : Math.floor(Math.random() * 10);
    }
    password = password.slice(0, comprimento);
  } else {
    for (let i = 0; i < comprimento; i++) {
      password += caracteres[Math.floor(Math.random() * caracteres.length)];
    }
  }

  document.getElementById('pass-text').textContent = password;
  atualizarForcaPassword(password);
  adicionarAoHistoricoPassword(password);
}

function atualizarForcaPassword(password) {
  let pontuacao = 0;
  if (password.length >= 8)  pontuacao++;
  if (password.length >= 12) pontuacao++;
  if (password.length >= 16) pontuacao++;
  if (/[A-Z]/.test(password))        pontuacao++;
  if (/[a-z]/.test(password))        pontuacao++;
  if (/[0-9]/.test(password))        pontuacao++;
  if (/[^a-zA-Z0-9]/.test(password)) pontuacao++;

  const niveis = [
    { etiqueta: 'Muito fraca',    cor: '#ef5350', largura: '15%'  },
    { etiqueta: 'Fraca',          cor: '#ffa726', largura: '30%'  },
    { etiqueta: 'Razoável',       cor: '#ffee58', largura: '50%'  },
    { etiqueta: 'Boa',            cor: '#66bb6a', largura: '70%'  },
    { etiqueta: 'Forte',          cor: '#26c6da', largura: '85%'  },
    { etiqueta: 'Muito forte 🔒', cor: '#39ff14', largura: '100%' },
  ];
  const nivel = niveis[Math.min(Math.floor(pontuacao / 1.2), 5)];

  const barra    = document.getElementById('strength-bar');
  barra.style.background = nivel.cor;
  barra.style.width      = nivel.largura;

  const etiqueta = document.getElementById('strength-label');
  etiqueta.textContent = nivel.etiqueta;
  etiqueta.style.color = nivel.cor;
}

function adicionarAoHistoricoPassword(password) {
  historicoPassword.unshift(password);
  if (historicoPassword.length > 5) historicoPassword.pop();

  const contentor = document.getElementById('pass-history');
  contentor.innerHTML = '';
  historicoPassword.forEach(p => {
    const entrada = document.createElement('div');
    entrada.style.cssText = 'background:var(--bg3);border:1px solid var(--border);border-radius:6px;padding:8px 12px;font-family:monospace;font-size:12px;color:var(--text-dim);display:flex;justify-content:space-between;';
    entrada.innerHTML = `
      <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1">${p}</span>
      <button onclick="navigator.clipboard.writeText('${p}')" style="background:none;border:none;cursor:pointer;color:var(--text-dim);font-size:12px;flex-shrink:0">📋</button>`;
    contentor.appendChild(entrada);
  });
}

function copiarPassword() {
  const texto = document.getElementById('pass-text').textContent;
  if (texto === 'Clica em Gerar') return;
  navigator.clipboard.writeText(texto).then(() =>
    mostrarNotificacao('📋 Copiado!', 'Password copiada para a área de transferência.')
  );
}

//CONTADOR DE ÁGUA
// ══════════════════════════════════
function iniciarGarrafas() {
  const contentor = document.getElementById('water-bottles');
  contentor.innerHTML = '';
  for (let i = 0; i < metaAgua; i++) {
    const garrafa = document.createElement('div');
    garrafa.className = 'bottle' + (i < contadorAgua ? ' filled' : '');
    garrafa.innerHTML = `<div class="bottle-fill"></div><div class="bottle-icon">💧</div>`;
    garrafa.onclick = () => { contadorAgua = i + 1; atualizarAgua(); };
    contentor.appendChild(garrafa);
  }
  atualizarAgua();
}

function atualizarMetaAgua() {
  metaAgua = parseInt(document.getElementById('water-goal-input').value) || 8;
  document.getElementById('water-goal').textContent = metaAgua;
  iniciarGarrafas();
}

function adicionarAgua() {
  if (contadorAgua < metaAgua) {
    contadorAgua++;
    atualizarAgua();
  } else {
    mostrarNotificacao('💧 Meta atingida!', 'Parabéns! Já bebeste a tua meta diária.');
  }
}

function removerAgua() {
  if (contadorAgua > 0) { contadorAgua--; atualizarAgua(); }
}

function resetarAgua() {
  contadorAgua = 0;
  atualizarAgua();
  mostrarNotificacao('🔄 Reset', 'Contador de água reposto a zero.');
}

function atualizarAgua() {
  const percentagem = Math.round((contadorAgua / metaAgua) * 100);

  document.getElementById('water-count').textContent    = contadorAgua;
  document.getElementById('water-bar').style.width      = percentagem + '%';
  document.getElementById('water-pct').textContent      = percentagem + '%';
  document.getElementById('dash-water').textContent     = contadorAgua + '/' + metaAgua;

  document.querySelectorAll('.bottle').forEach((garrafa, indice) =>
    garrafa.classList.toggle('filled', indice < contadorAgua)
  );

  const mensagens = [
    '💡 Começa bem o dia — bebe um copo agora!',
    '🌊 Bom início! Continua assim.',
    '💧 Já estás a meio caminho!',
    '⚡ Quase lá! Mais uns copos.',
    '🎉 Meta atingida! Excelente hidratação!',
  ];
  const indiceMensagem = Math.min(
    Math.floor((contadorAgua / metaAgua) * (mensagens.length - 1)),
    mensagens.length - 1
  );
  document.getElementById('water-msg').textContent = mensagens[indiceMensagem];

  if (contadorAgua === metaAgua) {
    mostrarNotificacao('💧 Meta de Água!', 'Parabéns! Chegaste à tua meta diária de água!');
  }
}

// TABELA DE EXERCÍCIOS
// ══════════════════════════════════
function iniciarExercicios() {
  renderizarExercicios(EXERCICIOS);
}

function renderizarExercicios(lista) {
  const corpo = document.getElementById('ex-body');
  corpo.innerHTML = '';

  const coresDificuldade = { Iniciante: 'tag-verde', Intermédio: 'tag-azul', Avançado: 'tag-vermelho' };
  const coresGrupo       = {
    Peito: 'tag-vermelho', Costas: 'tag-azul', Pernas: 'tag-laranja',
    Ombros: 'tag-roxo', Bíceps: 'tag-verde', Tríceps: 'tag-verde',
    Abdómen: 'tag-laranja', Glúteos: 'tag-roxo', Cardio: 'tag-azul',
  };

  lista.forEach(exercicio => {
    const linha = document.createElement('tr');
    linha.innerHTML = `
      <td><strong>${exercicio.nome}</strong></td>
      <td><span class="tag ${coresGrupo[exercicio.grupo] || 'tag-verde'}">${exercicio.grupo}</span></td>
      <td>${exercicio.series}</td>
      <td><span class="tag ${coresDificuldade[exercicio.dificuldade] || 'tag-verde'}">${exercicio.dificuldade}</span></td>
      <td>${exercicio.calorias} kcal</td>`;
    corpo.appendChild(linha);
  });
}

function filtrarExercicios() {
  const pesquisa = document.getElementById('ex-search').value.toLowerCase();
  const filtro   = document.getElementById('ex-filter').value;

  const resultados = EXERCICIOS.filter(exercicio =>
    (!pesquisa || exercicio.nome.toLowerCase().includes(pesquisa) || exercicio.grupo.toLowerCase().includes(pesquisa)) &&
    (!filtro   || exercicio.grupo === filtro)
  );
  renderizarExercicios(resultados);
}

//SORTEIO DE TREINO
// ══════════════════════════════════
function sortearTreino() {
  const tipo       = document.getElementById('sort-tipo').value;
  const duracao    = document.getElementById('sort-duracao').value;
  const dificuldade = document.getElementById('sort-dificuldade').value;

  const disponiveis = TREINOS.filter(treino =>
    (tipo       === 'todos' || treino.tipo        === tipo) &&
    (duracao    === 'todos' || treino.duracao     == duracao) &&
    (dificuldade === 'todos' || treino.dificuldade === dificuldade)
  );

  if (!disponiveis.length) {
    document.getElementById('sorteio-resultado').innerHTML = `
      <div style="text-align:center;color:var(--text-dim);padding:40px">
        <div style="font-size:48px;margin-bottom:12px">🔍</div>
        <div style="font-size:15px;font-weight:600;margin-bottom:8px;color:var(--text)">Nenhum treino encontrado</div>
        <div style="font-size:13px">Tenta ajustar os filtros de tipo, duração ou dificuldade.</div>
      </div>`;
    mostrarNotificacao('⚠️', 'Nenhum treino encontrado com esses filtros.');
    return;
  }

  const treinoSorteado = disponiveis[Math.floor(Math.random() * disponiveis.length)];
  renderizarTreino(treinoSorteado);
  adicionarAoHistoricoSorteio(treinoSorteado.nome);
}

function sortearCompleto() {
  const treinoSorteado = TREINOS[Math.floor(Math.random() * TREINOS.length)];
  renderizarTreino(treinoSorteado);
  adicionarAoHistoricoSorteio(treinoSorteado.nome + ' ⚡');
}

function renderizarTreino(treino) {
  const coresDificuldade = { Iniciante: '#66bb6a', Intermédio: '#ffee58', Avançado: '#ef5350' };
  const coresTipo        = { 'Musculação': '#39ff14', Cardio: '#00bfff', HIIT: '#ff6b6b', Flexibilidade: '#cc44ff', Funcional: 'orange' };

  document.getElementById('sorteio-resultado').innerHTML = `
    <div class="workout-card">
      <div class="workout-name">${treino.nome}</div>
      <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-bottom:12px">
        <span class="tag" style="background:rgba(57,255,20,0.1);color:${coresTipo[treino.tipo] || '#39ff14'}">${treino.tipo}</span>
        <span class="tag" style="background:rgba(255,255,255,0.05);color:${coresDificuldade[treino.dificuldade]}">${treino.dificuldade}</span>
      </div>
      <div class="workout-details">
        <div class="workout-detail">⏱ <span>${treino.duracao}</span> min</div>
        <div class="workout-detail">🔥 <span>${treino.calorias}</span> kcal</div>
        <div class="workout-detail">💪 <span>${treino.exercicios.length}</span> exercícios</div>
      </div>
      <div style="margin-top:20px;text-align:left">
        <div style="font-size:12px;color:var(--text-dim);text-transform:uppercase;letter-spacing:1px;margin-bottom:10px">Exercícios incluídos:</div>
        ${treino.exercicios.map((exercicio, indice) => `
          <div style="background:var(--bg2);border-radius:6px;padding:8px 12px;margin-bottom:6px;font-size:13px;display:flex;align-items:center;gap:8px">
            <span style="color:var(--neon);font-weight:700;font-size:11px">${String(indice + 1).padStart(2, '0')}</span> ${exercicio}
          </div>`).join('')}
      </div>
    </div>`;

  mostrarNotificacao('🎲 Treino Sorteado!', treino.nome);
}

function adicionarAoHistoricoSorteio(nome) {
  historicoSorteio.unshift(nome);
  if (historicoSorteio.length > 8) historicoSorteio.pop();
  const contentor = document.getElementById('sort-historico');
  contentor.innerHTML = historicoSorteio
    .map(n => `<span class="tag tag-verde" style="font-size:12px;padding:6px 12px">${n}</span>`)
    .join('');
}

// GRÁFICOS — Dashboard
// ══════════════════════════════════
const configGrafico = {
  color: '#e0e0e0',
  plugins: { legend: { labels: { color: '#666', boxWidth: 12, font: { size: 11 } } } },
  scales: {
    x: { ticks: { color: '#555' }, grid: { color: '#1a1a1a' } },
    y: { ticks: { color: '#555' }, grid: { color: '#1a1a1a' } },
  },
};

function iniciarGraficosBase() {
  new Chart(document.getElementById('chart-weekly'), {
    type: 'bar',
    data: {
      labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
      datasets: [{
        label: 'Calorias',
        data: [420, 0, 380, 450, 0, 520, 310],
        backgroundColor: 'rgba(57,255,20,0.3)',
        borderColor: '#39ff14',
        borderWidth: 2,
        borderRadius: 6,
      }],
    },
    options: { ...configGrafico, responsive: true, maintainAspectRatio: false },
  });

  new Chart(document.getElementById('chart-macros'), {
    type: 'doughnut',
    data: {
      labels: ['Proteínas', 'Hidratos', 'Gorduras'],
      datasets: [{ data: [30, 50, 20], backgroundColor: ['#39ff14', '#00bfff', '#ff6b6b'], borderWidth: 0 }],
    },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { color: '#666', boxWidth: 12, font: { size: 11 } } } } },
  });

  new Chart(document.getElementById('chart-water'), {
    type: 'bar',
    data: {
      labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
      datasets: [{ label: 'Copos', data: [6, 8, 5, 7, 8, 4, 6], backgroundColor: 'rgba(0,191,255,0.3)', borderColor: '#00bfff', borderWidth: 2, borderRadius: 4 }],
    },
    options: { ...configGrafico, responsive: true, maintainAspectRatio: false },
  });
}

//GRÁFICOS
// ══════════════════════════════════
function iniciarGraficosPagina() {

  new Chart(document.getElementById('chart-peso'), {
    type: 'line',
    data: {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
      datasets: [{
        label: 'Peso (kg)',
        data: [82, 80, 79, 77, 76, 75],
        borderColor: '#39ff14',
        backgroundColor: 'rgba(57,255,20,0.1)',
        pointBackgroundColor: '#39ff14',
        tension: 0.4,
        fill: true,
      }],
    },
    options: { ...configGrafico, responsive: true, maintainAspectRatio: false },
  });

  new Chart(document.getElementById('chart-cal-week'), {
    type: 'bar',
    data: {
      labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
      datasets: [{
        label: 'kcal',
        data: [1800, 2200, 1950, 2400, 2100, 2600, 2300, 2840],
        backgroundColor: 'rgba(255,107,107,0.4)',
        borderColor: '#ff6b6b',
        borderWidth: 2,
        borderRadius: 6,
      }],
    },
    options: { ...configGrafico, responsive: true, maintainAspectRatio: false },
  });

  new Chart(document.getElementById('chart-tipos'), {
    type: 'pie',
    data: {
      labels: ['Musculação', 'Cardio', 'HIIT', 'Funcional'],
      datasets: [{ data: [45, 25, 20, 10], backgroundColor: ['#39ff14', '#00bfff', '#ff6b6b', '#ffa726'], borderWidth: 0 }],
    },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { color: '#666', boxWidth: 12, font: { size: 11 } } } } },
  });

  new Chart(document.getElementById('chart-freq'), {
    type: 'radar',
    data: {
      labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
      datasets: [{
        label: 'Treinos',
        data: [4, 2, 4, 3, 3, 1, 0],
        backgroundColor: 'rgba(57,255,20,0.1)',
        borderColor: '#39ff14',
        pointBackgroundColor: '#39ff14',
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: { r: { ticks: { color: '#555', backdropColor: 'transparent' }, grid: { color: '#1a1a1a' }, pointLabels: { color: '#666' } } },
      plugins: { legend: { labels: { color: '#666', font: { size: 11 } } } },
    },
  });
}

// NOTIFICAÇÃO (TOAST)
// ══════════════════════════════════
function mostrarNotificacao(titulo, mensagem) {
  clearTimeout(temporizadorToast);
  document.getElementById('toast-title').textContent = titulo;
  document.getElementById('toast-msg').textContent   = mensagem;
  document.getElementById('toast').classList.add('show');
  temporizadorToast = setTimeout(() =>
    document.getElementById('toast').classList.remove('show'), 3000
  );
}
