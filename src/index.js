import './style.css';
import './storage.js';
const scores = [
  { description: 'Name', point: 100, index: 1 },
  { description: 'Name', point: 20, index: 2 },
  { description: 'Name', point: 50, index: 3 },
  { description: 'Name', point: 78, index: 4 },
  { description: 'Name', point: 125, index: 5 },
  { description: 'Name', point: 77, index: 6 },
  { description: 'Name', point: 42, index: 7 },
];

function renderScores() {
  const scoreList = document.getElementById('scoreList');

  scores.sort((a, b) => a.index - b.index);

  scores.forEach((score) => {
    const newScore = document.createElement('li');
    newScore.innerHTML = `${score.description}:${score.point}`;

    scoreList.appendChild(newScore);
  });
}

renderScores();
