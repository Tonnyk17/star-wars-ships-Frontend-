import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { getShips } from '../../redux/actions';
import { Color } from '../atoms/Colors';

export const MovieCard = ({ movie }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    console.log(movie, movie.episodeID)
    const showShips = () => {
        history.push('/ships')
        dispatch(getShips(movie.starshipConnection))
    }
    return <>
        <MovieCardStyle onClick={showShips}>
            <MovieCardImage src='https://4.bp.blogspot.com/-0X-JYjNG7hg/UBJPKgyBxpI/AAAAAAAAJmQ/EZmnn41sW3g/s1600/Star+Wars+-+Attack+Of+The+Clones+(2002)+by+Drew+Struzan.jpg' alt='movie' />
        </MovieCardStyle>
    </>
}

const MovieCardStyle = styled.div`
    width: 200px;
    height: 300px;
    background-color: white;
    color: white;
    border-radius: 10px;
    margin:10px;
    cursor:pointer;
    border: 1px solid ${Color.yellowLight};
    &: hover{
        transform: scale(1.1);
    }
`
const MovieCardImage = styled.img`
    width: 200px;
    border-radius: 10px;
`