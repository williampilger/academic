import { useState } from "react";
import styles from './style.module.css';

export const Contador = () => {

    const [numero, setNumero] = useState(0);

    function handleClick() {
        setNumero( numero + 1 );
    }

    return (
        <div className={styles.div}>
            <span>Valor atual: <strong>{numero}</strong>.</span>
            <button onClick={handleClick}>+1</button>
        </div>
    );
}