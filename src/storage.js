const formName = document.querySelector('#name');
const formScore = document.querySelector('#score');
const forms = document.getElementById('contact-form');
const formData = JSON.parse(localStorage.getItem('formData')) || {};
const savedData = JSON.parse(localStorage.getItem('formData'));
if (formData.name) {
  formName.value = formData.name;
}
if (formData.score) {
  formScore.value = formData.score;
}
forms.addEventListener('input', (event) => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});
if (savedData) {
  formName.value = savedData.name;
  formScore.value = savedData.email;
}

forms.addEventListener('submit', () => {
  localStorage.clear();
});