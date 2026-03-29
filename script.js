const STATES = [
  "Tamil Nadu",
  "Kerala",
  "Karnataka",
  "Andhra Pradesh / Telangana"
];

const CELEBRITIES = [
  // ── Tamil Nadu ──
  {
    name: "AR Rahman",
    state: "Tamil Nadu",
    hint: "Oscar-winning music composer, born in Chennai",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/AR_Rahman_At_The_%E2%80%98Marvel_Anthem%E2%80%99_Launch_%283x4_cropped%29.jpg/500px-AR_Rahman_At_The_%E2%80%98Marvel_Anthem%E2%80%99_Launch_%283x4_cropped%29.jpg"
  },
  {
    name: "Kamal Haasan",
    state: "Tamil Nadu",
    hint: "Veteran actor & filmmaker, born in Paramakudi",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Kamal_Haasan_at_2023_San_Diego_Comic-Con_International_by_Gage_Skidmore%2C_005_%28cropped%29.jpg/500px-Kamal_Haasan_at_2023_San_Diego_Comic-Con_International_by_Gage_Skidmore%2C_005_%28cropped%29.jpg"
  },
  {
    name: "Vijay",
    state: "Tamil Nadu",
    hint: "Superstar of Tamil cinema, born in Chennai",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Vijay_at_Protest_of_the_Nadigar_Sangam.jpg/500px-Vijay_at_Protest_of_the_Nadigar_Sangam.jpg"
  },
  {
    name: "Ilaiyaraaja",
    state: "Tamil Nadu",
    hint: "The Maestro — legendary Indian film music composer",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Ilaiyaraaja_at_Merku_Thodarchi_Malai_Press_Meet_%28cropped%29.jpg/500px-Ilaiyaraaja_at_Merku_Thodarchi_Malai_Press_Meet_%28cropped%29.jpg"
  },
  {
    name: "Sundar Pichai",
    state: "Tamil Nadu",
    hint: "CEO of Google & Alphabet, born in Madurai",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Sundar_Pichai_-_2023_%28cropped%29.jpg/500px-Sundar_Pichai_-_2023_%28cropped%29.jpg"
  },
  // ── Kerala ──
  {
    name: "Mohanlal",
    state: "Kerala",
    hint: "The Complete Actor of Malayalam cinema",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Mohanlal_Viswanathan_BNC.jpg/500px-Mohanlal_Viswanathan_BNC.jpg"
  },
  {
    name: "Mammootty",
    state: "Kerala",
    hint: "Three-time National Award-winning Malayalam legend",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Mammootty%2C_2022.jpg/500px-Mammootty%2C_2022.jpg"
  },
  {
    name: "Dulquer Salmaan",
    state: "Kerala",
    hint: "Son of Mammootty; Malayalam & Bollywood star",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/82/Dulquer_Salmaan_at_Karwaan_promotions_%28cropped%29.jpg"
  },
  {
    name: "Prithviraj Sukumaran",
    state: "Kerala",
    hint: "Actor & filmmaker from Thiruvananthapuram",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/48/Prithviraj_at_Aiyyaa_event.jpg"
  },
  {
    name: "Fahadh Faasil",
    state: "Kerala",
    hint: "Critically acclaimed actor known for intense roles (Vikram, Pushpa)",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Fahadh_Faasil_2019.jpg/500px-Fahadh_Faasil_2019.jpg"
  },
  // ── Karnataka ──
  {
    name: "Yash",
    state: "Karnataka",
    hint: "KGF superstar, born in Hassan, Karnataka",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Yash%2C_Vishal%2C_Srinidhi_Shetty_at_the_%E2%80%98KGF%E2%80%99_Press_Meet_In_Chennai_%28cropped%29.jpg"
  },
  {
    name: "Kichcha Sudeep",
    state: "Karnataka",
    hint: "Pan-India star of Kannada cinema",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Sudeep_interview_TeachAIDS.jpg"
  },
  {
    name: "Darshan",
    state: "Karnataka",
    hint: "Challenging Star of Kannada cinema, born in Mysore",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Darshan_%28Kannada_actor%29_March_2024_%2801%29.jpg"
  },
  {
    name: "Puneeth Rajkumar",
    state: "Karnataka",
    hint: "Power Star — beloved icon of Kannada cinema",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Puneeth_Rajkumar_%281%29.jpg"
  },
  {
    name: "Girish Karnad",
    state: "Karnataka",
    hint: "Jnanpith Award-winning playwright, actor & Padma Bhushan",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Girish_Karnad_Screening_Cornell_%28cropped%29.JPG/500px-Girish_Karnad_Screening_Cornell_%28cropped%29.JPG"
  },
  // ── Andhra Pradesh / Telangana ──
  {
    name: "Mahesh Babu",
    state: "Andhra Pradesh / Telangana",
    hint: "The Prince of Telugu cinema",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Mahesh_Babu_in_Spyder_%28cropped%29.jpg/500px-Mahesh_Babu_in_Spyder_%28cropped%29.jpg"
  },
  {
    name: "Prabhas",
    state: "Andhra Pradesh / Telangana",
    hint: "Baahubali star from Nellore, Andhra Pradesh",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Prabhas_by_Gage_Skidmore.jpg/500px-Prabhas_by_Gage_Skidmore.jpg"
  },
  {
    name: "Allu Arjun",
    state: "Andhra Pradesh / Telangana",
    hint: "Pushpa star, the Stylish Star of Telugu cinema",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Allu_Arjun_at_Pushpa_2_The_Rule_meet.jpg/500px-Allu_Arjun_at_Pushpa_2_The_Rule_meet.jpg"
  },
  {
    name: "Chiranjeevi",
    state: "Andhra Pradesh / Telangana",
    hint: "Mega Star — Padma Vibhushan & former Union Minister",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Chiranjeevi_at_ANR_Awards_2024_%28cropped%29.jpg/500px-Chiranjeevi_at_ANR_Awards_2024_%28cropped%29.jpg"
  },
  {
    name: "Sania Mirza",
    state: "Andhra Pradesh / Telangana",
    hint: "Tennis Grand Slam champion from Hyderabad",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/22/Sania_Mirza_in_Tennis_Premier_League_2021.jpg"
  }
];

