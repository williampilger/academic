/**
 * Authenty AE - Bom Princípio-RS  |  github.com/authentyAE
 * by: will.i.am                   |  github.com/williampilger
 *
 * 2022 - Bom Princípio - RS
 */
import React, { HtmlHTMLAttributes, useState } from 'react';
import react from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { DefaultInput } from '../StyledComponents/styled_input';

import './style.scss';

export default (props:{
        id?:string,
        value:string,
        fail?:boolean,
        checked?:boolean,
        onChange?:React.ChangeEventHandler<HTMLInputElement>,
        onFocus?:React.ChangeEventHandler<HTMLInputElement>,
        onBlur?:React.ChangeEventHandler<HTMLInputElement>,
        required?:boolean,
        minLength?:number
        placeholder?:string,
        className?:string
    }) => {

    
    const [showPswd, setShowPswd] = useState<boolean>(false);

    return(
        <div className={`defaultpasswordinput ${props.className}`}>
            <DefaultInput
                id={props.id}
                required={props.required}
                minLength={props.minLength}
                type={showPswd ? 'text' : 'password'}
                placeholder={props.placeholder}
                value={props.value}
                checked={props.checked}
                fail={props.fail}
                onChange={props.onChange}
                onFocus={props.onFocus}
                onBlur={props.onBlur}
            />
            {
                !showPswd &&
                <BsEyeFill className='eye' onClick={ e=>{setShowPswd(true)}}/>
            }
            {
                showPswd &&
                <BsEyeSlashFill className='eye' onClick={ e=>{setShowPswd(false)}}/>
            }
        </div>
    );

}



