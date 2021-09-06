/**
 * TODO Реализуйте (с использованием рекурсии) функцию getStringCount, которая должна принимать массив или объект и считать количество строк в массиве / значениях объекта с учетом вложенности.
 */

// function getStringCount(object, result = 0) {
//    if (typeof object === 'object' && object !== null) {
//       if (Array.isArray(object)) {
//          for (let item of object) {
//             if (typeof item === 'string') {
//                result++;
//             } else if (typeof item === 'object' && item !== null) {
//                result = getStringCount(item, result);
//             }
//          }
//       } else {
//          for (let key in object) {
//             if (typeof object[key] === 'string') {
//                result++;
//             } else if (
//                typeof object[key] === 'object' &&
//                object[key] !== null
//             ) {
//                result = getStringCount(object[key], result);
//             }
//          }
//       }
//    }

//    return result;
// }

// const getStringCount = (object, result = 0) => {
//    if (typeof object === 'object' && object !== null) {
//       let keys = Object.keys(object);
//       keys.forEach(key => {
//          if (typeof object[key] === 'string') result++;
//          else if (typeof object[key] === 'object' && object[key] !== null) {
//             result = getStringCount(object[key], result);
//          }
//       });
//    }
//    return result;
// };

const getStringCount = (object, result = 0) => {
   if (typeof object === 'object' && object !== null) {
      for (let key in object) {
         if (typeof object[key] === 'string') result++;
         else if (typeof object[key] === 'object' && object[key] !== null) {
            result = getStringCount(object[key], result);
         }
      }
   }
   return result;
};

console.log(
   getStringCount([
      1,
      '1',
      '2',
      { a: 'a', b: 'b', c: ['c', { d: 'd' }] },
      '3',
      [{ e: 'e' }],
   ])
);
