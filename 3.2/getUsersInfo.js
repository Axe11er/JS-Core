/**
 * TODO 
getUsersInfo
Вам нужно написать функцию, которая получает массив всех пользователей и передает его в функцию коллбэк.

Пример использования

getUsersInfo((users) => {
  console.log(users); // [ { name: 'Alex', age: 70 }, { name: 'Elon' } ]
});
Для получения данных вам предоставлены 2 асинхронные функции

getUsersIds - Возвращает массив с идентификаторами пользователей
getUserInfo - Возвращает данные пользователя по заданному идентификатору
getUsersIds((ids) => {
  console.log(ids); // ['id2', 'id6']
});

getUserInfo('someUserId', (userInfo) => {
  console.log(userInfo); // { name: 'Alex', age: 70 }
});
Функция должна вызвать callback, переданный первым агрументом и передать туда массив данных о пользователях.

Порядок пользователей в результирующем массиве должен соответствовать порядку идентификаторов в массиве из getUsersIds

Hint: Вне платформы вы можете создать эти функции с помощью setTimeout и какого-то общего хранилица данных.
 */

// const { getUserInfo, getUsersIds } = db;
// Демо функции, чтобы работало

const data = {
   id2: { name: 'Alex', age: 70 },
   id6: { name: 'Elon' },
   id3: { lastName: 'Ivanov', name: 'Pavel', profession: 'programmer' },
   id4: {
      name: 'Petr',
   },
   id5: {
      city: 'St. Petersburg',
      name: 'Lena',
   },
   id7: {
      age: 25,
      hobbys: ['traveling', 'macrame'],
      name: 'Olesya',
   },
};

const getUsersIds = callback => {
   setTimeout(() => callback(Object.keys(data)), 500);
};
const getUserInfo = (id, callback) => {
   setTimeout(() => callback(data[id]), 1000);
};

const getUsersInfo = onLoad => {
   const users = [];
   getUsersIds((ids = []) => {
      ids.forEach((id, index) => {
         getUserInfo(id, info => {
            users[index] = info;
            if (index === ids.length - 1) onLoad(users);
         });
      });
   });
};

getUsersInfo(users => console.log(users));
