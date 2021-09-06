const getRandomNumber = () => {
   return new Promise(resolve => {
      const time = Math.random() * 1000;
      setTimeout(() => {
         const number = Math.floor(Math.random() * (10 + 1));
         console.log(number);
         resolve(number);
      }, time);
   });
};

const run = async () => {
   console.log('before for');
   let result = await getRandomNumber();
   console.log(`n1`);
   result += await getRandomNumber();
   console.log(`n2`);
   result += await getRandomNumber();
   console.log(`n3`);
   result += await getRandomNumber();
   console.log(`n4`);
   result += await getRandomNumber();
   console.log(`n5`);
   console.log(result);
};

run();

for (let i = 0; i < 5; i++) {
   console.log(`from for ${i}`);
   let time = Math.random() * 1000;
   setTimeout(() => {
      console.log(`from Timeout ${i}`);
   }, time);
}
