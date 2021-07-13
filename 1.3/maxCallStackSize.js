const getMaxCallStackSize = (i) => {
   try {
      return getMaxCallStackSize(++i);
   } catch (error) {
      return i;
   }
};

console.log(getMaxCallStackSize(0));
