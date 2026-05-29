// exemplo22.js
// CRUD (Create, Read, Update, Delete) 
// - DELETE -> destroy() -> Delete
// - Não há body
// - o id do post a ser removido é enviado via 
//   param [url/1], diferente de query param [url?x=]
// - No exemplo, não há retorno, mas é possível incluir
// - Sabemos se foi deletado pelo status

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'delete',
});