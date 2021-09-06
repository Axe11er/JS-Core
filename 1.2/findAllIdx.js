/**
 * TODO Напишите функцию findAllIdx(arr, value), которая возвращает массив индексов элементов, у которые значение равно value.
 */

const findAllIdx = (arr, value) => {
   return arr.reduce((indexes, item, index) => {
      if (item === value) indexes.push(index);
      return indexes;
   }, []);
};

console.log(findAllIdx([1, 1, 2, 1, 3], 1));
