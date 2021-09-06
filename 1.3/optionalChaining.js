/**
 * TODO Напишите функцию, которая принимает первым параметром объект, вторым - массив из цепочки свойств, по которому нужно пройти, чтобы получить значение. Если какое-то из свойств не найдено - функция возвращает undefined.
 * 
 * * Пример:

const obj = {
  a: {
    b: {
      c: {
        d: 'Привет!'
      }
    }
  }
}
optionalChaining(obj, ["a", "b", "c", "d"]) // Привет
optionalChaining(obj, ["a", "b", "c", "d", "e"]) // undefined
 */
'use strict';

const obj = {
   a: {
      b: {
         c: {
            d: 'Привет',
         },
      },
   },
};

const arr = ['a', 'b', 'c', 'd'];

// console.log(optionalChaining(obj, arr));

// const optionalChaining = (obj, [key, ...chain]) => obj[key] === undefined ? undefined : path.length ? optionalChaining(obj[key], chain) : obj[key];

const optionalChaining = (obj, [key, ...chain]) => {
   return !obj[key] || chain.length === 0
      ? obj[key]
      : optionalChaining(obj[key], chain);
};

console.log(optionalChaining(obj, arr));
