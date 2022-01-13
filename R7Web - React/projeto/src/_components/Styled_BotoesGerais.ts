//Este tipo de arquivo serve para criar componentes estilizados, apenas

import styled from 'styled-components';

export const BotaoArredondado = styled.button`
    background-color: blue;
    border-radius: 10px;
    color: white;

    &:hover {
        opacity: 50%;
    }
`;

type BotaoQuadradoProps = {
    bg: string;
    small?: boolean;
}
export const BotaoQuadrado = styled.button<BotaoQuadradoProps>`
    font-size: ${(props) => props.small ? '15px' : '30px'};
    background-color: ${props => props.bg};
    color: white;
`;
//Acima, note que em uma das propriedades usei o () e em outra não. Elas são opcionais quando somente um parâmetro é recebido.

export const Campo = styled.div`
    background-color: black;
    color: white;
    border-radius: 10px;
    padding: 15px;
    display: flex;
    max-width: 500px;
    margin: auto;

    @media (max-width: 500px) {
        flex-direction: column;
    }
`;