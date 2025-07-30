import './style.scss';
const PopUp = (props: {className?:string , children: string | JSX.Element | JSX.Element[] , cancelcalback: () => void}) => {
    return(
        <div className={`global-popup ${props.className}`} onClick={props.cancelcalback}>
            <div className="children-area" onClick={((e) => e.stopPropagation())}>
                {props.children}
            </div>
        </div>
    );
}
export default PopUp;