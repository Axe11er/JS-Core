/**
 * TODO Реализуйте функцию capitalize, которая принимает строку в качестве аргумента и возвращает новую строку, в которой первые буквы слов заглавные, а все остальные - строчные.

Пример:

const str = 'sOme RanDoM sTRING';
console.log(capitalize(str)); // Some Random String
 */

// function capitalize(str) {
//    let splitStr = str.split(' ');
//    let newString = '';
//    let word;
//    for (let i = 0; i < splitStr.length; i++) {
//       word = splitStr[i];
//       newString +=
//          word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase() + ' ';
//    }
//    return newString.trim();
// }

const capitalize = str =>
   str
      .split(' ')
      .map(
         word =>
            `${word.slice(0, 1).toUpperCase()}${word.slice(1).toLowerCase()}`
      )
      .join(' ');

console.log(capitalize('идет медведь по лЕСУ'));
