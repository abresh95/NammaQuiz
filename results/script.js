const hash = window.location.hash.slice(1);

if (!hash || hash.length !== 8) {
  document.getElementById('result-title').textContent = 'No results found.';
  document.getElementById('result-desc').textContent = 'Please play the quiz first.';
} else {
  const chosenIndices = decodeAnswers(hash);
  const answers = CELEBRITIES.map((celeb, i) => {
    const chosen = STATES[chosenIndices[i]];
    const isCorrect = chosen === celeb.state;
    return { celeb, correct: celeb.state, chosen, isCorrect };
  });

  const score = answers.filter(a => a.isCorrect).length;
  const passed = score >= 15;
  const wrong = 20 - score;
  const pct = (score / 20) * 100;

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
