/**
 * TODO Реализуйте функцию calculatePrice, которая принимает массив заказов, а возвращает сумму их стоимостей. Каждый объект заказа содержит поле price, в котором хранится стоимость товара в числовом формате.

Суммой пустого массива должен быть 0. Если массив не передан, то суммой так же должен быть 0.

Пример:

const data = [
  {
    type: 'food',
    price: 130,
  },
  {
    type: 'clothes',
    price: 7300,
  },
  {
    type: 'other',
    price: 1400,
  },
];

calculatePrice(data); // 8830‬
 */

const data = [
   {
      type: 'food',
      price: 130,
   },
   {
      type: 'clothes',
      price: 7300,
   },
   {
      type: 'other',
      price: 1400,
   },
];

const calculatePrice = orders => {
   let totalPrice = 0;
   if (!orders) return totalPrice;
   totalPrice = orders.reduce((acc, item) => (acc += item.price), 0);
   return totalPrice;
};

console.log(calculatePrice(data));
