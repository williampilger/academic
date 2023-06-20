/**
 * Authenty AE - Bom Princípio-RS  |  github.com/authentyAE
 * by: will.i.am                   |  github.com/williampilger
 *
 * 2023.06.20 - Bom Princípio - RS
 */
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Config from '../../../package.json';
import LoadingButton from '../../components/LoadingButton';
import { DefaultInput } from '../../components/StyledComponents/styled_input';
import { useAppSelector } from '../../storage/hooks';

import './style.scss';

export type formDataType = {
    email: string,
    pswd: string,
    attept: boolean
}

export default function LoginPage() {
    
    const navigate = useNavigate();

    const auth = useAppSelector((state)=>state.authFunctions);
    const userData = useAppSelector((state)=>state.userData);
    
    const [formData, setFormData] = useState<formDataType>({email:'', pswd:'', attept:false});

    useEffect(()=>{
        if(userData.id > 0) navigate(`${Config.home}/`);
    }, [userData]);

    return (
        <div className='LoginPage' style={{backgroundImage:`url("")`}}>
            <div className='view'>
                <div className='centralcard'>
                    <h2>Faça seu Login</h2>
                    <div className='crieConta'>
                        <p className='spanm'>Não possui uma conta?</p>
                    </div>
                    <div className='doLogin'>
                        <form action="">
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
                                    formData.attept && auth.msg!='' &&
                                    <span>{auth.msg}</span>
                                }
                            </div>
                            <div className='confirmButton'>
                                <Link className='forgotPswd spanm' to={`${Config.home}/_forgotPswd/-`}> Esqueci minha senha.</Link>
                                <LoadingButton className='loginbutton' action={async ()=>{
                                    setFormData({
                                        ...formData,
                                        attept: true
                                    });
                                    if(formData.email != '' && formData.pswd != ''){
                                        if( await auth.login(formData.email, formData.pswd) )
                                        {
                                            navigate(`${Config.home}/`);
                                            return true;
                                        }
                                    }
                                    return false;
                                }}>Fazer Login</LoadingButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
  