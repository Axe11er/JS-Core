/**
 * TODO Реализуйте набор готовых к использованию функций для arr.filter:

inRange(a, b) – число находится между a и b (включительно). 
Если аргумент или элемент массива можно привести к числу,
то функция должна сначала приводить его к числу, а потом проверять условие. 
Если a > b, то функция должна возвращать false для всех элементов массива

inArray([...]) – значение находится в данном массиве.

notInArray([...]) – значение не находится в данном массиве.
Они должны использоваться таким образом:

arr.filter(inRange(3,6)) – выбирает только значения между 3 и 6 (включительно).
arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
arr.filter(notInArray([1,2,3])) – выбирает только те элементы,
которые не совпадают ни с одним из элементов массива
Пример:

let arr = [1, 2, 3, 4, 5, 6, 7, true, undefined, NaN];

console.log(arr.filter(inRange(3, 6))); // [3, 4, 5, 6]
console.log(arr.filter(inArray([1, 2, 10, undefined]))); // [1, 2, undefined]
console.log(arr.filter(notInArray([1, 2, 3, 4, 5, 6, 7, true]))); // [undefined, NaN]
 */

let arr = [1, 2, 3, 4, 5, 6, 7, true, undefined, NaN];

const inRange = (a, b) => (item) => a <= item && item <= b;

const inArray = (arr) => (item) => arr.includes(item);

const notInArray = (arr) => (item) => !arr.includes(item);

console.log(arr.filter(inRange(3, 6)));
console.log(arr.filter(inArray([1, 2, 3, 4, 11, 10, undefined])));
console.log(arr.filter(notInArray([1, 2, 3, 4, 5, 6, 7, true])));