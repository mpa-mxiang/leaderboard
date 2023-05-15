import './style.css';
import './api';

const scores = [
  { name: 'Name', point: 100, index: 1 },
  { name: 'Name', point: 20, index: 2 },
  { name: 'Name', point: 50, index: 3 },
  { name: 'Name', point: 78, index: 4 },
  { name: 'Name', point: 125, index: 5 },
  { name: 'Name', point: 77, index: 6 },
  { name: 'Name', point: 42, index: 7 },
];

function renderScores() {
  const scoreList = document.getElementById('scoreList');

  scores.sort((a, b) => a.index - b.index);

  scores.forEach((score) => {
    const newScore = document.createElement('li');
    newScore.innerHTML = `${score.name}:${score.point}`;

    scoreList.appendChild(newScore);
  });
}

renderScores();
