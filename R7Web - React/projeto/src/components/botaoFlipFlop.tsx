import { useState } from "react";

export const BotaoFlipFlop = () => {
    
    const [clicado, setShow] = useState(false);

    const handleclick = () => {
        setShow( ! clicado );
    }

    return (
        <div>
            <button onClick={handleclick} style={{backgroundColor: clicado ? '#00F' : '#F00'}} >Inverter</button>
        </div>
    );
}