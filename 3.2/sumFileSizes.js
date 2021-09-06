/**
 * TODO Напишите функцию, которая принимает имена двух файлов и вызывает функцию, переданную третьим параметром и передает ей первым агрументом сумму их размеров.

Для получения размера файла необходимо использовать функцию getFileSize(filename, cb).
 */

let fileSizes = {
   testFile1: 65,
   testFile2: 48,
};

const getFileSize = (filename, cb) => {
   setTimeout(() => cb(fileSizes[filename]), Math.random() * 500);
};

const sumFileSizes = (filename1, filename2, cb) => {
   let sum = 0;
   getFileSize(filename1, size => {
      sum += size;
      getFileSize(filename2, size => {
         sum += size;
         cb(sum);
      });
   });
};

sumFileSizes('testFile1', 'testFile2', params => console.log(params));
