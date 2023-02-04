// В HTML есть разметка формы. Напиши скрипт который будет сохранять значения полей в локальное хранилище когда пользователь что-то печатает.

// Выполняй это задание в файлах 03-feedback.html и 03-feedback.js. Разбей его на несколько подзадач:

// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. В противном случае поля должны быть пустыми.
// При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.
// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle.

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
player.on('timeupdate', throttle(onPlay, 1000));
function onPlay(e) {
  console.log(e.seconds);
  const time = e.seconds;
  localStorage.setItem('videoplayer-current-time', time);
}
player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
const currentTame = localStorage.getItem('videoplayer-current-time');
const startTame = JSON.parse(currentTame);
console.log(startTame);
player
  .setCurrentTime(currentTame)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
