/**
 * ? Перебирающие методы массивов
 */

const users = [
   {
      name: 'Alexey',
      age: 27,
      isActive: false,
      balance: 300,
      id: 1,
      gender: 'male',
   },
   {
      name: 'Oleg',
      age: 33,
      isActive: true,
      balance: 1500,
      id: 2,
      gender: 'other',
   },
   {
      name: 'Nikolay',
      age: 24,
      isActive: true,
      balance: 500,
      id: 3,
      gender: 'male',
   },
   {
      name: 'Irina',
      age: 19,
      isActive: false,
      balance: 900,
      id: 4,
      gender: 'female',
   },
];

//* forEach - перебирает все элементы массива, ничего не возвращает
users.forEach((user, index, arr) => {
   console.log(user.name);
});
console.log(`----------------------`);

//* filter - возвращает новый массив с элементами соответствующими переданным в коллбэк условиям
const usersLess30 = users.filter(user => user.age < 30);
console.log(usersLess30);
console.log(`----------------------`);
const userActive = users.filter(user => user.isActive);
console.log(userActive);
console.log(`----------------------`);

//* map - создает новый массив из того, что возвращает коллбэк
const usersName = users.map(user => user.name);
console.log(usersName);
console.log(`----------------------`);
const newUsersObject = users.map(user => ({ user: user.name, age: user.age }));
console.log(newUsersObject);
console.log(`----------------------`);

//* reduce - позволяет развернуть / преобразовать массив или что-то посчитать
// первый параметр коллбэк - (аккумулятор, элемент массива, индекс, массив)
// второй параметр - стартовое значение аккумулятора (если не передать, то первый элемент массива)
const totalBalance = users.reduce((acc, user, index, arr) => {
   return (acc += user.balance);
}, 0);
console.log(totalBalance);
console.log(`----------------------`);
let usersIdObject = users.reduce((acc, user) => {
   acc[user.id] = user;
   return acc;
}, {});
console.log(usersIdObject);
console.log(`----------------------`);

//* some / every
//Метод some возвращает true, если хотя бы один элемент массива соответствует условию в коллбэке
//Метод every возвращает true, если все элементы массива удовлетворяют условию в коллбэке

const isHasFemaleUser = users.some(user => user.gender === 'female');
console.log(isHasFemaleUser);
console.log(`----------------------`);
const isAllUsersAreFemale = users.every(user => user.gender === 'female');
console.log(isAllUsersAreFemale);
console.log(`----------------------`);
const isAllUsers18 = users.every(user => user.age >= 18);
console.log(isAllUsers18);
console.log(`----------------------`);

//* find - позволяет найти элемент массива

const user = users.find(user => user.name === 'Oleg');
console.log(user);
console.log(`----------------------`);

//* sort - метод сортировки. Изменяет исходный массив
const namesArray = ['Oleg', 'Anna', 'Denis'];
namesArray.sort();
console.log(namesArray);
console.log(`----------------------`);
//!!! числа как и строки сортируются по лексическому значению
const numbersArray = [25, 14, 10, 4, 125];
numbersArray.sort();
console.log(numbersArray);
console.log(`----------------------`);
//!!! для корректной сортировки чисел, нужно использовать такой способ
//!! коллбэк возвращает число либо больше нуля, либо меньше нуля, либо ноль
numbersArray.sort((prev, next) => prev - next); // prev - next - сортировка по возрастанию. next - prev - по убыванию
console.log(numbersArray);
console.log(`----------------------`);
//сортировка объектов
users.sort((prevUser, nextUser) => prevUser.age - nextUser.age);
console.log(users);
console.log(`----------------------`);
