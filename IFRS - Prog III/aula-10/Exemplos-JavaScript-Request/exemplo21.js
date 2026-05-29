// exemplo21.js
// CRUD (Create, Read, Update, Delete) 
// - PUT -> update() -> Update
// - Body contém dados a serem atualizados
// - o id do post a ser atualizado é enviado via 
//   param [url/1], diferente de query param [url?x=]
// - No exemplo, o retorno é o id do objeto inserido

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'put',
    body: JSON.stringify({
        title: 'Meu novo título',
        body: 'Meu novo conteúdo do post!',
    }),
    }).then(response => {
        return response.json();
    }).then( data => {
        console.log(data)
    });