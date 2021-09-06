/**
 * TODO Реализуйте функцию getDaysBetweenDates которая принимает на вход две даты и возвращает количество полных дней между ними.

getDaysBetweenDates('1-1-2020', '1-2-2020'); // -> 1

Функция должна корректно работать с объектом Date
getDaysBetweenDates(new Date(2011, 6, 2, 6, 0), new Date(2012, 6, 2, 18, 0)); // -> 366

Функция должна корректно рабоать со значениями в миллисекундах
getDaysBetweenDates(1409796000000, 1409925600000); // -> 1

Если входные параметры - невалидные даты, то функция вовращает NaN:
getDaysBetweenDates('1-1-2020', 'дата'); // -> NaN

Если аргументов меньше 2-х, то функция должна пробросить исключение TypeError
getDaysBetweenDates(null); // -> TypeError

new Date(null) - валидная запись, которая вернёт количество миллисекунд, прошедшее с 01.01.1970 https://en.wikipedia.org/wiki/Unix_time
 */

const getDaysBetweenDates = function (firstDate, secondDate) {
   if (arguments.length < 2) throw new TypeError('TypeError');
   const day = 86400000;
   const a = new Date(firstDate).getTime();
   const b = new Date(secondDate).getTime();
   if (isNaN(a) || isNaN(b)) return NaN;
   const c = b - a;
   if (c < 0 && Math.ceil(c / day) !== -0) return Math.ceil(c / day);
   else if (c > 0) return Math.floor(c / day);
   else return 0;
};

// console.log(getDaysBetweenDates('1-2-2020', '1-1-2020')); //1
// console.log(
//    getDaysBetweenDates(new Date(2011, 6, 2, 6, 0), new Date(2012, 6, 2, 18, 0))
// ); // -> 366
console.log(getDaysBetweenDates('1-1-2020', 'дата')); // -> NaN
// // console.log(getDaysBetweenDates(null, null)); //TypeError
// console.log(getDaysBetweenDates(1409796000000, 1409925600000)); // -> 1
console.log(
   getDaysBetweenDates(
      new Date(2014, 8, 4, 23, 59),
      new Date(2014, 8, 4, 23, 58)
   )
);
