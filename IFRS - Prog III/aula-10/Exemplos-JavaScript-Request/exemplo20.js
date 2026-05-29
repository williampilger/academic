// exemplo20.js
// CRUD (Create, Read, Update, Delete) 
// - GET -> show() / index() -> Read
// - Não há um body (filtros são passados via query params [url])
// - No exemplo, o retorno é um array de objetos representando posts.

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json();
    }).then( dados => {
        const ul = document.querySelector('#lista');
        
        //console.log(dados);

        dados.forEach(e => {
            const text = `${e.title}: ${e.body}`;
            const li = document.createElement('li');
            const t = document.createTextNode(text);
            li.append(t);
            ul.append(li);
        });
    });