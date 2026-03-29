// ── State ──
let questions = [];
let currentQ = 0;
let score = 0;
let answered = false;
let answers = []; // { celebIdx, chosenIdx }

// ── Helpers ──
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function show(id) {
  ['welcome', 'quiz'].forEach(s => {
    document.getElementById(s).style.display = (s === id) ? 'block' : 'none';
  });
}

// ── Quiz Logic ──
function startQuiz() {
  questions = shuffle(CELEBRITIES);
  currentQ = 0;
  score = 0;
  answered = false;
  answers = [];
  show('quiz');
  renderQuestion();
}

function renderQuestion() {
  const q = questions[currentQ];
  answered = false;

  // Header
  document.getElementById('q-counter').textContent = `Question ${currentQ + 1} of 20`;
  document.getElementById('q-tag').textContent = `Q${currentQ + 1}`;
  document.getElementById('progress-fill').style.width = `${(currentQ / 20) * 100}%`;

  // Photo
  const img = document.getElementById('celeb-img');
  const ph  = document.getElementById('celeb-placeholder');
  img.style.display = 'block';
  ph.style.display  = 'none';
  img.src = q.img;

  // Info
  document.getElementById('celeb-name').textContent = q.name;
  document.getElementById('celeb-hint').textContent = q.hint;

  // Options: always all 4 states, shuffled
  const grid = document.getElementById('options-grid');
  grid.innerHTML = '';
  shuffle(STATES).forEach(state => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = state;
    btn.onclick = () => handleAnswer(btn, state, q.state);
    grid.appendChild(btn);
  });
}

function handleAnswer(clickedBtn, chosen, correct) {
  if (answered) return;
  answered = true;

  const isCorrect = chosen === correct;
  if (isCorrect) score++;

  const chosenIdx = STATES.indexOf(chosen);
  answers.push({ celeb: questions[currentQ], chosenIdx });
  currentQ++;
  if (currentQ < 20) {
    renderQuestion();
  } else {
    const chosenIndices = CELEBRITIES.map(celeb => {
      const answer = answers.find(a => a.celeb === celeb);
      return answer ? answer.chosenIdx : 0;
    });
    window.location.href = `results.html#${encodeAnswers(chosenIndices)}`;
  }
}

