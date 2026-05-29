async function updatePost(id) {
    const newpost = {
        title: 'Meu novo título',
        body: 'Meu novo conteúdo do post!',
    };

    try {
        const response = await axios.put(
            `https://jsonplaceholder.typicode.com/posts/${id}`,
            newpost    // não precisa usar JSON.stringfy()
        );

        console.log(response);

    } catch (error) {
        console.log(error); 
    }
}

updatePost(1);