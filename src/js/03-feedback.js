import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');
const formData = {};


formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

setSavesData();
function onFormSubmit(event) {
    event.preventDefault();
    const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
    console.log(savedData);
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
}

function onFormInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
    
function setSavesData() {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (savedData) {
        inputEl.value = savedData.email;
        textareaEl.value = savedData.message;
      }
}