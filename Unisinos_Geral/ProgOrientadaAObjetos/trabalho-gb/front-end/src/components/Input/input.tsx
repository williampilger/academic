/**
 * Authenty AE - Bom Princípio-RS  |  github.com/authentyAE
 * by: will.i.am                   |  github.com/williampilger
 *
 * 2022 - Bom Princípio - RS
 */
import react from 'react';
import './input.scss';

type svgcadProps = {
    name: string,
    type: string,
    background: string,
    id: string,
    unit: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    value: number,
    dataTip: string,
    disabled?: boolean
}

export default (props: svgcadProps) => {
    
    return(
        <div className='inputUse' id={`${props.id}_div`}>
            <div className="groupBoxInput" style={{background: props.background}}>
                <div className="inputName" data-tip={props.dataTip}>{props.name}</div>
                <input id={props.id} type={props.type} value={props.value} style={{background: props.background}} className='inputText' autoComplete="off" onChange={props.onChange} disabled={props.disabled} />
                {
                    props.unit &&
                    <div className="inputUnit">{props.unit}</div>
                }
            </div>
        </div>

    );

}



