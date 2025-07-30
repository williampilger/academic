/**
 * Authenty AE - Bom Princípio-RS  |  github.com/authentyAE
 * by: OtavioMaldaner              |  github.com/OtavioMaldaner
 *
 * 2023 - Bom Princípio - RS
 */

import styled from 'styled-components';

import theme from '../../config/theme.scss';

type FormProps = {
    small?: boolean,
    large?: boolean,
    fail?: boolean,
    checked?: boolean
}

export const DefaultAdminForm = styled.form<FormProps>`
    width: 80%;
    max-width: 500px;
    box-shadow: 0 0 20px 15px ${theme.boxShadow};
    border-radius: 5px;
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-height: 650px;
    overflow: auto;
    background-color: ${theme.backgroundColor};
`;