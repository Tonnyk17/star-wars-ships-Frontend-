import React from 'react';
import { MovieCard } from '../../elements/MovieCard';
import { useDispatch, useSelector } from 'react-redux';
import { getFilms, getImages } from '../../../redux/actions';
import { CardsContainerStyle, CardsCarousel } from './styles';
import { useEffect } from 'react';
import { TitleText } from '../../atoms/Typography/TitleText';

export const CardsContainer = () => {
    const selector = useSelector(store => store);
    const allImages = useSelector(store => store)
    const dispatch = useDispatch();
    const isReady = selector.starData !== undefined && selector.images !== undefined ? true : false ;
    
    useEffect(() => {
        dispatch(getFilms())

        setTimeout(() => dispatch(getImages()),100)
    },[dispatch]);

    return isReady ? <>
         <TitleText>Choose a film...</TitleText>
        <CardsContainerStyle>
           
            <CardsCarousel>
               {
                selector
                .starData
                .films
                .sort((a,b) => a.episodeID - b.episodeID)
                .map(item => <MovieCard 
                    key={item.id} 
                    movie={item} 
                    images={allImages
                            .images
                            .find(image => parseInt(image.EpisodeID) === item.episodeID 
                             ? image : '')}
                />)
                }
            </CardsCarousel>
        </CardsContainerStyle>
    </>
    : 
        <CardsContainerStyle>
                <CardsCarousel>
                    <TitleText>Loading...</TitleText>   
                </CardsCarousel> 
        </CardsContainerStyle>
}
