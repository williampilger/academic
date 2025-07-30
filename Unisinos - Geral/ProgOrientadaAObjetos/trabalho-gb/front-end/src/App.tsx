/**
 * Authenty AE - Bom Princípio-RS  |  github.com/authentyAE
 * by: will.i.am                   |  github.com/williampilger
 *
 * 2023.06.20 - Bom Princípio - RS
 */

import Routes from './config/Routes';


export type AuthType = {
    login: (usr: string, pswd: string) => Promise<boolean>,
    logout: () => Promise<boolean>,
    checkSession: () => Promise<boolean>,
    msg: string //only filled when one error was successed
}

function App() {

    return (
        <div className="App" style={{backgroundImage:`url("https://www.authentydev.com.br/ResourceStock/BackgroundImages/stock/Max .jpg")`}}>
            <Routes />
        </div>
    );
}

export default App;
