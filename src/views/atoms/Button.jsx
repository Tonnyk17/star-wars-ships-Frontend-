import React from 'react';
import styled from 'styled-components';
import { Color } from './Colors';

export const Button = ({ content, onClick }) => {
    return <>
        <ButtonStyles onClick={onClick}>{content}</ButtonStyles>
    </>
}

const ButtonStyles = styled.div`
    width: 150px;
    height: 30px;
    border: 1px solid ${Color.yellowLight};
    line-height: 30px;
    color: ${Color.yellow};
    border-radius: 5px;
    box-shadow: 0 0 5px ${Color.yellow};
    &: hover{
        background-color: ${Color.yellowLight};
        color: ${Color.white};
    }
`;