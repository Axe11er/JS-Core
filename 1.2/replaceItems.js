/**
 * TODO Напишите две функции replaceItemsClear(arr, item, replaceItem) и replaceItemsMutate(arr, item, replaceItem).

Функция replaceItemsClear находит все элементы массива arr, равные item, и возвращает новый массив, в котором на месте найденных значений стоит replaceItem.

Функция replaceItemsMutate реализует тот же функционал, только мутирует входящий массив и возвращает его же.

replaceItemsClear([1,2,3,4,2], 2, 'a'); //  [1,'a',3,4,'a']
const arr = [1,2,3,4,2];
replaceItemsMutate(arr, 2, 'a');
console.log(arr); // [1,'a',3,4,'a']
 */

const replaceItemsClear = (arr, item, replaceItem) =>
   arr.reduce((newArr, element) => {
      newArr.push(element === item ? replaceItem : element);
      return newArr;
   }, []);

const replaceItemsMutate = (arr, item, replaceItem) => {
   arr.forEach((element, index) => {
      if (element === item) arr[index] = replaceItem;
   });
   return arr;
};

const arr = [1, 2, 3, 4, 2];

console.log(replaceItemsClear([1, 2, 3, 4, 2], 2, 'a'));
console.log(replaceItemsMutate(arr, 2, 'a'));
console.log(arr);
