/**
 * Authenty AE - Bom Princípio-RS  |  github.com/authentyAE
 * by: will.i.am                   |  github.com/williampilger
 *
 * 2022 - Bom Princípio - RS
 */
import styled from 'styled-components';

import theme from '../../config/theme.scss';

type SelectProps = {
    small?:boolean,
    large?:boolean,
    fail?:boolean,
    checked?:boolean
}
export const DefaultSelect = styled.select<SelectProps>`

    background-color: ${theme.backgroundColor};
    border-radius: 5px;
    padding: 4px;
    border: ${(props) => props.fail ? `2px solid ${theme.errColor}` : ( props.checked ? `1px solid ${theme.checkColor}` : `1px solid ${theme.boxShadow}` ) };
    color: ${theme.textBackgroundColor};
    font-size: ${(props) => props.small ? '10px' : ( props.large ? '20px' : '15px')};
    &:focus{
        outline:0;
    }
`;