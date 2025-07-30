/**
 * Authenty AE - Bom Princípio-RS  |  github.com/authentyAE
 * by: will.i.am                   |  github.com/williampilger
 *
 * 2022 - Bom Princípio - RS
 */
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { useAppSelector } from '../storage/hooks';

import Header from '../components/Header';
import EmployeeEditPage from '../pages/EmployeeEdit';
import EmployeesPage from '../pages/EmployeesPage';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import ReportsPage from '../pages/ReportsPage';

const Rotes = () => {

    const userData = useAppSelector((state) => state.userData);

    return (
        <BrowserRouter>

            <Header />

            <main>
                <Routes>
                    <Route path={`/`} element={ <LoginPage /> } />
                    {
                        userData.employee.id > 0 &&
                        <>
                            <Route path={`/home`} element={ <HomePage /> } />
                            {
                                userData.employee.isAdm &&
                                <>
                                    <Route path={`/admin/employees`} element={ <EmployeesPage /> } />
                                    <Route path={`/admin/employee/:itemID`} element={ <EmployeeEditPage /> } />
                                    <Route path={`/admin/reports`} element={ <ReportsPage /> } />
                                </>
                            }
                        </>
                    }
                    <Route path={`*`} element={ <Navigate to='/' /> } />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default Rotes;