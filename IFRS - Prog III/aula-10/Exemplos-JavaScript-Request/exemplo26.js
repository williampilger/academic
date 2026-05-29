async function deletePost() {
   
    try {
        const response = await axios.delete(
            'https://jsonplaceholder.typicode.com/posts/1',
        );

        console.log(response);

    } catch (error) {
        console.log(error); 
    }
}

deletePost();