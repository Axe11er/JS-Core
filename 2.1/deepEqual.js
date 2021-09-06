/**
 * TODO Напишите функцию, которая проверяет на равенство два объекта, учитывая их вложенность.

Два объекта считаются равными, если у них все свойства одинаковы. В случае, если одно из свойств - само объект, мы сравниваем на равенство эти объекты по тому же алгоритму. Пример:

const firstObject = {
  a: {
    b: {
      c: 1,
      d: 'string',
      e: {
        num: 1
      }
    }
  }
};

const secondObject = {
  a: {
    b: {
      e: {
        num: 1,
      }
      d: 'string',
      c: 1,
    }
  }
};

deepEqual(firstObject, secondObject); // true
deepEqual({ a:1, b: 3 }, { b: 2, a: 1}); // false
deepEqual(1, 2); // false
deepEqual(true, false); // false
 */

const firstObject = {
   a: {
      b: {
         c: 1,
         d: 'string',
         e: {
            num: 1,
         },
      },
   },
};

const secondObject = {
   a: {
      b: {
         e: {
            num: 1,
         },
         d: 'string',
         c: 1,
      },
   },
};

// const deepEqual = (obj1, obj2) => {
//    if (obj1 === obj2) {
//       return true;
//    } else if (
//       typeof obj1 === 'object' &&
//       obj1 !== null &&
//       typeof obj2 === 'object' &&
//       obj2 !== null
//    ) {
//       if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

//       for (let key in obj1) {
//          if (obj2.hasOwnProperty(key)) {
//             if (!deepEqual(obj1[key], obj2[key])) return false;
//          } else return false;
//       }

//       return true;
//    } else return false;
// };
const deepEqual = (obj1, obj2) => {
   return obj1 && obj2 && typeof obj1 === 'object' && typeof obj2 === 'object'
      ? Object.keys(obj1).length === Object.keys(obj2).length &&
           Object.keys(obj1).every(key => deepEqual(obj1[key], obj2[key]))
      : obj1 === obj2;
};



// var comparable = o => (typeof o != 'object' || !o)? o :
//   Object.keys(o).sort().reduce((c, key) => (c[key] = comparable(o[key]), c), {});

// // Demo:

// var a = { a: 1, c: 4, b: [2, 3], d: { e: '5', f: null } };
// var b = { b: [2, 3], c: 4, d: { f: null, e: '5' }, a: 1 };

// console.log(JSON.stringify(comparable(a)));
// console.log(JSON.stringify(comparable(b)));
// console.log(JSON.stringify(comparable(a)) == JSON.stringify(comparable(b)));

console.log(deepEqual(firstObject, secondObject));
