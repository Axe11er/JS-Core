/**
 * ? this
 */

function getThis() {
   console.log(this);
}

getThis();

function getPrice(currency = '$') {
   console.log(`${currency} ${this.price}`);
   return this;
}

function getName() {
   console.log(this.name);
   return this;
}

const prod1 = {
   name: 'Intel',
   price: 100,
   getPrice,
   getName() {
      console.log(this.name);
   },
   info: {
      information: ['2.3ghz'],
      getInfo: function () {
         console.log(this);
      },
   },
};

const prod2 = {
   name: 'AMD',
   price: 50,
   getPrice,
};

const prod3 = {
   name: 'ARM',
   price: 200,
   getName,
   getPrice,
};

const prod4 = {
   name: 'VIA',
   price: 150,
};

prod2.getName = prod1.getName;

prod1.getPrice();
prod1.info.getInfo();
prod2.getPrice();
prod1.getName();
prod2.getName();

let str = 'Hello world';
const reversedStr = str.split('').reverse().join(''); //*Вызов методов цепочкой
console.log(reversedStr);

prod3.getName().getPrice();

getPrice.call(prod4, 'euro');
getPrice.apply(prod4, ['rub']);
const getPriceBind = prod3.getPrice.bind(prod3, 'caps');

console.log(getPriceBind);
setTimeout(getPriceBind, 1000);
