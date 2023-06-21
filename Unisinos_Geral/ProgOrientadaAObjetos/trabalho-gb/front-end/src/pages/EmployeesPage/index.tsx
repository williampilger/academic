/**
 * Authenty AE - Bom Princípio-RS  |  github.com/authentyAE
 * by: will.i.am                   |  github.com/williampilger
 *
 * 2023.06 - Bom Princípio - RS
 */


import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api';
import { employee_type } from '../../api/types';
import Loading from '../../components/Loading';
import { useAppSelector } from '../../storage/hooks';
import './style.scss';

export default function EmployeesPage() {

    const [data, setData] = useState<employee_type[] | undefined>(undefined)
    const [err, setErr] = useState('')
    const userData = useAppSelector((state)=>state.userData);

    const load = async () => {
        let r = await api.admin.employees.list();
        if(r.success){
            setData(r.data.employees)
        } else {
            setErr('Impossivel obter lista de funcionários')
        }
    }

    useEffect( ()=>{
        load()
    }, [])

    return (
        <div className='EmployeesPage'>
            <div className="centered">
                <h1>Cadastro de Funcionários</h1>
                <span>clique sobre um funcionário para editá-lo</span>
                <div className="func-group">
                    {
                        data ?
                        <>{
                            data.map( item => {
                                return(
                                    <Link className='employee-item' to={`/admin/employee/${item.id}`}>
                                        <span className='g'>{item.fullname}</span>
                                        <span className='m'>{item.email}</span>
                                    </Link>
                                )
                            })
                        }
                            <Link className='employee-item' to={`/admin/employee/0`}>
                                <span className='g'>Novo Usuário</span>
                                <span className='m'>Clique aqui para criar uma nova conta</span>
                            </Link>
                        </>
                        :
                        <Loading fail={err!=''} fail_text={err}/>
                    }
                </div>
            </div>
        </div>
    );
}
  
  