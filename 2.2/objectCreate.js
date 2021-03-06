/**
 * TODO Object Create
В данном задании вам нужно будет реализовать полифл Object.create.

Реализуйте аналог стандартной фунции Object.create - создаёт и возвращает новый объект, прототипом которого является первый аргумент, переданный в функцию. Если передан второй аргумент - устанавливает его в качестве свойств для нового объекта. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create

Ваша функция должна принимать два параметра:

prototype (обязательный) - объект или null (но не undefined), который будет являтся прототипом для созданного объекта.
properties (optional) - аргумент, который установит свойства для нового объекта (будет передан в Object.defineProperties).
Если параметры фунции отсутствуют или prototype НЕ является объектом или null, то необходимо пробросить TypeError.

В результате Object.create вернет созданный объект с внутренним свойством [[Prototype]], установленным в значение переданного в аргументе prototype. Если properties передан и НЕ является undefined, то будет вызван Object.defineProperties(obj, properties), где obj - объект,который должен быть возвращен из Object.create.

Подсказки:

Для доступа к внутреннему свойству объекта [[Prototype]] используйте методы Object.getPrototypeOf/Object.setPrototypeOf.
В JavaScript все является объектом, кроме: null и undefined.
NaN, Infinity, /regular expression literals/, function(){} - это всё тоже объекты.
Пример:

const A = {
  objectName: 'Object A',
  getObjectName: function() {
    return `This is ${this.objectName}!`;
  },
};

const B = Object.create(A, {
  objectName: {
    value: 'Object B',
  },
});

A.getObjectName(); // This is Object A!
B.getObjectName(); // This is Object B!

A.hasOwnProperty('getObjectName'); // true
A.hasOwnProperty('objectName'); // true

B.hasOwnProperty('getObjectName'); // false
B.hasOwnProperty('objectName'); // true
 */

Object.create = function (proto, propertiesObject) {
   if (arguments.length === 0 || typeof proto !== 'object')
      throw new TypeError();
   const newObj = {};
   if (propertiesObject) {
      Object.defineProperties(newObj, propertiesObject);
   }
   Object.setPrototypeOf(newObj, proto);
   return newObj;
};

const A = {
   objectName: 'Object A',
   getObjectName: function () {
      return `This is ${this.objectName}!`;
   },
};

const B = Object.create(A, {
   objectName: {
      value: 'Object B',
      enumerable: true,
      writable: true,
      configurable: true,
   },
   ObjectDescription: {
      value: 'description',
      enumerable: true,
      writable: true,
      configurable: true,
   },
});

console.log(A.getObjectName()); // This is Object A!
console.log(B.getObjectName()); // This is Object B!

console.log(A.hasOwnProperty('getObjectName')); // true
console.log(A.hasOwnProperty('objectName')); // true

console.log(B.hasOwnProperty('getObjectName')); // false
console.log(B.hasOwnProperty('objectName')); // true

const C = Object.create(A);
const check = A !== C && typeof A === 'object' && typeof C === 'object';
console.log(check);

const D = Object.create(null);
console.log(A);
console.log(B);
console.log(C);
console.log(D);
