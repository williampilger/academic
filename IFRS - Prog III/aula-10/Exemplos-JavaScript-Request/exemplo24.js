async function getPosts() {
    try {
        const responseData = await axios.get(
            'https://jsonplaceholder.typicode.com/posts'
        );

        // Descomente a linha abaixo para ver o objeto retornado pelo axios
        //console.log(responseData);
        
        const posts = responseData.data;
        const ul = document.querySelector('#lista');

        posts.forEach(element => {
            const text = `${element.title}: ${element.body}`;
            const li = document.createElement('li');
            const t = document.createTextNode(text);
            li.append(t);
            ul.append(li);
        });
    } catch(error) {
        console.log(error);
    }
}

getPosts();