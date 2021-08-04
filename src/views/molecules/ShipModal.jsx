import React from 'react';
import styled from 'styled-components';
import { ShipCardText } from '../elements/ShipCardText';
import { Color } from '../atoms/Colors';
import { IconButton } from '../atoms/IconButton/IconButton';
import closeIcon from '../../assets/images/close.svg';
import { Button } from '../atoms/Button';

export const ShipModal = ({ onClick, buttonContent, buttonFunction }) => {
    
    const handleClick = () => {
        onClick();
        buttonFunction();
    }
    return <>
        <ModalContent>
            <ModalStyles>
                <IconModalContainer>
                    <IconButton image={closeIcon} name='closed' onClick={onClick} />
                </IconModalContainer>
                <ModalImage src='https://media.moddb.com/images/mods/1/11/10611/y-wingv2_1_2.png' />
                <div>
                    <ShipCardText />
                    <ButtonContainer>
                        <Button content={buttonContent} onClick={handleClick} />
                    </ButtonContainer>
                </div>
            </ModalStyles>
        </ModalContent>

    </>
}



const ModalContent = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    background-color: ${Color.black80};
    @media screen and (min-width: 700px) {
    z-index: 10;
    }
`;

const ModalStyles = styled.div`
    width: 300px;
    max-height: 600px;
    background-color: ${Color.black80};
    border-radius: 20px;
    border: 1px solid ${Color.yellow};
    padding-top: 10px;
    padding-bottom: 10px;
    position: relative;
    box-shadow: 0 0 5px ${Color.yellow};

    @media screen and (min-width: 700px){
        width: 500px;
        max-height: 700px;
        
    }
    
    @media screen and (min-width: 1025px){
        width: 70%;
        height: 500px;
        display: flex;
        align-items: center;
        grid-gap: 20px;
    }
`;

const IconModalContainer = styled.div`
    width: 35px;
    height: 35px;
    position: absolute;
    right: 10px;
    top: 10px;

`;

const ModalImage = styled.img`
    width: 200px;
    height: 120px;

    @media screen and (min-width: 700px){
        width: 250px;
        height: 150px;
    }
    
    @media screen and (min-width: 1025px){
        width: 400px;
        height: 300px;
        
    }
`;

const ButtonContainer = styled.div`
    margin-top: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
`;