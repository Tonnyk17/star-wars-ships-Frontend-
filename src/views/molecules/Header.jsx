import React, { useState } from 'react';
import styled from 'styled-components';
import { IconButton } from '../atoms/IconButton/IconButton';
import { SideMenu } from '../elements/SideMenu';
import menuIcon from '../../assets/images/menu.svg';

export const Header = () => {
    const [isClose, setIsClose] = useState(Boolean);

    const closeMenu = () => {
        setIsClose(!isClose);
    }
    return <>
        <HeaderStyle>
            <IconContainer isClose={isClose}>
                <IconButton image={menuIcon} name='menu' onClick={closeMenu} />
            </IconContainer>
            <SideMenu isClose={isClose} closeMenu={closeMenu} />
        </HeaderStyle>
    </>
}

const HeaderStyle = styled.div`
    width: 100%;
    position: relative;
    padding-top: 10px;
`
const IconContainer = styled.div`
    width: 90%;
    margin:0 auto;
    display: ${p => p.isClose ? 'flex' : 'none'};
`