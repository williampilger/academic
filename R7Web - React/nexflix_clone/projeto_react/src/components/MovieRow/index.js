import React, { useState } from "react";
import './style.css';
import PrevIcon from './icons/prev.svg';
import NextIcon from './icons/next.svg';

export default ({title, items}) => {
    
    const [scroll, setScroll] = useState(0);

    const handlePrevArrow = () => {
        let delta = scroll + Math.round(window.innerWidth / 2); //Varia metade da tela por vez.
        if(delta >= 0){
            delta = 0;
        }
        setScroll(delta);
    }

    const handleNextArrow = () => {
        let delta = scroll - Math.round(window.innerWidth / 2); //Varia metade da tela por vez.
        let limite = window.innerWidth - 60 - items.results.length * 150; //60 do pading da página 
        if(delta <= limite){
            delta = limite;
        }
        setScroll(delta);
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--nav prev" onClick={handlePrevArrow}> <img src={PrevIcon}/> </div>
            <div className="movieRow--nav next" onClick={handleNextArrow}> <img src={NextIcon}/> </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{ marginLeft: scroll, width: items.results.length * 150}}>
                    {items.results.length > 0 && items.results.map((item, key)=>(
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt={item.original_title}/>

                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}