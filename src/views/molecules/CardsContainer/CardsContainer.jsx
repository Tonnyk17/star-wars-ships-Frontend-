import React from 'react';

import { MovieCard } from '../../elements/MovieCard';
import { useDispatch, useSelector } from 'react-redux';
import { getFilms } from '../../../redux/actions';
import { useLayoutEffect } from 'react';
import { CardsContainerStyle, CardsCarousel } from './styles';
import { useState, useEffect } from 'react';


export const CardsContainer = () => {
    const selector = useSelector(store => store);
    const dispatch = useDispatch();
    const isBoolean = Object.keys(selector).length > 0;

    useEffect(() => {
            dispatch(getFilms())
    },[]);

    return isBoolean ? <>
        <CardsContainerStyle>
            <CardsCarousel>
               {
                selector.starData.allFilms.films.map(item => <MovieCard key={item.id} title={item.title}/>)
                }
            </CardsCarousel>
        </CardsContainerStyle>
    </>: null
}
