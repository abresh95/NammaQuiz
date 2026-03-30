const hash = window.location.hash.slice(1);

if (!hash || hash.length < 2 || hash.length % 2 !== 0) {
  document.getElementById('result-title').textContent = 'No results found.';
  document.getElementById('result-desc').textContent = 'Please play the quiz first.';
} else {
  const total = hash.length / 2;
  // Decode: each pair of hex chars = celebIdx (6 bits) + chosenIdx (2 bits)
  const answers = [];
  for (let i = 0; i < hash.length; i += 2) {
    const byte = parseInt(hash.slice(i, i + 2), 16);
    const celebIdx = byte >> 2;
    const chosenIdx = byte & 3;
    const celeb = CELEBRITIES[celebIdx];
    const chosen = STATES[chosenIdx];
    const isCorrect = chosen === celeb.state;
    answers.push({ celeb, correct: celeb.state, chosen, isCorrect });
  }

  const score = answers.filter(a => a.isCorrect).length;
  const passThreshold = Math.ceil(total * 0.75);
  const passed = score >= passThreshold;
  const wrong = total - score;
  const pct = (score / total) * 100;

  document.getElementById('result-emoji').textContent  = passed ? '🏆' : '📚';
  document.getElementById('result-rating').textContent = passed ? 'GOOD' : 'POOR';
  document.getElementById('result-rating').className   = `result-rating ${passed ? 'good' : 'poor'}`;
  document.getElementById('result-title').textContent  = passed ? 'You really know South India!' : 'Time to brush up!';
  document.getElementById('result-title').className    = `result-title ${passed ? 'good' : 'poor'}`;
  document.getElementById('result-num').textContent    = score;
  document.getElementById('result-total').textContent  = total;
  document.getElementById('result-desc').textContent   = passed
    ? `Excellent! You correctly identified ${score} out of ${total} South Indian celebrities — you clearly know your Tamil Nadu, Kerala, Karnataka, and Andhra/Telangana icons!`
    : `You got ${score} out of ${total}. You need at least ${passThreshold} to pass. Keep exploring South Indian cinema, music & sports, then give it another shot!`;

  document.getElementById('bd-correct').textContent = `✓ ${score} correct`;
  document.getElementById('bd-wrong').textContent   = `✗ ${wrong} wrong`;
  document.getElementById('threshold-text').textContent = `Pass (${passThreshold})`;

  const fill = document.getElementById('bar-fill');
  fill.className = `bar-fill ${passed ? 'good' : 'poor'}`;
  fill.style.width = '0%';
  setTimeout(() => { fill.style.width = `${pct}%`; }, 120);

  const list = document.getElementById('answer-list');
  answers.forEach((a, i) => {
    const row = document.createElement('div');
    row.className = `answer-row ${a.isCorrect ? 'correct' : 'wrong'}`;
    row.innerHTML = `
      <span class="answer-num">${i + 1}</span>
      <img class="answer-img" src="${a.celeb.img}" alt="${a.celeb.name}" onerror="this.style.display='none'">
      <div class="answer-info">
        <span class="answer-name">${a.celeb.name}</span>
        <span class="answer-state">${a.isCorrect
          ? '✓ ' + a.correct
          : '✗ You said: ' + a.chosen + '<br>Correct: ' + a.correct
        }</span>
      </div>
    `;
    list.appendChild(row);
  });
}

function shareResults() {
  const url = window.location.href;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => {
      document.getElementById('share-hint').textContent = 'Link copied!';
      setTimeout(() => { document.getElementById('share-hint').textContent = ''; }, 2500);
    });
  } else {
    prompt('Copy this link:', url);
  }
}
