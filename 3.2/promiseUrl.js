const url1 =
   'https://cdnb.artstation.com/p/assets/images/images/040/045/731/large/arina-chayka-3.jpg?1627679243';
const url2 =
   'https://cdna.artstation.com/p/assets/images/images/040/046/008/large/arina-chayka-1.jpg?1627679608';
const url3 =
   'https://cdna.artstation.com/p/assets/images/images/034/698/302/large/arina-chayka-1.jpg?1612974822';

const createImg = url => {
   const img = new Image();
   img.src = url;
   img.width = 500;
   document.body.appendChild(img);
   return img;
};

const loadImg = url =>
   new Promise(resolve => {
      createImg(url).addEventListener('load', () => {
         resolve();
      });
   });

loadImg(url1)
   .then(() => {
      console.log('картинка 1 загружена');
      return loadImg(url2);
   })
   .then(() => {
      console.log('картинка 2 загружена');
      return loadImg(url3);
   })
   .then(() => {
      console.log('картинка 3 загружена');
   });
