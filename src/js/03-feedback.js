// В HTML есть разметка формы. Напиши скрипт который будет сохранять значения полей в локальное хранилище когда пользователь что-то печатает.

// Выполняй это задание в файлах 03-feedback.html и 03-feedback.js. Разбей его на несколько подзадач:

// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. В противном случае поля должны быть пустыми.
// При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.
// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle.
// =====================================================
// import throttle from 'lodash.throttle';

// const containerFormEl = document.querySelector('.feedback-form');
// const textareaFormEl = document.querySelector('.feedback-form textarea');
// const inputFormEl = containerFormEl.firstElementChild;
// const textareaFormEl = inputFormEl.nextElementSibling;
// const buttonEl = containerFormEl.lastElementChild;
// const STORAGE_KEY = 'feedback-form-state';
// const formData = {};

// inputFormEl.addEventListener('input', onLoginInput);
// containerFormEl.addEventListener('submit', onFormSudmit);
// textareaFormEl.addEventListener('input', throttle(onTextareaInput, 500));

// populateTextarea();

// function onFormSudmit(evt) {
//   evt.preventDefault();
//   evt.target.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

// function onTextareaInput(evt) {
//   const message = evt.target.value;
//   console.log(message);
//   localStorage.setItem(STORAGE_KEY, message);
// }

// function populateTextarea(evt) {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);
//   if (savedMessage) {
//     textareaFormEl.value = savedMessage;
//     // email.value = savedMessage.email || '';
//     // message.value = savedMessage.message || '';
//   }
// }
// ===========================================================
import throttle from 'lodash.throttle';

const containerFormEl = document.querySelector('.feedback-form');
const inputFormEl = document.querySelector('.feedback-form input');
const textareaFormEl = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

containerFormEl.addEventListener('submit', onFormSudmit);
containerFormEl.addEventListener('input', throttle(onFormInput, 500));

populateInput();

function onFormSudmit(evt) {
  evt.preventDefault();
  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  console.log(formData);
  const formDataString = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, formDataString);
}

function populateInput() {
  const savedMessageString = localStorage.getItem(STORAGE_KEY);
  const savedMessage = JSON.parse(savedMessageString);
  // console.log(savedMessage);
  if (savedMessage) {
    textareaFormEl.value = savedMessage.message || '';
    inputFormEl.value = savedMessage.email || '';
  }
}

// containerFormEl.addEventListener('input', e => {
//   formData[e.target.name] = e.target.value;
//   console.log(formData);
//   const formDataString = JSON.stringify(formData);
//   const savedLocal = formDataString.getItem(STORAGE_KEY);
//   if (savedLocal) {
//     textareaFormEl.value = savedLocal;
//   }
// });
// ===================================
