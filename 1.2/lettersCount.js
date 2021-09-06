/**
 * TODO Реализуйте функцию lettersCount, которая принимает строку в качестве аргумента и возвращает объект, в котором ключами являются все буквы, которые есть в строке, а значениями - их количество в строке.

Перед подсчетом буквы необходимо привести к нижнему регистру. Большая буква и маленькая должны считаться одинаковой буквой.

Пример:

console.log(lettersCount('aAAbbccde'));
// {
//    a: 3,
//    b: 2,
//    c: 2,
//    d: 1,
//    e: 1,
// }
 */

const lettersCount = str =>
   str
      .toLowerCase()
      .split('')
      .reduce((letters, letter) => {
         letters[letter] = !letters[letter] ? 1 : letters[letter] + 1;
         return letters;
      }, {});

console.log(lettersCount('У Коровы Нет Других Забот'));