// ── State ──
let questions = [];
let currentQ = 0;
let score = 0;
let answered = false;

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
  ['welcome', 'quiz', 'results'].forEach(s => {
    document.getElementById(s).style.display = (s === id) ? 'block' : 'none';
  });
}

// ── Quiz Logic ──
function startQuiz() {
  questions = shuffle(CELEBRITIES);
  currentQ = 0;
  score = 0;
  answered = false;
  show('quiz');
  renderQuestion();
}

function renderQuestion() {
  const q = questions[currentQ];
  answered = false;

  // Header
  document.getElementById('q-counter').textContent = `Question ${currentQ + 1} of 20`;
  document.getElementById('score-badge').textContent = `Score: ${score}`;
  document.getElementById('q-tag').textContent = `Q${currentQ + 1}`;
  document.getElementById('progress-fill').style.width = `${(currentQ / 20) * 100}%`;

  // Feedback tag reset
  const ft = document.getElementById('feedback-tag');
  ft.style.display = 'none';
  ft.className = 'feedback-tag';

  // Photo
  const img = document.getElementById('celeb-img');
  const ph  = document.getElementById('celeb-placeholder');
  img.style.display = 'block';
  ph.style.display  = 'none';
  img.src = q.img;

  // Info — hidden until answered
  const nameEl = document.getElementById('celeb-name');
  const hintEl = document.getElementById('celeb-hint');
  const waitEl = document.getElementById('waiting-label');
  nameEl.textContent = q.name;
  hintEl.textContent = q.hint;
  nameEl.classList.remove('revealed');
  hintEl.classList.remove('revealed');
  waitEl.style.opacity = '1';

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

  // Disable all buttons and highlight
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) btn.classList.add('correct');
    else if (btn === clickedBtn) btn.classList.add('wrong');
  });

  // Feedback tag
  const ft = document.getElementById('feedback-tag');
  ft.textContent = isCorrect ? '✓ Correct' : '✗ Wrong';
  ft.classList.add(isCorrect ? 'correct' : 'wrong');
  ft.style.display = 'block';

  // Reveal name + hint
  document.getElementById('celeb-name').classList.add('revealed');
  document.getElementById('celeb-hint').classList.add('revealed');
  document.getElementById('waiting-label').style.opacity = '0';

  // Update score badge
  document.getElementById('score-badge').textContent = `Score: ${score}`;

  setTimeout(() => {
    currentQ++;
    if (currentQ < 20) {
      renderQuestion();
    } else {
      showResults();
    }
  }, 1600);
}

function showResults() {
  show('results');

  const passed  = score >= 15;
  const wrong   = 20 - score;
  const pct     = (score / 20) * 100;

  document.getElementById('result-emoji').textContent  = passed ? '🏆' : '📚';
  document.getElementById('result-rating').textContent = passed ? 'GOOD' : 'POOR';
  document.getElementById('result-rating').className   = `result-rating ${passed ? 'good' : 'poor'}`;
  document.getElementById('result-title').textContent  = passed ? 'You really know South India!' : 'Time to brush up!';
  document.getElementById('result-title').className    = `result-title ${passed ? 'good' : 'poor'}`;
  document.getElementById('result-num').textContent    = score;
  document.getElementById('result-desc').textContent   = passed
    ? `Excellent! You correctly identified ${score} out of 20 South Indian celebrities — you clearly know your Tamil Nadu, Kerala, Karnataka, and Andhra/Telangana icons!`
    : `You got ${score} out of 20. You need at least 15 to pass. Keep exploring South Indian cinema, music & sports, then give it another shot!`;

  document.getElementById('bd-correct').textContent = `✓ ${score} correct`;
  document.getElementById('bd-wrong').textContent   = `✗ ${wrong} wrong`;

  const fill = document.getElementById('bar-fill');
  fill.className = `bar-fill ${passed ? 'good' : 'poor'}`;
  fill.style.width = '0%';
  setTimeout(() => { fill.style.width = `${pct}%`; }, 120);
}
