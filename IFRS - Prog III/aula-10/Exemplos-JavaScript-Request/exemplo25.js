//exemplo25.js
async function storePost() {
    const post = {
        title: 'Meu título',
        body: 'O conteúdo do post!',
        userId: 1,
    };

    try {
        const response = await axios.post(
            'https://jsonplaceholder.typicode.com/posts',
            post    // não precisa usar JSON.stringfy()
        );

        console.log(response);

    } catch (error) {
        console.log(error); 
    }
}

storePost();