/**
 * TODO Создайте 2 класса - Person для описания клиента и Account для работы с банковским счетом частного лица.
Считаем, что отрицательный баланс счета - это нормально, обрабатывать как ошибку не надо.

Person
const person = new Person('Johannes', 'Helms', '1983-01-02');
Методы
getAge() - Возвращает возраст владельца счета
Свойства
firstName - Имя
lastName - Фамилия
fullName - Имя вместе с фамилией, вычислямое свойство (используем геттер)
Account
new Account(person, 1000);
Методы
addMoney(amount, description) - Положить деньги на аккаунт с комментарием к переводу
withdrawMoney(amount, description) - Вывести деньги с аккаунта с комментарием к переводу
getAmount() - Получить текущее состояние счета
getAccountHistory() - Возвращает массив с объектами формата { timestamp: 1574434091131, target: 'in', amount: 10, description: 'ЗП' }. Поле target может иметь значения in или out.
transfer(fromAccount, toAccount, amount) - статический метод, переводит деньги с одного счета на другой
Свойства
person - Владелец счета
Пример
const alex = new Person('Alexey', 'Petrov', '1994-05-22');
const alexAccount = new Account(alex, 1000);
const helen = new Person('Helen', 'Smith', '1990-06-06');
const helenAccount = new Account(helen, 400);

alexAccount.addMoney(1000, 'Зарплата');
const amount = alexAccount.getAmount();
alexAccount.withdrawMoney(amount * 0.1, 'Налоги');
Account.transfer(alexAccount, helenAccount, 100);
helenAccount.getAmount(); // 500
alexAccount.getAmount(); // 1700
Disclamer
Конечно, математику с плавающей точкой для обработки балансов использовать не стоит - будут накапливаться ошибки вычисления. Но в данном упражнении этим можно пренебречь.
 */

class Person {
   constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
   }
   get fullName() {
      return `${this.firstName} ${this.lastName}`;
   }
   getAge() {
      const today = new Date('2019-05-23');
      const birthDate = new Date(this.age);
      let personAge = today.getFullYear() - birthDate.getFullYear();
      const mounth = today.getMonth() - birthDate.getMonth();
      if (mounth < 0 || (mounth === 0 && today.getDate() < birthDate.getDate()))
         personAge--;

      return personAge;
   }
}

class Account {
   static transfer(fromAccount, toAccount, amount) {
      fromAccount.withdrawMoney(amount);
      toAccount.addMoney(amount);
   }
   constructor(person, balance) {
      this.person = person.firstName;
      this.balance = balance;
      this.history = [];
   }

   addTransaction(amount, description, target) {
      if (target === 'in' || target === 'out') {
         const transaction = {
            timestamp: new Date().getTime(),
            target: target,
            amount: amount,
            description: description,
         };
         this.history.push(transaction);
         switch (target) {
            case 'in':
               this.balance += amount;
               break;
            case 'out':
               this.balance -= amount;
         }
      }
   }

   addMoney(amount, description) {
      this.addTransaction(amount, description, 'in');
   }
   withdrawMoney(amount, description) {
      this.addTransaction(amount, description, 'out');
   }
   getAmount() {
      return this.balance;
   }
   getAccountHistory() {
      return this.history;
   }
}

const alex = new Person('Alexey', 'Petrov', '1994-05-22');
const alexAccount = new Account(alex, 1000);
const helen = new Person('Helen', 'Smith', '1990-06-06');
const helenAccount = new Account(helen, 400);

alexAccount.addMoney(1000, 'Зарплата');
const amount = alexAccount.getAmount();
alexAccount.withdrawMoney(amount * 0.1, 'Налоги');
Account.transfer(alexAccount, helenAccount, 100);
console.log(helenAccount.getAmount()); // 500
console.log(alexAccount.getAmount()); // 1700

console.log(alex.getAge());
