/**
 * TODO В localStorage по ключу "counters" находится JSON c объектом, полями которого являются имена счётчиков, а значениями - числовое значение счётчика. Напишите функцию incrementCounter, которой на вход первым параметром передаётся counterName - имя счётчика.

Задача функцции увеличить значение счётчика counterName на 1 и обновить данные в localStorage. В localStorage может находится невалидный JSON, чтение которого может првести к ошибке, в этом случае функция должна записывать новые данные, где у указанного счетчика будет значение 1. В конце функция должна возвращать значение счетчика после инкремента.

Пример использования:

// в localStorage 1 счетчик: bannerClick = 5
incrementCounter('bannerClick'); // 6
incrementCounter('bannerClose'); // 1
// в localStorage 2 счетчика: bannerClick = 6, bannerClose = 1
 */
localStorage.setItem('counters', {});
localStorage.counters = JSON.stringify({ bannerClick: 5 });

const incrementCounter = counterName => {
   try {
      let counters = JSON.parse(localStorage.counters);
      !counters[counterName]
         ? (counters[counterName] = 1)
         : counters[counterName]++;
      localStorage.counters = JSON.stringify(counters);
      return counters[counterName];
   } catch (error) {
      let counters = {};
      counters[counterName] = 1;
      localStorage.counters = JSON.stringify(counters);
      return counters[counterName];
   }
};

console.log(incrementCounter('buttonClick'));
console.log(incrementCounter('buttonClick'));
console.log(incrementCounter('buttonClick'));
