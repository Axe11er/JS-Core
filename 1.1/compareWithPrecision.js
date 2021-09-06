/**
 * TODO Напишите функцию, которая сравнивает два числа с определенной погрешностью.

Пример:

compareWithPrecision(0.1 + 0.2, 0.3, 0.0001) // true
 */

const compareWithPrecision = (a, b, precision) =>
   Math.max(a, b) - Math.min(a, b) <= precision;

console.log(compareWithPrecision(-1, -2, 2));
