// * es6 синтаксис
class Animal {
   constructor(options) {
      this.name = options.name;
      this.color = options.color;
   }
   getVoice() {
      console.log(`I am Animal!, I am ${this.name}!`);
   }
}

const dog = new Animal({ name: 'Buddy', color: 'fff' });
console.log(dog);
console.log(dog.getVoice());

class Cat extends Animal {
   constructor(options) {
      super(options);
      this.hasTail = options.hasTail;
      this.type = 'cat';
   }
   getVoice() {
      super.getVoice();
      console.log('meow');
   }
}

const cat = new Cat({ name: 'Barsik', color: '#000', hasTail: true });
console.log(cat);
console.log(cat.getVoice());

//* расширяем базовые прототипы

Object.prototype.print = function () {
   console.dir(`I am Object!, I am ${this}`);
};

cat.print();

Array.prototype.mapAndLog = function () {
   console.log(`Array to map`, this);
   return this.map.apply(this, arguments);
};

console.log([1, 2, 3].mapAndLog(x => x ** 2));

String.prototype.toTag = function (tagName) {
   return `<${tagName}>${this}</${tagName}>`;
};

console.log('barsik'.toTag('p'));

Number.prototype.toBigInt = function () {
   return BigInt(this);
};
const number = 42;
console.log(number.toBigInt());
