// * es5 синтаксис конструкторов
const Animal = function (options) {
   this.name = options.name;
   this.color = options.color;
};

Animal.prototype.getVoice = function () {
   console.log(`I am Animal!, I am ${this.name}!`);
};

const dog = new Animal({ name: 'Buddy', color: '#fff' });
console.log(dog);
console.log(dog.getVoice());

const Cat = function (options) {
   Animal.apply(this, arguments);
   this.hasTail = options.hasTail;
   this.type = 'cat';
};
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

const tiger = new Cat({ name: 'Bingo', color: 'orange', hasTail: 'true' });
console.log(tiger);
console.log(tiger.getVoice());

const cat = new Cat({ name: 'Barsik', color: '#000', hasTail: 'false' });
console.log(cat);

Cat.prototype.getVoice = function () {
   Animal.prototype.getVoice.apply(this);
   console.log(`Meow, I am Cat!, I am ${this.name}!`);
};
console.log(cat.getVoice());

console.log(dog instanceof Cat);
console.log(Cat.prototype);
