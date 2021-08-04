import React from 'react';
import styled from 'styled-components';
import { Color } from '../atoms/Colors';
import { IconButton } from '../atoms/IconButton/IconButton';
import { HeaderText } from '../atoms/Typography/HeaderText';
import iconClose from '../../assets/images/close.svg'
import { useHistory } from 'react-router-dom';

export const SideMenu = ({ isClose, closeMenu }) => {
    const history = useHistory();

    const handleClick = route => {
        closeMenu();
        history.push(route);
    }
    return <>
        <SideMenuStyles isClose={isClose}>
            <MenuButtonContainer>
                <IconButton
                    image={iconClose}
                    name='closed'
                    onClick={closeMenu}
                />
            </MenuButtonContainer>
            <MenuLogoContainer>
                <MenuLogo src='https://firebasestorage.googleapis.com/v0/b/star-wars-ships.appspot.com/o/logo.png?alt=media&token=d5ca0344-d76c-4de7-af08-272b5c8ab63c' />
            </MenuLogoContainer>
            <HeaderText
                onClick={() => handleClick('/')}>Home</HeaderText>
            <HeaderText
                onClick={() => handleClick('/favorites')}>Favorites</HeaderText>
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
    position: fixed;
    top: 0;
    z-index:10;
    left: ${p => p.isClose ? '-100%' : '0'}; 
    transition: all 0.3s;
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
const MenuLogoContainer = styled.div`
    width: 100%;
    text-align:center;
`;
const MenuLogo = styled.img`
    width: 150px;
`;
