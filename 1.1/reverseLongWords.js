/**
 * TODO Реализуйте функцию reverseLongWords, которая принимает строку в качестве аргумента и возвращает новую строку, в которой каждое слово, которое содержит 5 или больше символов, написана наоборот.

Примеры:

reverseLongWords('Hey fellow warriors'); // Hey wollef sroirraw
reverseLongWords('This is a test'); // This is a test
reverseLongWords('This is another test'); // This is rehtona test
 */

// const reverseLongWords = str =>
//    str
//       .split(' ')
//       .map(word => {
//          let newString = '';
//          if (word.length >= 5) {
//             word = word.split('').reverse().join('');
//          }
//          newString += word;
//          return newString;
//       })
//       .join(' ');

const reverseLongWords = str =>
   str
      .split(' ')
      .reduce(
         (newString, word) =>
            (newString +=
               word.length >= 5
                  ? `${word.split('').reverse().join('')} `
                  : `${word} `),
         ''
      )
      .trim();

console.log(reverseLongWords('мышка норушка в лесу встретила кукушку'));
