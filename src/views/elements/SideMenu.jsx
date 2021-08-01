import React from 'react';
import styled from 'styled-components';
import { Color } from '../atoms/Colors';
import { IconButton } from '../atoms/IconButton/IconButton';
import { HeaderText } from '../atoms/Typography/HeaderText';
import iconClose from '../../assets/images/close.svg'

export const SideMenu = ({ isClose, closeMenu }) => {
    return <>
        <SideMenuStyles isClose={isClose}>
            <MenuButtonContainer><IconButton image={iconClose} name='closed' onClick={closeMenu} /></MenuButtonContainer>
            <HeaderText>Home</HeaderText>
            <HeaderText>Favorites</HeaderText>
        </SideMenuStyles>
    </>
}

const SideMenuStyles = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${Color.black};
    display: flex;
    flex-direction: column;
    align-content:center;
    justify-content:flex-start;
    grid-gap: 20px;
    position: absolute;
    top: 0;
    left: ${p => p.isClose ? '-100%' : '0'}; 
    transition: all 0.5s;
    @media screen and (min-width: 1025px){
        width: 20%;
    }

`;
const MenuButtonContainer = styled.div`
    width: 90%;
    height: 50px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    display: flex; 
    justify-content: flex-end;
`;