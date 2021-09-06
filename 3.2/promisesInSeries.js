/**
 * TODO Напишите функцию, которая принимает массив асинхронных функций и последовательно(следующая начинается, когда закончилась предыдущая) вызывает их, передавая в аргументы результат вызова предыдущей функции.

Пример:

const firstPromise = () =>
  new Promise((resolve) => setTimeout(() => resolve(300)), 300);

const secondPromise = () =>
  new Promise((resolve) => setTimeout(() => resolve(200)), 200);

const thirdPromise = () =>
  new Promise((resolve) => setTimeout(() => resolve(100)), 100);

promisesInSeries([firstPromise, secondPromise, thirdPromise]);
// Выполнит resolve(300) через 300 мс, потом resolve(200) через 200 мс, потом resolve(100) через 100 мс
 */

// const promisesInSeries = async asyncFns => {
//    const result = [];
//    for (const fn of asyncFns) {
//       result.push(await fn(result[result.length - 1]));
//    }
//    console.log(result);
//    return result[result.length - 1];
// };

const promisesInSeries = asyncFns => {
   const result = [];
   return asyncFns
      .reduce(
         (prev, next) => prev.then(next).then(fnRes => result.push(fnRes)),
         Promise.resolve()
      )
      .then(() => result);
};

const promisesInSeries = async asyncFns => {
   const result = [];
   await asyncFns.reduce((prev, next) => {
      return prev.then(next).then(fnRes => result.push(fnRes));
   }, Promise.resolve());
   return result;
};

const firstPromise = () =>
   new Promise(resolve => setTimeout(() => resolve(300)), 300);

const secondPromise = () =>
   new Promise(resolve => setTimeout(() => resolve(200)), 200);

const thirdPromise = () =>
   new Promise(resolve => setTimeout(() => resolve(100)), 100);

console.log(
   promisesInSeries([firstPromise, secondPromise, thirdPromise]).then(
      console.log
   )
);

// promisesInSeries([firstPromise, secondPromise, thirdPromise]);
