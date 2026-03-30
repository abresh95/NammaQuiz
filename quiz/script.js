const PICK_PER_STATE = 3;

// ── State ──
let questions = [];
let totalQuestions = 0;
let currentQ = 0;
let score = 0;
let answered = false;
let answers = []; // sparse array of chosenIdx per question index

// ── Helpers ──
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickQuestions() {
  const picked = STATES.flatMap(state => {
    const pool = CELEBRITY_POOLS[state];
    return shuffle(pool).slice(0, Math.min(PICK_PER_STATE, pool.length));
  });
  return shuffle(picked);
}

function show(id) {
  document.getElementById('welcome').style.display = id === 'welcome' ? 'block' : 'none';
  document.getElementById('quiz').style.display    = id === 'quiz'    ? 'flex'  : 'none';
}

// ── Quiz Logic ──
function startQuiz() {
  questions = pickQuestions();
  totalQuestions = questions.length;
  currentQ = 0;
  score = 0;
  answered = false;
  answers = new Array(totalQuestions).fill(null);
  show('quiz');
  renderQuestion();
}

function renderQuestion() {
  const q = questions[currentQ];
  const previousAnswer = answers[currentQ];

  document.getElementById('q-counter').textContent = `Question ${currentQ + 1} of ${totalQuestions}`;
  document.getElementById('q-tag').textContent = `Q${currentQ + 1}`;
  document.getElementById('progress-fill').style.width = `${(currentQ / totalQuestions) * 100}%`;
  document.getElementById('back-btn').disabled = currentQ === 0;
  document.getElementById('fwd-btn').disabled = answers[currentQ] === null || currentQ === totalQuestions - 1;

  const img = document.getElementById('celeb-img');
  const ph  = document.getElementById('celeb-placeholder');
  img.style.display = 'block';
  ph.style.display  = 'none';
  img.src = q.img;

  document.getElementById('celeb-name').textContent = q.name;
  document.getElementById('celeb-hint').textContent = q.hint;

  const grid = document.getElementById('options-grid');
  grid.innerHTML = '';
  shuffle(STATES).forEach(state => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = state;
    // Highlight previously selected answer
    if (previousAnswer !== null && STATES.indexOf(state) === previousAnswer) {
      btn.classList.add('selected');
    }
    btn.onclick = () => handleAnswer(state);
    grid.appendChild(btn);
  });
}

function handleAnswer(chosen) {
  const chosenIdx = STATES.indexOf(chosen);
  answers[currentQ] = chosenIdx;

  currentQ++;
  if (currentQ < totalQuestions) {
    renderQuestion();
  } else {
    submitQuiz();
  }
}

function goBack() {
  if (currentQ === 0) return;
  currentQ--;
  renderQuestion();
}

function goForward() {
  if (answers[currentQ] === null) return;
  currentQ++;
  if (currentQ < totalQuestions) {
    renderQuestion();
  } else {
    submitQuiz();
  }
}

function submitQuiz() {
  score = answers.filter((chosenIdx, i) => STATES[chosenIdx] === questions[i].state).length;

  const hex = answers.map((chosenIdx, i) => {
    const celebIdx = CELEBRITIES.findIndex(c => c.name === questions[i].name);
    return ((celebIdx << 2) | chosenIdx).toString(16).padStart(2, '0');
  }).join('');
  window.location.href = `results/#${hex}`;
}
