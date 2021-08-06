import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getSelectShip, selectShip } from '../../redux/actions';
import { Color } from '../atoms/Colors';

export const ShipCard = ({ onClick, shipData, images,image }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        onClick();
        dispatch(selectShip(shipData))
        dispatch(getSelectShip(window.location.pathname === "/favorites" ? image : images.url))
    }
    return <>
        <ShipCardStyle onClick={handleClick}>
            <ShipImage src={window.location.pathname === "/favorites" ? image : images.url} alt={'starship'}/>
        </ShipCardStyle>
    </>
}

const ShipCardStyle = styled.div`
    width: 200px;
    min-height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Color.black60};
    border-radius: 20px;
    border: 1px solid ${Color.yellow};
    padding: 10px 0;
    cursor: pointer;
    
    @media screen and (min-width: 1025px){
        border: 1px solid ${Color.gray}; 
        &:hover{
            border: 1px solid ${Color.yellow};
            box-shadow: 0 0 5px ${Color.yellow};
        }
    }
`
const ShipImage = styled.img`
    width: 180px;
    height: 100px;
`