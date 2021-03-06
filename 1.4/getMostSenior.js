/**
 * TODO Дан список информации о людях.

Необходимо вернуть массив, содержащий самого старшего человека в списке. Если несколько людей имеют одинаковый наибольший возраст, то нужно вернуть массив, содержащий их всех.

Возраст хранится в поле age.

Данные на входе:

const data =[
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
]
const result = getMostSenior(data);
Данные на выходе:

console.log(result);
// [
//     { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//     { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ]
 */

const data = [
   {
      firstName: 'Gabriel',
      lastName: 'X.',
      country: 'Monaco',
      continent: 'Europe',
      age: 49,
      language: 'PHP',
   },
   {
      firstName: 'Odval',
      lastName: 'F.',
      country: 'Mongolia',
      continent: 'Asia',
      age: 38,
      language: 'Python',
   },
   {
      firstName: 'Emilija',
      lastName: 'S.',
      country: 'Lithuania',
      continent: 'Europe',
      age: 19,
      language: 'Python',
   },
   {
      firstName: 'Sou',
      lastName: 'B.',
      country: 'Japan',
      continent: 'Asia',
      age: 49,
      language: 'PHP',
   },
];

const getMostSenior = humans => {
   const ages = humans.map(human => human.age);
   const maxAge = Math.max(...ages);
   const oldestHuman = humans.filter(human => human.age === maxAge);
   return oldestHuman;
};

console.log(getMostSenior(data));
