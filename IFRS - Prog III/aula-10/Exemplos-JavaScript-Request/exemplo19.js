// exemplo19.js
// CRUD (Create, Read, Update, Delete) 
// - POST -> store() -> Create
// - Body contém dados a serem armazenados
//   Pode ser visto em Payload na aba Networks
// - No exemplo, o retorno é o id do objeto inserido

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'post',
    body: JSON.stringify({
        title: 'Meu título',
        body: 'O conteúdo do post!',
        userId: 1,
    }),
    }).then(response => {
        return response.json();
    }).then( data => {
        console.log(data)
    });