/**
 * Authenty AE - Bom Princípio-RS  |  github.com/authentyAE
 * by: will.i.am                   |  github.com/williampilger
 *
 * 2023.06.20 - Bom Princípio - RS
 */
import { useEffect, useState } from 'react';

import API from './api';
import Routes from './config/Routes';

import { useAppDispatch, useAppSelector } from './storage/hooks';
import { setUserData } from './storage/reducers/userData';

export type AuthType = {
    login: (usr: string, pswd: string) => Promise<boolean>,
    logout: () => Promise<boolean>,
    checkSession: () => Promise<boolean>,
    msg: string //only filled when one error was successed
}

function App() {

    const user = useAppSelector((state) => state.userData);
    const dispatch = useAppDispatch();
    const [cookies, setCookies] = useState(true);
    const [checked, setChecked] = useState(false);//Set as true after verify user session. This not mark user login, cause can be true even not logged in.


    const login = async (usr: string, pswd: string) => {
        let resp = await API.auth.login(usr, pswd);
        if (resp.success) {
            dispatch(setErrMsg(''));
            dispatch(setUserData(resp.data.user));
            return true;
        } else {
            dispatch(setErrMsg(resp.msg));
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
            dispatch(setUserData(resp.data.user));
            return true;
        } else {
            // dispatch( logout() );
        }

        return false;
    }

    useEffect(() => {

        
        
    }, []);

    return (
        <div className="App">
            <Routes />
        </div>
    );
}

export default App;
