/**
 * ? Методы объектов
 */

const obj1 = {
   name: 'Denis',
   info: {
      skills: ['css', 'html'],
   },
};

const obj2 = {
   name: 'Ivan',
   age: 20,
};
// * Неглубокое копирование
const newObj = Object.assign({}, obj1, obj2);
console.log(newObj);

// * Глубокое копирование с помощью JSON
const objJson = JSON.stringify(newObj);
let newObj2 = JSON.parse(objJson);

// ! более короткая запись
newObj2 = JSON.parse(JSON.stringify(newObj));
console.log(newObj2);
console.log(newObj.info === newObj2.info);

// * Object.keys - возвращает ключи в виде массива
let keys = Object.keys(newObj);
console.log(keys);

// * Object.values - возвращает значения ключей в виде массива
let values = Object.values(newObj);
console.log(values);

// * Object.entries - возвращает массив массивов, где каждый элемент является парой [ключ, значение]
let entries = Object.entries(newObj);
console.log(entries);

// * Object.fromEntries преобразует массив массивов вида [[ключ, значение], [ключ,значение]...] в объект
let fromEntries = Object.fromEntries([
   ['a', 'value'],
   ['b', 'value'],
]);
console.log(fromEntries);