/**
 * TODO Напишите функцию, которая создает объект, состоящий из инвертированных ключей и значений объекта.

Если объект содержит повторяющиеся значения, последующие значения перезаписывают присвоения свойств предыдущих значений.

Пример:

invert({ a: 1, b: 2, c: 3 }) // { 1: a, 2: b, 3: c }
 */

// const invert = obj => {
//    const keys = Object.keys(obj);
//    const values = Object.values(obj);
//    const invertedObject = {};
//    for (let i = 0; i < keys.length; i++) {
//       invertedObject[values[i]] = keys[i];
//    }
//    return invertedObject;
// };

// const invert = obj => {
//    const keysAndValues = Object.entries(obj);
//    keysAndValues.forEach(item => item.reverse());
//    const invertedObject = Object.fromEntries(keysAndValues);
//    return invertedObject;
// };

const invert = obj =>
   Object.fromEntries(Object.entries(obj).map(item => item.reverse()));

console.log(invert({ a: 1, b: 2, c: 3, d: 3 }));
