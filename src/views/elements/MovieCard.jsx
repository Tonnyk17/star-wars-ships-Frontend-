import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { getShips, getShipsImages } from '../../redux/actions';
import { Color } from '../atoms/Colors';

export const MovieCard = ({ movie, images }) => {
    const dispatch = useDispatch();
    const history = useHistory();
   
    const showShips = () => {
        history.push('/ships')
        dispatch(getShips(movie.starshipConnection))
        dispatch(getShipsImages(images.ships))
    }
    
    return <>
        <MovieCardStyle onClick={showShips}>
            <MovieCardImage src={images.src} alt='movie' />
        </MovieCardStyle>
    </>
}

const MovieCardStyle = styled.div`
    width: 200px;
    height: 300px;
    background-color: ${Color.black};
    color: white;
    border-radius: 10px;
    margin:10px;
    cursor:pointer;
    border: 1px solid ${Color.yellowLight};
    @media screen and (min-width: 1025px){
        &: hover{
            transform: scale(1.1);
        }
    }
`
const MovieCardImage = styled.img`
    width: 200px;
    border-radius: 10px;
`