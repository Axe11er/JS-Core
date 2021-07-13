/**
 * TODO Реализуйте функцию, которая принимает на вход строку, состоящую только из открывающих и закрывающих круглых скобок, и проверяет является ли эта строка корректной. Пустая строка (отсутствие скобок) считается корректной. Строка считается корректной (сбалансированной), если содержащаяся в ней скобочная структура соответствует требованиям: 1: Скобки — это парные структуры. У каждой открывающей скобки должна быть соответствующая ей закрывающая скобка. 2: Закрывающая скобка не должна идти впереди открывающей.
 */

const areBracketsBalanced = (str) => {
   let unbalancedBracketsCount = 0;

   for (let i = 0; i < str.length; i++) {
      if (str[i] === '(') {
         unbalancedBracketsCount++;
      } else if (str[i] === ')') {
         unbalancedBracketsCount--;

         if (unbalancedBracketsCount < 0) {
            return false;
         }
      }
   }

   if (unbalancedBracketsCount === 0) {
      return true;
   } else {
      return false;
   }
};

console.log(areBracketsBalanced('())('));