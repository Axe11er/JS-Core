/**
 * TODO Транслятор событий
Cоздайте класс EventEmitter для управления событиями. У этого класса должны быть следующие методы:
.on(event, callback) - добавить обработчик события

.off(event, callback) - удалить обработчик события

.once(event, callback) - добавить обработчик события, который сработает единожды

.emit(event, [...arg]) - вызвать все обработчики события event, можно передать аргументы

Расширьте EventEmitter классом BroadcastEventEmitter так, чтобы была возможность вызвать все обработчики всех событий:
emit("*", [...arg]) - вызвать все обработчики событий, можно передать аргументы
Event Emitter можно перевести как “транслятор” событий.

Представьте себе такую ситуацию: происходит какое-то событие, например пользователь кликнул на кнопку, на которое должны отреагировать разные участки программы. Чтобы проще организовать такую логику, используют шаблон Event Emitter, который можно реализовать разными способами. Основная идея в том, чтобы грамотно создать основу для управления событиями и реализовать возможность любым элементам “подписаться” на него (и быть в курсе происходящего).

Например:

let input = document.querySelector('input');
let button = document.querySelector('button');
let h1 = document.querySelector('h1');

let emitter = new EventEmitter();

emitter.on('event:name-changed', data => {
  h1.innerHTML = `New value is: ${data.name}`;
});
/*
подписываемся на событие 'event:name-changed' и передаём обработчик вторым аргументом. Теперь при возникновении этого события, мы будем вызывать обработчик и обновим текст заголовка при возникновении этого события.
*/
/*
button.addEventListener('click', () => {
   emitter.emit('event:name-changed', {name: input.value});
 });
 /*
 добавляем обработчик события 'клик' на кнопку. Этот обработчик производит событие 'event:name-changed' и вызывает все функции, подписанные на это события, передавая им строку из input.
 */

class EventEmitter {
   constructor() {
      this.events = {};
   }
   on(eventName, callback) {
      const event = this.events[eventName];
      if (event) event.push(callback);
      else this.events[eventName] = [callback];
   }
   off(eventName, callback) {
      this.events[eventName].forEach((event, index, arr) => {
         if (event === callback) arr.splice(index, 1);
      });
   }
   once(eventName, callback) {
      const fn = () => {
         callback(arguments);
         this.off(eventName, fn);
      };
      this.on(eventName, fn);
   }
   emit(eventName, ...args) {
      this.events[eventName].forEach(fn => fn(...args));
   }
}

class BroadcastEventEmitter extends EventEmitter {
   emit(eventName, ...args) {
      if (eventName !== '*') super.emit(eventName, ...args);
      else {
         for (let key in this.events) {
            super.emit(key, ...args);
         }
      }
   }
}

const emitter = new BroadcastEventEmitter();
const fn1 = () => {
   console.log('hello');
};
const fn2 = () => {
   console.log('hello2');
};
const fn3 = () => {
   console.log('hello3');
};

console.log(emitter.once('click', fn1));
console.dir(emitter.events);
console.log(emitter.emit('click'));
console.log(emitter);
console.log(emitter.events);
console.log(emitter.emit('click'));
console.log(emitter.on('print', fn2));
console.log(emitter.on('click', fn3));
console.log(emitter.emit('*'));
console.log(emitter.emit('*'));
console.log(emitter.emit('click'));
