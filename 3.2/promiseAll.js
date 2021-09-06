/**
 * TODO Напишите асинхронную функцию, которая принимает массив промисов и возвращает массив результатов вызова этих промисов.

Пример:

const firstPromise = new Promise((resolve) =>
  setTimeout(() => resolve(300), 300)
);

const secondPromise = new Promise((resolve) =>
  setTimeout(() => resolve(200), 200)
);

const thirdPromise = new Promise((resolve) =>
  setTimeout(() => resolve(100), 100)
);

promiseAll([firstPromise, secondPromise, thirdPromise])
    .then(console.log); // [300, 200, 100]
 */

const promiseAll = (promises = []) => {
   const arr = [];
   let counter = promises.length;
   return new Promise((resolve, reject) => {
      if (promises.length === 0) resolve(arr);
      promises.forEach((promise, index) => {
         promise
            .then(result => {
               arr[index] = result;
               counter--;
               if (counter === 0) resolve(arr);
            })
            .catch(reject);
      });
   });
};

const firstPromise = new Promise(resolve =>
   setTimeout(() => resolve(300), 300)
);
const secondPromise = new Promise(resolve =>
   setTimeout(() => resolve(200), 200)
);

const thirdPromise = new Promise(resolve =>
   setTimeout(() => resolve(100), 100)
);

promiseAll([firstPromise, secondPromise, thirdPromise]).then(console.log); // [300, 200, 100]
