import "core-js/modules/web.timers.js";
import Goblin from './goblin';
import ClickHandler from './clickHandler';
var curBox;
var newBox;
var attemptsLimit = 5;
var goblin = new Goblin(attemptsLimit);
// eslint-disable-next-line
new ClickHandler('.playground');
var gameOn = setInterval(function () {
  do {
    newBox = Math.floor(Math.random() * 16) + 1;
  } while (curBox === newBox);
  try {
    goblin.goblinOff(curBox);
  } catch (err) {
    if (err.message === 'Counter limitation') {
      // eslint-disable-next-line
      alert('GAME OVER!');
      clearInterval(gameOn);
      // удаление значения переменной для прекращения
      // отображения Гоблина после сообщения "GAME OVER!"
      newBox = undefined;
    }
  }
  goblin.goblinOn(newBox);
  curBox = newBox;
}, 1000);
gameOn();