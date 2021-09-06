const getBtn = document.querySelector('.get-posts');
const addBtn = document.querySelector('.add-post');
const clearBtn = document.querySelector('.clear');
const container = document.querySelector('.container');

getBtn.addEventListener('click', () => {
   getPosts(renderPosts);
});
clearBtn.addEventListener('click', () => {
   console.log('click');
   container.textContent = null;
});
addBtn.addEventListener('click', () => {
   const newPost = {
      id: 'test-id',
      title: `${Math.random()}`,
      body: '...',
      userId: 'test-id',
   };
   createPost(newPost, response => {
      const card = createCard(response);
      container.insertAdjacentElement('afterbegin', card);
   });
});

const createCard = post => {
   const card = document.createElement('div');
   card.classList.add('card');
   card.style.flexBasis = '420px';
   card.style.margin = '5px';
   const cardBody = document.createElement('div');
   cardBody.classList.add('card-body');
   const title = document.createElement('h5');
   title.classList.add('card-title');
   title.textContent = post.title;
   const article = document.createElement('p');
   article.classList.add('card-text');
   article.textContent = post.body;
   cardBody.appendChild(title);
   cardBody.appendChild(article);
   card.appendChild(cardBody);
   return card;
};

const renderPosts = response => {
   const fragment = document.createDocumentFragment();
   response.forEach(post => {
      const card = createCard(post);
      fragment.appendChild(card);
   });
   container.appendChild(fragment);
};

const createPost = (body, callback) => {
   const xhr = new XMLHttpRequest();
   xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
   xhr.setRequestHeader('Content-type', 'application/json');
   xhr.addEventListener('load', () => {
      console.log('request loaded');
      const response = JSON.parse(xhr.responseText);
      callback(response);
   });
   xhr.send(JSON.stringify(body));
   xhr.addEventListener('error', () => {
      console.log('error');
   });
};

const getPosts = callback => {
   const xhr = new XMLHttpRequest();
   xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
   xhr.addEventListener('load', () => {
      console.log('request loaded');
      const response = JSON.parse(xhr.responseText);
      callback(response);
   });
   xhr.send();
   xhr.addEventListener('error', () => {
      console.log('error');
   });
};
