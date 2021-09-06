/**
 * TODO Реализуйте функцию, которая принимает на вход два числа и арифметический оператор (имя которого в виде строки) и возвращает результат соответстующей операции. Первые 2 аргумента это положительные целые числа. Третий аргумент может быть одним из "add", "subtract", "divide", "multiply".
 */

const arithmetic = (a, b, operator) => {
   let result;
   switch (operator) {
      case 'add':
         result = a + b;
         break;

      case 'subtract':
         result = a - b;
         break;

      case 'multiply':
         result = a * b;
         break;

      case 'divide':
         result = a / b;
         break;

      default:
         result = NaN;
   }
   return result;
};

console.log(arithmetic(2, 3, 'add'));
