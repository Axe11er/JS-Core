/**
 * TODO Реализуйте функцию moveToStart, которая принимает массив и число n. Функция должна переставить n элементов массива из конца в начало. Если второй аргумент больше или равен длине массива, то должен быть возвращен новый массив, порядок элементов которого совпадает с изначальным. Функция должна возвращать новый массив, а не мутировать старый.
 */

const moveToStart = (arr, n) => {
   let newArray = arr.slice(0);
   if (n >= arr.length) {
      return newArray;
   }
   let result = newArray.splice(-n).concat(newArray);
   console.log(newArray);
   return result;
};

console.log(moveToStart([1, 2, 3, 4, 5], 1));
