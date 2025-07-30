/**
 * Authenty AE - Bom Princípio-RS  |  github.com/authentyAE
 * by: will.i.am                   |  github.com/williampilger
 *
 * 2023.06.19 - Bom Princípio - RS
 */
import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import Config from '../../../package.json';
import LoadingButton from '../../components/LoadingButton';
import { DefaultInput } from '../../components/StyledComponents/styled_input';
import { useAppDispatch, useAppSelector } from '../../storage/hooks';

import API from '../../api';
import { setUserData } from '../../storage/reducers/userData';
import './style.scss';

export type formDataType = {
    email: string,
    pswd: string,
    attept: boolean
}

export default function LoginPage() {
    
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const userData = useAppSelector((state)=>state.userData);
    const user = useAppSelector((state) => state.userData);
    
    const [formData, setFormData] = useState<formDataType>({email:'', pswd:'', attept:false});
    const [cookies, setCookies] = useState(true);
    const [errMsg, setErrMsg] = useState('');


    const login = async (usr: string, pswd: string) => {
        let resp = await API.auth.login(usr, pswd);
        if (resp.success) {
            setErrMsg('');
            dispatch(setUserData(resp.data));
            return true;
        } else {
            setErrMsg(resp.msg);
        }
        return false;
    }

    const logout = async () => {
        let resp = await API.auth.logout();
        return resp.success;
    }

    const checkSession = async () => {
        let resp = await API.auth.checkSession();
        if (resp.success) {
            dispatch(setUserData(resp.data));
            return true;
        } else {
            // dispatch( logout() );
        }

        return false;
    }

    useEffect( ()=>{
        checkSession();
    }, []);


    return (
        <div className='LoginPage'>
            {
                userData.employee.id > 0 &&
                <Navigate to='/home'/>
            }
            <div className='view'>
                <div className='centralcard'>
                    <h2>Faça seu Login</h2>
                    <div className='crieConta'>
                        <a className='spanm' onClick={ _ => alert('Função não implementada! Você precisa falar com o operador do sistema para criar uma conta!')}>Não possui uma conta?</a>
                    </div>
                    <div className='doLogin'>
                        <div className='form'>
                            <div>
                                <label className='spanm' htmlFor="email">E-mail</label>
                                <DefaultInput id='email' type='email' required autoFocus placeholder='sample@sample.com' value={formData.email} onChange={(e)=>{
                                    setFormData({
                                        ...formData,
                                        email: e.target.value.toLocaleLowerCase(),
                                        attept: false
                                    });
                                }}/>
                            </div>
                            <div>
                                <label htmlFor="pswd">Senha</label>
                                <DefaultInput id='pswd' type='password' required minLength={8} placeholder={"******"} value={formData.pswd} onChange={(e)=>{
                                    setFormData({
                                        ...formData,
                                        pswd: e.target.value,
                                        attept: false
                                    });
                                }}/>
                            </div>
                            <div className='infos_avisos'>
                                {
                                    formData.attept && errMsg!='' &&
                                    <span>{errMsg}</span>
                                }
                            </div>
                            <div className='confirmButton'>
                                <a className='forgotPswd spanm' onClick={ _ => alert('Função não implementada!')}> Esqueci minha senha.</a>
                                <LoadingButton className='loginbutton' action={async ()=>{
                                    setFormData({
                                        ...formData,
                                        attept: true
                                    });
                                    if(formData.email != '' && formData.pswd != ''){
                                        if( await login(formData.email, formData.pswd) )
                                        {
                                            navigate(`${Config.home}/home`);
                                            return true;
                                        }
                                    }
                                    return false;
                                }}>Fazer Login</LoadingButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
  