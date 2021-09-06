// fetch('https://jsonplaceholder.typicode.com/posts')
//    .then(response => response.json())
//    .then(posts => console.log(posts))
//    .catch(error => {
//       console.log(error);
//    });

const getPosts = id =>
   new Promise((resolve, reject) => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response =>
         response
            .json()
            .then(post => resolve(post))
            .catch(error => {
               reject(error);
            })
      );
   });

getPosts(1).then(post => {
   console.log(post);
});

const getPosts2 = id =>
   Promise.resolve().then(() => {
      const [userType, userId] = id.split('-');
      return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`).then(
         response => response.json()
      );
   });

getPosts2('user-1')
   .then(post => console.log(post))
   .catch(error => console.log(error));

const getPosts3 = async id => {
   try {
      const response = await fetch(
         `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const response2 = await fetch(
         `https://jsonplaceholder.typicode.com/users`
      );
      const post = await response.json();
      const users = await response2.json();
      console.log(post, users);
      return [post, users];
   } catch (error) {
      console.log(error);
      //Promise.reject(error);
      throw error;
   }
};

console.log(getPosts3(3));