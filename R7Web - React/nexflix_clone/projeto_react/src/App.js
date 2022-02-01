import React, { useEffect, useState } from "react";
import API_tmdb from "./API_tmdb";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';

export default () => {

    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    const [blackHeader, setBlackHeader] = useState(false);

    useEffect(() => {
        const loadAll = async () => {
            //Obtendo todos os dados.
            let list = await API_tmdb.getHomeList();
            setMovieList(list);
            
            //Obtendo file em destaque
            let originals = list.filter(i=>i.slug === 'originals');//filtra apenas os originais
            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));//sorteia um
            let chosen = originals[0].items.results[randomChosen];
            let chosenInfo = await API_tmdb.getMovieInfo(chosen.id, 'tv');
            if(chosenInfo.overview.length > 200) chosenInfo.overview = `${chosenInfo.overview.substr(0, 200)}...`;
            setFeaturedData(chosenInfo);
        }


        loadAll();
    }, []);

    useEffect(() => {
        const scrollListner = () => {
            if(window.scrollY > 25) {
                setBlackHeader(true);
            } else {
                setBlackHeader(false);
            }
        }

        window.addEventListener('scroll', scrollListner);

        return () => {//remover listner quando eu sair da página.
            window.removeEventListener('scroll', scrollListner);
        }

    }, []);

    return (
        <div className="page">

            <Header black={blackHeader}/>

            {featuredData &&
                <FeaturedMovie item={featuredData} />
            }

            <section className="lists">
                {movieList.map((item, key) => (
                    <MovieRow title={item.title} items={item.items}/>
                ))}
            </section>

            <Footer />
        </div>
    );
}