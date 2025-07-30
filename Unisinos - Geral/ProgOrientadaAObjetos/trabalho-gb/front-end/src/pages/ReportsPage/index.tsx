/**
 * Authenty AE - Bom Princípio-RS  |  github.com/authentyAE
 * by: will.i.am                   |  github.com/williampilger
 *
 * 2023 - Bom Princípio - RS
 */


import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api';
import { employee_type } from '../../api/types';
import Loading from '../../components/Loading';
import './style.scss';

export default function ReportsPage() {

    type dateType = {
        date: string,
        time: {
            normal: number,
            extra: number
        }
    }

    type pageDataType = {
        employee: employee_type,
        dates: dateType[]
    };

    const DateToString = ( timestamp:number ):string => {
        const date = new Date(timestamp * 1000)
        const d = String(date.getDate()).padStart(2, '0');
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const y = date.getFullYear();
        return `${d}/${m}/${y}`;
    }

    const [data, setData] = useState<pageDataType[] | undefined>(undefined)
    const [err, setErr] = useState('')

    const load = async () => {
        let r = await api.admin.employees.list_wtt();
        if(r.success){
            let no:pageDataType[] = []
            
            r.data.employees.forEach( employee => {
                if(employee.timestamps && employee.timestamps.length > 0){
    
                    let dates:dateType[] = []
                    employee.timestamps.forEach( timestamp => {
                        if(timestamp[1] && timestamp[1]>0){
                            let durac = timestamp[1] - timestamp[0]

                            let date = DateToString(timestamp[0])
                            let j = dates.findIndex( item => item.date==date )

                            if( j>=0 ){
                                dates[j].time.normal = dates[j].time.normal + durac
                            } else {
                                dates.push({
                                    date,
                                    time:{
                                        normal: durac,
                                        extra: 0
                                    }
                                })
                            }
                        }//desconsidera total os períodos sem tempo de fechamento
                    })

                    dates.forEach( (item,index) => {//percorre novamente para calcular a hora extra
                        if(item.time.normal > 30528){
                            dates[index].time.extra = item.time.normal - 30528
                            dates[index].time.normal = 30528
                        }
                    })
                    
                    no.push({
                        employee,
                        dates
                    })
                    
                }
            })

            setData(no)
        } else {
            setErr('Impossivel obter dados')
        }
    }

    useEffect( ()=>{
        load()
    }, [])

    return (
        <div className='ReportsPage'>
            <div className="centered">
                <Link to='/home'>Voltar</Link>
                <h1>Relatório dos Funcionários</h1>
                <span>Resumo do tempo trabalhado por funcionário por dia</span>
                <div className="result-group">
                    {
                        data ?
                        <>{
                            data.map( employee => {
                                return(
                                    <div className='employee-group'>
                                        <div className="emplo-name">
                                            <span className="gg">{employee.employee.fullname}</span>
                                            <span className="p">{employee.employee.email}</span>
                                        </div>
                                        <div className="timestamps">
                                            {
                                                employee.dates.length > 0 ?
                                                employee.dates.map( date => {
                                                    return(
                                                        <div className='date-card'>
                                                            <span className="g date-span">{date.date}</span>
                                                            <span className="m"><strong>Tempo normal: </strong>{(date.time.normal/60).toFixed(2)}min</span>
                                                            <span className="m"><strong>Tempo Extra: </strong>{(date.time.extra/60).toFixed(2)}min</span>
                                                        </div>
                                                    )
                                                })
                                                :
                                                <span className='m'>Não possui registro fechado</span>
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }</>
                        :
                        <Loading fail={err!=''} fail_text={err}/>
                    }
                </div>
            </div>
        </div>
    );
}
  
  