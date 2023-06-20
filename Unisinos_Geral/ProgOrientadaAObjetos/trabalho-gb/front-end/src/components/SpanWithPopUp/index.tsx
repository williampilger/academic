/**
 * Authenty AE - Bom Princípio-RS  |  github.com/authentyAE
 * by: will.i.am                   |  github.com/williampilger
 *
 * 2022 - Bom Princípio - RS
 */
import { ReactNode, useState } from 'react';

import PopUp from '../PopUp';
import './style.scss';

type inputProps = {
    className?:string,
    spanText:string|ReactNode,
    children: string | JSX.Element | JSX.Element[]
}

const SpanWithPopUp = (props:inputProps) => {

    const [clicked, setClicked] = useState<boolean>(false);

    return(
        <>
            <span className={`span-with-popup ${props.className} show-text`} onClick={ e => setClicked(true) }>{props.spanText}</span>
            {
                clicked &&
                <PopUp className={`span-with-popup ${props.className} popup-item`} cancelcalback={ ()=> setClicked(false) }>{props.children}</PopUp>
            }
        </>
    );

}
export default SpanWithPopUp;