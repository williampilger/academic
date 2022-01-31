import React, { useEffect, useState } from "react";
import API_tmdb from "./API_tmdb";
import MovieRow from "./components/MovieRow";
import './App.css';

export default () => {

    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const loadAll = async () => {
        //Obtendo todos os dados.
        let list = await API_tmdb.getHomeList();
            setMovieList(list);
        }

        loadAll();
    }, []);

    return (
        <div className="page">
            <section className="lists">
                {movieList.map((item, key) => (
                    <MovieRow title={item.title} items={item.items}/>
                ))}
            </section>
        </div>
    );
}