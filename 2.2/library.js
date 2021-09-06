/**
 * TODO Реализуйте функционал для работы с книгами в библиотеке:

создание книги(добавление новой книги в библиотеку)
Выдача книги читателю
Получение книги от читателя
Получение у кого книга сейчас находится
Необходимо создать контруктор объектов Book, который будет создавать объекты со следующими полями:

name - имя книги
author - имя автора
year - год книги
reader - текущий читатель книги(у кого она на руках) - если она сейчас свободна - должно быть равно null
Необходимо реализовать на прототипе следующие методы работы с книгой:

isAvaliable() // true/false - доступна ли книга для выдачи или она у кого-то на руках
takeBook(readerName) - должен выдавать книгу читателю, если она доступна для выдачи и записывать его имя в reader, возвращает true, если выдача книги возможна и она произведена, false, если книга уже выдана
returnBook() - регистрирует возврат книги, устанавливает reader в null, возвращает true, если книга была на руках, false если книга итак в библиотеке
changeBookName(newBookName) - изменяет название книги на newBookName, возвращает true/false, в зависимости от результата
changeAuthorName(newAuthorName) - изменяет имя автора на newAuthorName, возвращает true/false в зависимости от результата
getCurrentReader() - возвращает имя текущего читателя или null, если книга доступна для выдачи

 */

class Book {
   constructor(name, author, year) {
      this.name = name;
      this.author = author;
      this.year = year;
      this.reader = null;
   }
   isAvaliable() {
      return !this.reader ? true : false;
   }
   takeBook(readerName) {
      if (!this.reader) {
         this.reader = readerName;
         return true;
      }
      return false;
   }
   returnBook() {
      if (this.reader) {
         this.reader = null;
         return true;
      }
      return false;
   }
   changeBookName(newBookName) {
      if (this.name !== newBookName) {
         this.name = newBookName;
         return true;
      }
      return false;
   }
   changeAuthorName(newAuthorName) {
      if (this.author !== newAuthorName) {
         this.author = newAuthorName;
         return true;
      }
      return false;
   }
   getCurrentReader() {
      return this.reader;
   }
}

const book = new Book('Harry', 'Joahn', '2000');
console.log(book.takeBook('Mister Vrister'));

console.log(book.returnBook());
console.log(book.takeBook('Mister Krister'));
console.log(book);
