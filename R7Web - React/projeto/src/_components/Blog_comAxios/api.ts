import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 1000
});

export const api = {
    getAllPosts: async () => {
        let response = await axiosInstance.get('/posts');
        return response.data;
    },

    addNewPost: async (npTitle: string, npBody: string, id: number) => {

        let response = await axiosInstance.post('/posts', {
            title: npTitle,
            body: npBody,
            userId: id
        });
        return response.data;
    }
}


/*

//OUTRA FORMA DE FAZER A MESMA COISA:

const BASE = 'https://jsonplaceholder.typicode.com';

export const api = {
    getAllPosts: async () => {
        let response = await axios.get(`${BASE}/posts`);
        return response.data;
    },

    addNewPost: async (npTitle: string, npBody: string, id: number) => {

        let response = await axios.post(`${BASE}/posts`, {
            title: npTitle,
            body: npBody,
            userId: id
        });
        return response.data;
    }
}
*/