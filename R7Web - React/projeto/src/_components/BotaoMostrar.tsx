import { useState } from "react";

export const BotaoMostrar = () => {
    
    const [show, setShow] = useState(false);

    const handleclick = () => {
        setShow( ! show );
    }

    return (
        <div>
            <button onClick={handleclick}>{show ? 'Ocultar' : 'Mostrar'}</button>

            {show === true && //não precisa fazer o '=== true', só coloquei pra ficar visível a conficional
                <span>Bla bla bla...</span>
            }
        </div>
    );
}