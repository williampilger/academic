/**
 * Authenty AE - Bom Princípio-RS  |  github.com/authentyAE
 * by: will.i.am                   |  github.com/williampilger
 *
 * 2022 - Bom Princípio - RS
 */
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useAppSelector } from '../storage/hooks';

import Header from '../components/Header';
import EmployersPage from '../pages/EmployersPage';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import ReportsPage from '../pages/ReportsPage';

const Rotes = () => {

    const userData = useAppSelector((state) => state.userData);

    const queryParams = new URLSearchParams(window.location.search);
    const url = queryParams.get('url');
    // if(url && url!='')
    // {
    //     navigate(`${Config.home}/${url}`);
    // }

    return (
        <BrowserRouter>

            <Header />

            <main>
                <Routes>
                    <Route path={`/`} element={ <LoginPage /> } />
                    <Route path={`/home`} element={ <HomePage /> } />
                    <Route path={`/admin/employers`} element={ <EmployersPage /> } />
                    <Route path={`/admin/reports`} element={ <ReportsPage /> } />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default Rotes;