import React, { useState } from 'react';
import styled from 'styled-components';
import { IconButton } from '../atoms/IconButton/IconButton';
import { SideMenu } from '../elements/SideMenu';
import menuIcon from '../../assets/images/menu.svg';

export const Header = () => {
    const [isClose, setIsClose] = useState(true);

    const closeMenu = () => {
        setIsClose(!isClose);
    }
    return <>
        <HeaderStyle>
            <IconContainer isClose={isClose}>
                <Icon image={menuIcon} name='menu' onClick={closeMenu} />
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
    height: 10vh;
    margin:0 auto;
    display: flex;
   
`
const Icon = styled(IconButton)`
    display: ${p => p.isClose ? 'initial' : 'none'};
`