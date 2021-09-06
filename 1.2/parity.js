/**
 * TODO Реализуйте функцию getNumbersByParity, которая принимает массив чисел в качестве первого аргумента и строку "even" или "odd" в качестве второго. Функция должна вернуть новый массив, состоящий из четных чисел, если вторым аргументом было передано "even" и нечетных, если было передано "odd". Оба аргумента функции обязательны. Первый обязательно будет массивом, а второй - строкой "even"/"odd".
 */

// const getNumbersByParity = (data, parity) => {
//    if ((Array.isArray(data) && parity === 'even') || parity === 'odd') {
//       const newArray = data.slice(0);
//       const result = [];
//       for (const item of newArray) {
//          if (parity === 'even') {
//             if (item % 2 === 0) {
//                result.push(item);
//             }
//          } else if (parity === 'odd') {
//             if (item % 2 !== 0) {
//                result.push(item);
//             }
//          }
//       }
//       return result;
//    }
// };

const getNumbersByParity = (data, parity) =>
   data.reduce((result, item) => {
      if (parity === 'even' && item % 2 === 0) result.push(item);
      if (parity === 'odd' && item % 2 !== 0) result.push(item);
      return result;
   }, []);

console.log(getNumbersByParity([1, 2, 3, 4, 5, 6], 'odd'));
