/**
 * TODO Напишите функцию isEmpty, которая возвращает true, если у объекта нет свойств(у самого объекта, не у прототипов), иначе возвращает false.

const obj = Object.create(null);
isEmpty(obj); // -> true
isEmpty({ prop: 'value' }); // -> false
Напишите функцию isEmptyWithProtos, которая возвращает true, если у объекта и его прототипов(не включая Object.prototype) нет свойств, иначе возвращает false.

const protoObj = Object.create(null);
const obj = Object.create(protoObj);
isEmptyWithProtos(obj); // -> true
isEmptyWithProtos({}); // -> false
 */

// const isEmpty = obj => !Object.keys(obj).length;

const isEmpty = obj => {
   for (key in obj) {
      if (obj.hasOwnProperty(key)) return false;
   }
   return true;
};

const isEmptyWithProtos = obj => {
   for (key in obj) {
      return false;
   }
   return true;
};

const obj = Object.create(null);
const obj2 = { prop: 'value' };
console.log(isEmpty(obj)); // -> true
console.log(isEmpty({ prop: 'value' })); // -> false
console.log(isEmptyWithProtos(obj)); // -> true
console.log(isEmptyWithProtos({})); // //-> false > true
console.log(obj2.__proto__);
