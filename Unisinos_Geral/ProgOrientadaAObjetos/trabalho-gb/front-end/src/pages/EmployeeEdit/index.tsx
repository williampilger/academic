/**
 * Authenty AE - Bom Princípio-RS  |  github.com/authentyAE
 * by: will.i.am                   |  github.com/williampilger
 *
 * 2023.06 - Bom Princípio - RS
 */


import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import api from '../../api';
import { employee_type, role_type } from '../../api/types';
import CheckButton from '../../components/CheckButton';
import DefaultPasswordInput from '../../components/DefaultPasswordInput';
import Loading from '../../components/Loading';
import { DefaultInput } from '../../components/StyledComponents/styled_input';
import { DefaultSelect } from '../../components/StyledComponents/styled_select';
import './style.scss';

export default function EmployeeEditPage() {

    const { itemID } = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState<employee_type | undefined>(undefined)
    const [err, setErr] = useState('')
    const [saved, setSaved] = useState(true)

    const load = async () => {
        if(itemID != '0'){
            let r = await api.admin.employees.get( Number(itemID) );
            if(r.success){
                setData(r.data.employee)
            } else {
                setErr('Impossivel obter dados')
            }
        } else {
            setData({
                fullname: '',
                email: '',
                cpf: '',
                id: 0,
                phone: '',
                passwd: '',
                role: 'Generic Employee',
                isAdm: false
            })
        }
    }

    useEffect( ()=>{
        load()
    }, [])


    return (
        <div className='EmployeeEditPage'>
            <div className="centered">
                <Link to="/admin/employees">Voltar</Link>
                <h1>{itemID==='0' ? 'Criação' : 'Edição'} de Funcionário</h1>
                <span>Modifique o funcionário</span>
                <div className="result-group">
                    {
                        data ?
                        <div className="user-form">
                            <table>
                                <tr><td>Nome Completo</td><td><DefaultInput value={data.fullname} onChange={ e => {
                                    setData({...data, fullname: e.target.value})
                                    setSaved(false)
                                }} /></td></tr>
                                <tr><td>CPF</td><td><DefaultInput value={data.cpf} onChange={ e => {
                                    setData({...data, cpf: e.target.value})
                                    setSaved(false)
                                }} /></td></tr>
                                <tr><td>Telefone</td><td><DefaultInput value={data.phone} onChange={ e => {
                                    setData({...data, phone: e.target.value})
                                    setSaved(false)
                                }} /></td></tr>
                                <tr><td>E-mail</td><td><DefaultInput value={data.email} onChange={ e => {
                                    setData({...data, email: e.target.value})
                                    setSaved(false)
                                }} /></td></tr>
                                <tr><td>Nova Senha</td><td><DefaultPasswordInput autocomplete="new-password" placeholder='Definir uma nova senha' value={data.passwd ? data.passwd : ''} onChange={ e => {
                                    setData({...data, passwd: e.target.value})
                                    setSaved(false)
                                }} /></td></tr>
                                <tr><td>Cargo</td><td><DefaultSelect style={{width:'100%'}} value={data.role} onChange={ e => {
                                    setData({...data, role: e.target.value as role_type})
                                    setSaved(false)
                                }}>
                                    <option value="Generic Employee">Generic Employee</option>
                                    <option value="Administrator">Administrator</option>
                                    <option value="Software Developper">Software Developper</option>
                                    <option value="Secretary">Secretary</option>
                                    <option value="Marketer">Marketer</option>
                                    <option value="Owner">Owner</option>
                                    <option value="Director">Director</option>
                                </DefaultSelect></td></tr>
                            </table>
                            <CheckButton saved={saved} text='Salvar' action={ async () => {
                                let send = {...data}
                                if( send.passwd && send.passwd == '' ){
                                    delete send.passwd
                                }
                                if( send.id == 0){
                                    let r = await api.admin.employees.new(send);
                                    if( r.success ){
                                        setData(r.data.employee)
                                        setSaved(true)
                                        return true
                                    }
                                } else {
                                    let r = await api.admin.employees.update(send);
                                    if( r.success ){
                                        setData(r.data.employee)
                                        setSaved(true)
                                        return true
                                    }
                                }
                                return false
                            }}/>
                        </div>
                        :
                        <Loading fail={err!=''} fail_text={err}/>
                    }
                </div>
            </div>
        </div>
    );
}
  
  