/*
 * Authenty AE - Bom Princípio-RS  |  github.com/authentyAE
 * by:  will.i.am                  |  github.com/williampilger
 *
 * 2023.06.20 - Bom Princípio - RS
 * 
*/
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import api from '../../api';
import Loading from '../../components/Loading';
import LoadingButton from '../../components/LoadingButton';
import { TimestampShow } from '../../components/TimestampShow';
import { useAppSelector } from '../../storage/hooks';
import './style.scss';


const HomePage = () => {
    
    const userData = useAppSelector((state)=>state.userData);
    
    const [timestamps, setTimestamps] = useState<number[][] | undefined>(undefined); 

    useEffect( () => {
        const load = async () => {
            let r = await api.account.getTimestamps()
            if( r.success ){
                setTimestamps(r.data.timestamps)
            }
        }
        load()
    },[]);

    return (
    <div className="main-homepage">
        {
            userData.employer.id == 0 &&
            <Navigate to='/'/>
        }
        <div className='view'>
            <div className='centralcard'>
                <div className='boasvindas'>
                    <h2>Bem vindo, {userData.employer.fullname}!</h2>
                    <span className='mm'>{userData.employer.email}</span>
                </div>
                <div className='ponto'>
                    {
                        timestamps != undefined ?
                        <div className='marcacoes'>
                            <h3>Minhas Marcações Ponto</h3>
                            {
                                timestamps.map( par => {
                                    return(
                                        <div className="timestamp-item">
                                            <span>Entrada: <TimestampShow timestamp={par[0]}/></span>
                                            <span>Saída: { par[1] ? <TimestampShow timestamp={par[1]}/> : '-' }</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        :
                        <Loading/>
                    }
                    <div className="nova-marcacao">
                        <LoadingButton action={ async () => {
                            let r = await api.account.newTimestamp()
                            if( r.success ){
                                setTimestamps(r.data.timestamps)
                                return true;
                            }
                            return false;
                        }}>Criar Marcação</LoadingButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default HomePage;