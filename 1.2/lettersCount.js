/**
 *TODO Реализуйте функцию lettersCount, которая принимает строку в качестве аргумента и возвращает объект, в котором ключами являются все буквы, которые есть в строке, а значениями - их количество в строке. Перед подсчетом буквы необходимо привести к нижнему регистру. Большая буква и маленькая должны считаться одинаковой буквой.
 */

const lettersCount = (str) => {
   let splitString = str.toLowerCase().split('');
   let object = {};
   let key;

   for (let i = 0; i < splitString.length; i++) {
      key = splitString[i];

      if (object[key] === undefined) {
         object[key] = 1;
      } else {
         object[key] += 1;
      }
   }
   return object;
};

console.log(lettersCount('У Коровы Нет Других Забот'));
