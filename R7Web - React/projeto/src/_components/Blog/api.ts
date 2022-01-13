export const api = {
    getAllPosts: async () => {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let json = await response.json();
        return json;
    },

    addNewPost: async (npTitle: string, npBody: string, id: number) => {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: npTitle,
                body: npBody,
                userId: id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let json = await response.json();
        return json;
    }
}