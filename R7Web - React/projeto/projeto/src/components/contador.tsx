import { useState } from "react";

export const Contador = () => {

    const [numero, setNumero] = useState(0);

    function handleClick() {
        setNumero( numero + 1 );
    }

    return (
        <div>
            <span>Valor atual: <strong>{numero}</strong>.</span>
            <button onClick={handleClick}>+1</button>
        </div>
    );
}