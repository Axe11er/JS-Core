/**
 * TODO Словарь
 */

const question = (job) => {
   const jobDictionary = {
      developer: 'что такое JavaScript?',
      teacher: 'какой предмет вы ведете?',
      designer: 'где макет?'
   };
   return (name) => `${name}, ${jobDictionary[job]}`;
};

console.log(question('designer')('Олег'));
console.log(question('teacher')('Игорь'));
console.log(question('developer')('Ирина'));