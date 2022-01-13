import React, { useState, useEffect } from "react";

export const FormNome = () => {
    
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [nomeCompleto, setNomeCompleto] = useState('')

    useEffect(()=>{
        setNomeCompleto(`${nome} ${sobrenome}`);
    },[nome, sobrenome]);

    const handleInputNome = (event : React.ChangeEvent<HTMLInputElement>) => {
        setNome(event.target.value);
    }
    const handleInputSobrenome = (event : React.ChangeEvent<HTMLInputElement>) => {
        setSobrenome(event.target.value);
    }

    return (
        <div>
            <span>Nome: </span>
            <input type="text" value={nome} placeholder="Digite seu nome" onChange={handleInputNome}/>
            <span>Sobrenome: </span>
            <input type="text" placeholder="Digite seu sobrenome" value={sobrenome} onChange={handleInputSobrenome}/>
            <hr />
            O Nome completo é: {nomeCompleto}
        </div>
    );
}