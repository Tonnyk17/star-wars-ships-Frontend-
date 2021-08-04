import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { selectShip } from '../../redux/actions';
import { Color } from '../atoms/Colors';

export const ShipCard = ({ onClick, shipData }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        onClick();
        dispatch(selectShip(shipData))
    }
    return <>
        <ShipCardStyle onClick={handleClick}>
            <ShipImage src='https://media.moddb.com/images/mods/1/11/10611/y-wingv2_1_2.png' />
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