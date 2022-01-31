const API_KEY = '0fd14847f09fcbadae234f152b4a76c3';
const API_BASE = 'https://api.themoviedb.org/3';

/**
 * - Originais da Netflix
 * - Recomendados (trending)
 * - Em alta (top rated)
 * - ação, comédia, terror, romance, documentários
 */

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}/${endpoint}`);
    return await req.json();
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais da Netflix',
                items: await basicFetch(`discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você', //esses não serão realmente recomendados. São os em alta.
                items: await basicFetch(`trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            }
            // {
            //     slug: 'toprated',
            //     title: 'Em Alta',
            //     items: await basicFetch(`movie/top_rated/week?language=pt-BR&api_key=${API_KEY}`)
            // },
            // {
            //     slug: 'action',
            //     title: 'Ação',
            //     items: await basicFetch(`discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            // },
            // {
            //     slug: 'comedy',
            //     title: 'Comédia',
            //     items: await basicFetch(`discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            // },
            // {
            //     slug: 'horror',
            //     title: 'Terror',
            //     items: await basicFetch(`discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            // },
            // {
            //     slug: 'romance',
            //     title: 'Romance',
            //     items: await basicFetch(`discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            // },
            // {
            //     slug: 'documentary',
            //     title: 'Documentários',
            //     items: await basicFetch(`discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            // }
        ]
    }
}