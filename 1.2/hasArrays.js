/**
 * TODO Реализуйте функцию hasArrays, которая принимает массив данных разных типов и возвращает true, если этот массив содержит массив внутри себя. Если нет, функция должна вернуть false.
 */

// const hasArrays = (arr) => {
//    for (const item of arr) {
//       if (Array.isArray(item)) {
//          return true;
//       }
//    }
//    return false;
// };

const hasArrays = arr => arr.some(item => Array.isArray(item));

console.log(hasArrays([12, { 1: 2 }, []]));
