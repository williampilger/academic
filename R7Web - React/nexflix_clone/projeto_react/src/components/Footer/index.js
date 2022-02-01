import React from "react";
import './style.css';

export default ({black}) => {
    return (
        <footer>
            <span>By <strong>will.i.am</strong> | github.com/<strong>williampilger</strong></span>
            <span>Bom Princípio - RS - Brasil</span>
            <span>Dados carregados dinamicamente de <a href="https://www.themoviedb.org" target="_blank">TheMovieDB.org</a> </span>
            <span>Todos os direitos de imagem/layout/design reservados à Netflix</span>
        </footer>
    );
}