/**
 * TODO Реализуйте функцию moveToStart, которая принимает массив и число n. Функция должна переставить n элементов массива из конца в начало.

Если второй аргумент больше или равен длине массива, то должен быть возвращен новый массив, порядок элементов которого совпадает с изначальным.

Функция должна возвращать новый массив, а не мутировать старый.

Примеры:

console.log(
  moveToStart([1, 2, 3, 4, 5], 3)
); // [3, 4, 5, 1, 2]

console.log(
  moveToStart([1, 2, 3, 4, 5], 3)
); // [3, 4, 5, 1, 2]

console.log(
  moveToStart([1, 2, 3, 4, 5], 10)
); // [1, 2, 3, 4, 5]
 */

const moveToStart = (arr, n) => {
   const newArray = [...arr];
   if (n >= arr.length) return newArray;
   return newArray.splice(-n).concat(newArray);
};

console.log(moveToStart([1, 2, 3, 4, 5], 3));
