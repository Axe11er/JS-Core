const sleep = ms =>
   new Promise(resolve =>
      setTimeout(() => {
         resolve(ms);
      }, ms)
   );

// sleep(3000).then(time => console.log(`after ${time}`));
// sleep(5000).then(time => console.log(`after ${time}`));
// sleep(2000).then(time => console.log(`after ${time}`));

const fn = async (delay1, delay2, delay3) => {
   await sleep(delay1).then(time => console.log(`after ${time}`));
   await sleep(delay2).then(time => console.log(`after ${time}`));
   await sleep(delay3).then(time => console.log(`after ${time}`));
};

fn(3000, 5000, 2000);
