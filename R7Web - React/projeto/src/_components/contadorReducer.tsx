import { useContagem } from "./_reducers/contagem";


export const contadorReducer = () => {

    const [contagem, contagemDispatch] = useContagem();

    return (
        <div>
            <span>Contagem: {contagem.count}</span>
            <hr />
            <button className="p-3" onClick={()=>contagemDispatch({type: 'ADD'})}>Adicionar</button>
            <button className="p-3" onClick={()=>contagemDispatch({type: 'DEL'})}>Remover</button>
            <button className="p-3" onClick={()=>contagemDispatch({type: 'RESET'})}>Resetar</button>
        </div>
    );
}