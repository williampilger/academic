import { useState } from "react";
import { Filme } from "./types/Filme";

export const Cinema = () => {
    const [filmes, setFilmes] = useState<Filme[]>([]);
    const [loading, setLoading] = useState(false);

    const loadMovies = async () => {
        try{
            setLoading(true);
            let response = await fetch('https://api.b7web.com.br/cinema/');
            setFilmes(await response.json());
        } catch (e) {
            console.error(e);
        }
        setLoading(false);
    }

    return (
        <div>
            <button className="block bg-blue-400 p2 rounded" onClick={loadMovies}>Carregar Filmes</button>
            { loading &&
                <>
                    <span>Carregando...</span>
                </>
            }
            { ! loading && filmes.length > 0 &&
                <>
                    <span>Total de filmes: {filmes.length}</span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6  2xl:grid-cols-7 gap-3">
                        {filmes.map((item, index) => (
                            <div>
                                <img src={item.avatar} className="w-32" />
                                <span>{item.titulo}</span>
                            </div>
                        ))}
                    </div>
                </>
            }
            { ! loading && filmes.length === 0 &&
                <>
                    <span>Nada para exibir. Tenta carregar novamente.</span>
                </>
            }
        </div>
    );
}