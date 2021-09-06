/**
 * TODO csvGenerator
Нужно написать функцию, которая переводит двумерный массив (массив массивов) в CSV формат и возвращать строку О формате: https://ru.wikipedia.org/wiki/CSV (детали в разделе "Спецификация")

Допустимые значения в качестве элементов массива - числа и строки Если встречается функция - выбрасывать ошибку с текстом "Unexpected value"

Функция принимает: data - массив массивов, содержашие числа или строки

Функция возвращает: Строку в формате CSV

Пример:

arraysToCsv([[1, 2], ['a', 'b']]) // '1,2\na,b'
arraysToCsv([[1, 2], ['a,b', 'c,d']]) // '1,2\n"a,b","c,d"'
 */

const arrayToCsv = data =>
   data.map(item => item.map(value => escapeCSV(value)).join(',')).join('\n');

const escapeCSV = value => {
   if (typeof value !== 'string' && typeof value !== 'number')
      throw new Error('Unexpected value');
   if (typeof value === 'string') {
      if (value.match(/(,|"|\n)/)) {
         value = `"${value.replace(/"/g, '""')}"`;
      }
   }
   return value;
};

const fn = () => {};

console.log(
   arrayToCsv([
      [1, 2],
      ['a', 'b'],
   ])
); // '1,2\na,b'
console.log(
   arrayToCsv([
      [1, 2],
      ['a,b', 'c,d'],
   ])
); // '1,2\n"a,b","c,d"'

console.log(arrayToCsv([['"text"', 'other "long" text']])); // ==> """text""","other ""long"" text"
