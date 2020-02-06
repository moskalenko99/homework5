fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => {
      document.body.innerHTML = `<h1>${json.title}</h1>`;
  });

// const promise = () => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(123);
//     }, 1000);
// });

// promise()
//     .then((data) => {
//         console.log('Прошла секунда!', data);
//     })

//     .catch((error) => {
//         console.warn(error);
//     })

// setTimeout(() => {
//     console.log('Прошла секунда!');
    
// }, 1000);

// console.log('Код выполнен');
