/*
 * Authenty AE - Bom Princípio-RS  |  github.com/authentyAE
 * by:  will.i.am                  |  github.com/williampilger
 *
 * 2023.06.20 - Bom Princípio - RS
 * 
*/
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api';
import Loading from '../../components/Loading';
import LoadingButton from '../../components/LoadingButton';
import { TimestampShow } from '../../components/TimestampShow';
import { useAppSelector } from '../../storage/hooks';
import './style.scss';


const HomePage = () => {
    
    const userData = useAppSelector((state)=>state.userData);
    
    type pontoReg = {
        entrada: number,
        saida?: number
        duracao: number
    }
    const [timestamps, setTimestamps] = useState<pontoReg[] | undefined>(undefined); 

    const processTimestamps = (timestamps:number[][]) => {
        let reg:pontoReg[] = []
        timestamps.forEach( par =>{
            let entrada = par[0]
            let saida = par[1]
            let duracao = saida ? ((saida - entrada) / 60) : 0
            reg.push({
                entrada,
                saida,
                duracao
            })
        })
        setTimestamps(reg)
    }

    useEffect( () => {
        const load = async () => {
            let r = await api.account.getTimestamps()
            if( r.success ){
                processTimestamps(r.data.timestamps)
            }
        }
        load()
    },[]);

    return (
    <div className="main-homepage">
        <div className='view'>
            <div className='centralcard'>
                <div className='boasvindas'>
                    <h2>Bem vindo, {userData.employee.fullname}!</h2>
                    <span className='mm'>{userData.employee.email}</span>
                    <div className='menus'>
                        {
                            userData.employee.isAdm &&
                            <>
                                <Link className='item' to="/admin/employees">Funcionários</Link>
                                <Link className='item' to="/admin/reports">Relatórios</Link>
                            </>
                        }
                    </div>
                </div>
                <div className='ponto'>
                    {
                        timestamps != undefined ?
                        <div className='marcacoes'>
                            <h3>Minhas Marcações Ponto</h3>
                            {
                                timestamps.map( item => {
                                    return(
                                        <div className="timestamp-item">
                                            <span>Entrada: <TimestampShow timestamp={item.entrada}/></span>
                                            <span>Saída: { item.saida ? <TimestampShow timestamp={item.saida}/> : '-' }</span>
                                            <span>Duração: {item.duracao.toFixed(2)}min</span>
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
                                processTimestamps(r.data.timestamps)
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