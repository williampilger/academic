type Props = {
    text: string;
    clickfn: () => void;
}

export const Botao = ( { text, clickfn }: Props) =>{
    return(
        <>
            <button onClick={clickfn}>{text}</button>
        </>
    );
}

type Props2 = {
    text: string;
    clickfnComTexto: (txt: string) => void;
}

export const BotaoComRetorno = ({ text, clickfnComTexto }: Props2) => {
    
    const eventoclickbotao = () => {
        clickfnComTexto("Frase de dentro do componente");
    }

    return (
        <>
            <button onClick={eventoclickbotao}>{text}</button>
        </>
    );
}