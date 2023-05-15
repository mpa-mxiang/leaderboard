import './style.css';
import { postScore, getScore } from './api';

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

const createScores=()=>{
  const form = document.getElementById('list-form');
  const formName = document.getElementById('name');
  const formScore = document.getElementById('score');
  form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const newName = formName.value;
    const newScore = Number(formScore.value);
    console.log(postScore);
    const score = {
      user: newName,
      score: newScore,
    }
    postScore(score);
    refreshScores();
  });

}

createScores();

const refreshScores = async () => {
  const scoreList = document.getElementById('scoreList');
  try {
    const scores = await getScores();
    scoreList.innerHTML = '';
    scores.forEach(score => {
      const scoreItem = document.createElement('li');
      scoreItem.innerText = `${score.user}: ${score.score}`;
      scoreList.appendChild(scoreItem);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

const refreshButton = document.getElementById('refresh');
refreshButton.addEventListener('click', refreshScores);
