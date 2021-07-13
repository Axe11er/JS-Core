const fibonacci = (n) => (n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
console.log(fibonacci(6));

const fibonacci2 = (n) => {
   let a = 1;
   let b = 0;
   let c = 0;

   while (n > 0) {
      c = a + b;
      b = a;
      a = c;
      n--;
   }

   return b;
};

console.log(fibonacci2(6));
