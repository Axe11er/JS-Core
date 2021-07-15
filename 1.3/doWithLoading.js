function doWithLoading(fn) {
   console.log('начало загрузки');
   let value = fn();
   console.log(value);
   console.log('конец загрузки');
}
function process() {
   console.log('загружаем...');
}

doWithLoading(process);

function once(fn) {
   let returnValue;
   let canRun = true;
   return function runOnce() {
      if (canRun) {
         console.log(`----------------------------------`);
         returnValue = fn.apply(this, arguments);
         console.log(`----------------------------------`);
         canRun = false;
      } else {
         returnValue = console.log(`can't run anymore`);
      }
      return returnValue;
   };
}
const processonce = once(process);
processonce();
processonce();
processonce();

function log(level, message) {}
var logInfo = log.bind(null, 'Info');
logInfo('message');
