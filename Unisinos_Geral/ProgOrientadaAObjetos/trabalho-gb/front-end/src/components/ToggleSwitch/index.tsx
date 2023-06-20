import { ChangeEventHandler } from "react";
import './style.scss';
type Props = {
    rectangular?: boolean,
    title: string,
    checked: boolean,
    onChange: ChangeEventHandler<HTMLInputElement>
}
export const ToggleSwitch = ({rectangular, title, checked, onChange}: Props) => {

    return (
        <div className="ToggleSwitch">
            <span>{title}</span>
            <label className="switch">
                <input type="checkbox" checked={checked} onChange={onChange}/>
                <span className={`slider ${rectangular ? '' : 'round'}`}></span>
            </label>
        </div>
    );
}