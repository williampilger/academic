import React, { useState } from "react";

export const InputCampo = () => {
    
    const [nome, setNome] = useState('Texto alterável!')

    const handleInput = (event : React.ChangeEvent<HTMLInputElement>) => {
        setNome(event.target.value);
    }

    return (
        <div>
            Nome:
            <input type="text" value={nome} onChange={handleInput}/>
            <hr />
            O texto do input é: {nome}
        </div>
    );
}