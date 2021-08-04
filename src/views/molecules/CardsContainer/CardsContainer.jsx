import React from 'react';
import { MovieCard } from '../../elements/MovieCard';
import { useDispatch, useSelector } from 'react-redux';
import { getFilms } from '../../../redux/actions';
import { CardsContainerStyle, CardsCarousel } from './styles';
import { useEffect } from 'react';

export const CardsContainer = () => {
    const selector = useSelector(store => store);
    const dispatch = useDispatch();
    const isReady = Object.keys(selector).length > 0;

    useEffect(() => {
        dispatch(getFilms())
    },[dispatch]);


    return isReady ? <>
        <CardsContainerStyle>
            <CardsCarousel>
               {
                selector
                .starData
                .films
                .sort((a,b) => a.episodeID - b.episodeID)
                .map(item => <MovieCard key={item.id} movie={item}/>)
                }
            </CardsCarousel>
        </CardsContainerStyle>
    </>: null
}
