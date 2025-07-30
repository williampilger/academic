/**
 * Authenty AE - Bom Princípio-RS  |  github.com/authentyAE
 * by: will.i.am                   |  github.com/williampilger
 *
 * 2022 - Bom Princípio - RS
 */
import React from 'react';


import { DefaultSelect } from '../../components/StyledComponents/styled_select';

import './style.scss';

type compProps = {
    name: string,
    value?: number,
    dishab?: boolean,
    required?:boolean,
    onChange?: React.ChangeEventHandler<HTMLSelectElement>,
    changeFunction?:() => Promise<void>,
    extEditPage?: string,
    children: JSX.Element,
    small?: boolean
}

const ComboboxCamp = (props:compProps) => {

    return(
        <div className={`ComboBoxCamp ${props.small ? 'small' : ''}`}>
            <div className='titgroup'>
                <span className='mm as name'>{props.name}</span>
            </div>

            <DefaultSelect className='spanmm as' value={props.value} required={props.required} disabled={props.dishab} onChange={props.onChange}>
                {props.children}
            </DefaultSelect>
        </div>
    );

}
export default ComboboxCamp;