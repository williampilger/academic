import { BsCheckLg } from "react-icons/bs";
import LoadingButton from "../LoadingButton";
import './style.scss';

const CheckButton = ({className, action, saved, text}: {className?: string, action: () => Promise<boolean>, saved: boolean, text: string}) => {
    return(
        <LoadingButton inactive={saved} className={`${className} save-changes-button`} action={action}>
            {
                saved ?
                <span>Salvo <BsCheckLg color='green' /></span>
                :
                <span>{text}</span>
            }
        </LoadingButton>
    );
}
export default CheckButton;