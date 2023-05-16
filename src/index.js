import './style.css';
import { postScore, getScore } from './api.js';

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

const createScores = () => {
  const form = document.getElementById('list-form');
  const formName = document.getElementById('name');
  const formScore = document.getElementById('score');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newName = formName.value;
    const newScore = Number(formScore.value);
    const score = {
      user: newName,
      score: newScore,
    };
    postScore(score);
  });
};

createScores();

const refreshScores = () => {
  const refreshButton = document.getElementById('refresh');
  const scoreList = document.getElementById('scoreList');
  refreshButton.addEventListener('click', async (event) => {
    event.preventDefault();
    renderScores();
    const refreshNewScores = await getScore();
    scoreList.innerHTML = ''; // clear the list before repopulating
    refreshNewScores.sort((a, b) => a.index - b.index); // sort scores in descending order
    refreshNewScores.forEach((rns) => {
      const newScore = document.createElement('li');
      newScore.innerHTML = `${rns.user}: ${rns.score}`;
      scoreList.appendChild(newScore);
    });
  });
};

refreshScores();
