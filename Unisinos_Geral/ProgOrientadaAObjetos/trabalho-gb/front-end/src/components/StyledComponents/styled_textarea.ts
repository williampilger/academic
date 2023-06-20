/**
* Authenty AE - Bom Princípio-RS  |  github.com/authentyAE
* by: OtavioMaldaner              |  github.com/OtavioMaldaner
*
* 2022 - Bom Princípio - RS
*/
import styled from 'styled-components';

import theme from '../../config/theme.scss';

type TextareaProps = {
    resize?: boolean,
    checked?: boolean,
    fail?: boolean
}
 
export const DefaultTextarea = styled.textarea<TextareaProps>`
    background-color: ${theme.backgroundColor};
    border-radius: 5px;
    padding: 4px;
    border: ${(props) => props.fail ? `2px solid ${theme.errColor}` : ( props.checked ? `1px solid ${theme.checkColor}` : `1px solid ${theme.boxShadow}` ) };
    color: ${theme.textBackgroundColor};
    font-size: '15px';
    ${(props) => props.resize && 'resize: none;'}
    font-fmaily: ${theme.defaultFontStach};
    &:focus {
        outline:0;
    }
`;