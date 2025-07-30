/**
 * Authenty AE - Bom Princípio-RS  |  github.com/authentyAE
 * by: will.i.am                   |  github.com/williampilger
 *
 * 2022 - Bom Princípio - RS
 */
import styled from 'styled-components';

import theme from '../../config/theme.scss';

type ButtonProps = {
    small?:boolean,
    large?:boolean,
    inactive?:boolean,
    inverse?:boolean,// Inverte as cores destaque
    bold?:boolean//Coloca o texto em negrito
}
export const DefaultButton = styled.button<ButtonProps>`

    background-color: ${(props)=>props.inactive ? (props.inverse ? theme.textAccentColor2 : theme.inactiveAccent2) : (props.inverse ? theme.textAccentColor2 : theme.accentColor2)};
    border-radius: 70px;
    border: ${(props)=>props.inverse ? `3px solid ${props.inactive ? theme.inactiveAccent2 : theme.accentColor2}` : 'none'};
    padding: ${(props)=>props.inverse ? '4px' : '7px'} 15px;
    color: ${(props)=>props.inactive ? (props.inverse ? theme.inactiveAccent2 : theme.textAccentColor2) : (props.inverse ? theme.accentColor2 : theme.textAccentColor2)};
    font-weight: ${(props)=>props.bold ? 'bold' : 'normal'};
    font-size: ${(props) => props.small ? '10px' : ( props.large ? '20px' : '15px')};
    width: fit-content;
    font-family: ${theme.defaultFontStach};
    ${(props)=>props.inactive ? '' : `
    transition: all ease .2s;
    &:hover {
        opacity: .9;
        cursor: pointer;
    }
    `}
`;