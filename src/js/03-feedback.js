import throttle from 'lodash.throttle';
const feedbackForm = document.querySelector('.feedback-form');
const input = document.querySelector('[type = email]');
const textarea = document.querySelector('[name = message]');
const KEY_STORAGE = 'feedback-form-state';

function inputEmail() {
  const feedback = {
    email: input.value,
    message: textarea.value,
  };

  localStorage.setItem(KEY_STORAGE, JSON.stringify(feedback));
}
function loadFormState() {
  const savedFeedback = localStorage.getItem(KEY_STORAGE);
  if (savedFeedback) {
    const { email, message } = JSON.parse(savedFeedback);
    input.value = email;
    textarea.value = message;
  }
}

function onSubmit(event) {
  event.preventDefault();
  const feedback = {
    email: input.value,
    message: textarea.value,
  };
  console.log(feedback);
  localStorage.removeItem(KEY_STORAGE);
  input.value = '';
  textarea.value = '';
}

feedbackForm.addEventListener('input', throttle(inputEmail, 500));
feedbackForm.addEventListener('submit', onSubmit);
window.addEventListener('load', loadFormState);
