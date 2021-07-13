/**
 * TODO Написать свою функцию bind
 */

const bind = (context, fn) => {
   return function (...args) {
      fn.apply(context, args);
   };
};

function logPerson(phone) {
   console.log(`Person ${this.name}, ${this.age}, ${this.job}, ${phone}`);
}

const person1 = { name: 'Михаил', age: 22, job: 'Frontend' };
const person2 = { name: 'Елена', age: 19, job: 'SMM' };

bind(person1, logPerson)('8-800-2222525');
bind(person2, logPerson)();
