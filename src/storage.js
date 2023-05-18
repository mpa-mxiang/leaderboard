const typedName = document.querySelector('#name');
const typedScore = document.querySelector('#score');
const newInput = document.querySelector('form');
const scoreData = JSON.parse(localStorage.getItem('scoreData')) || { name: '', score: '' };

// Update input fields with saved data on page load
if (scoreData.name) {
  typedName.value = scoreData.name;
}
if (scoreData.score) {
  typedScore.value = scoreData.score;
}

// Update scoreData with input values on change
newInput.addEventListener('input', (event) => {
  if (event.target.id === 'name') {
    scoreData.name = event.target.value;
  }
  if (event.target.id === 'score') {
    scoreData.score = event.target.value;
  }
  localStorage.setItem('scoreData', JSON.stringify(scoreData));
});

// Clear scoreData and localStorage on form submit
newInput.addEventListener('submit', (event) => {
  event.preventDefault();
  scoreData.name = '';
  scoreData.score = '';
  localStorage.removeItem('scoreData');
});
