/**
 * Authenty AE - Bom Princípio-RS  |  github.com/authentyAE
 * by: will.i.am                   |  github.com/williampilger
 *
 * 2023.06 - Bom Princípio - RS
 */


import { useEffect, useState } from 'react';
import { employee_type } from '../../api/types';
import Loading from '../../components/Loading';
import './style.scss';

export default function GenericPage() {

    const [data, setData] = useState<employee_type[] | undefined>(undefined)
    const [err, setErr] = useState('')

    // const load = async () => {
    //     let r = await api.function();
    //     if(r.success){
    //         setData(r.data.field)
    //     } else {
    //         setErr('Impossivel obter dados')
    //     }
    // }

    useEffect( ()=>{
        // load()
    }, [])

    return (
        <div className='GenericPage'>
            <div className="centered">
                <h1>Página Base</h1>
                <span>Página usada para replicar outras páginas</span>
                <div className="result-group">
                    {
                        data ?
                        <> </>
                        :
                        <Loading fail={err!=''} fail_text={err}/>
                    }
                </div>
            </div>
        </div>
    );
}
  
  