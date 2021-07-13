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

const obj = {
   a: {
      b: {
         c: {
            d: 'Привет!',
         },
      },
   },
};

const arr = ['a', 'b', 'c', 'd'];

function optionalChaining(obj, chain) {
   function compareProps(object, index) {
      let key = chain[index];
      let value = object[key];

      if (typeof value === 'undefined') {
         return;
      }

      let nextIndex = index + 1;

      if (nextIndex < chain.length) {
         return compareProps(value, nextIndex);
      }

      return value;
   }

   return compareProps(obj, 0);
}

console.log(optionalChaining(obj, arr));
