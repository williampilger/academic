import { ChangeEvent, useState } from "react";
import { api } from "./api";
import { Postagem } from "./Postagem.type";
import styles from './style.module.css';


export const Blog = () => {
    const [postagens, setPostagens] = useState<Postagem[]>([]);
    const [loading, setLoading] = useState(false);
    const [npTitle, set_npTitleState] = useState("");
    const [npBody, set_npBodyState] = useState("");

    const loadPosts = async () => {
        try{
            setLoading(true);
            setPostagens(await api.getAllPosts());
        } catch (e) {
            console.error(e);
        }
        setLoading(false);
    }

    const set_npTitle = (e: ChangeEvent<HTMLInputElement>) => {
        set_npTitleState(e.target.value);
    }

    const set_npBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
        set_npBodyState(e.target.value);
    }

    const sendPost = async () => {
        if( npTitle && npBody ) {
            try{
                let json = await api.addNewPost(npTitle, npBody, 1);
                
                console.log(json);
                if(json.id) {
                    alert("Seu post foi enviado");
                }
                else{
                    alert("Falha no envio!")
                }
                // setPostagens( postagens + json );
            } catch(e) {
                console.error(e);
            }

        }
    }

    return (
        <div>
            <button className="block bg-blue-400 p2 rounded" onClick={loadPosts}>Carregar Postagens</button>
            { loading &&
                <>
                    <span>Carregando...</span>
                </>
            }
            { ! loading && postagens.length > 0 &&
                <>
                    <span>Total de postagens: {postagens.length}</span>
                    <div>
                        <h2>Adicionar postagem</h2>
                        <input type="text" placeholder="Título do Post" value={npTitle} onChange={set_npTitle}/>
                        <textarea placeholder="Conteúdo do post" value={npBody} onChange={set_npBody}></textarea>
                        <button onClick={sendPost}>Enviar</button>
                    </div>
                    <div>
                        {postagens.map((item, index) => (
                            <div>
                                <h3>{item.title}</h3>
                                <span><small>{`#${item.id} - Publicado por: ${item.userId}`}</small></span>
                                <span>{item.body}</span>
                            </div>
                        ))}
                    </div>
                </>
            }
            { ! loading && postagens.length === 0 &&
                <>
                    <span>Nada para exibir. Tenta carregar novamente.</span>
                </>
            }
        </div>
    );
}