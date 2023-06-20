/**
 * Authenty AE - Bom Princípio-RS  |  github.com/authentyAE
 * by: will.i.am                   |  github.com/williampilger
 *
 * 2022 - Bom Princípio - RS
 */
import React, { HtmlHTMLAttributes } from 'react';
import react from 'react';

import './style.scss';

type inputProps = {
    name ?: string,
    id?:string,
    type ?: string,
    required?:boolean,
    background ?: string,
    placeholder ?: string,
    title ?: string,
    value ?: string,
    onChange ?: React.ChangeEventHandler<HTMLInputElement>,
    fail?:boolean,
    check?:boolean,
    dataTip?:string
}

export default (props:inputProps) => {

    return(
        <div>
            <div className={`groupBoxInput ${props.fail ? 'fail' : (props.check ? 'check' : '')}`}>
                <div className="inputName">{props.title}</div>
                <input type={props.type} name={props.name} required={props.required} id={props.id} className='inputText' value={props.value} autoComplete="off" placeholder={props.placeholder} onChange={props.onChange} />
            </div>
        </div>
    );

}



