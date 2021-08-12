import React, { useState } from 'react';
import { ShipModal } from '../../molecules/ShipModal';
import { ShipCard } from '../../molecules/ShipCard';
import { ShipsStyle } from './Styles';
import { TitleText } from '../../atoms/Typography/TitleText';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useEffect } from 'react';


export const Ships = () => {

    const [isClosed, setIsClosed] = useState(true);
    const selector = useSelector(store => store);
    const shipSelected = useSelector(store => store.shipSelected);
    const [filtered,setFilteres] = useState([]);

    const ADD_SHIP = gql`
            mutation createShip(
                $id: String!,
                $image:String, 
                $name: String,
                $model: String,
                $starshipClass: String,
                $manufacturers:[String],
                $costInCredits: String,
                $length: Float,
                $crew: String,
                $passengers: String,
                $maxAtmospheringSpeed:Int,
                $movies: [String]
            ){
                createShip(
                    id:$id,
                    image:$image,
                    name:$name,
                    model:$model,
                    starshipClass:$starshipClass,
                    manufacturers:$manufacturers,
                    costInCredits:$costInCredits,
                    length:$length,
                    crew:$crew,
                    passengers:$passengers,
                    maxAtmospheringSpeed:$maxAtmospheringSpeed,
                    movies:$movies){name,image}
            }
        `
        const [createShip] = useMutation(ADD_SHIP);
        const handleAddFavorites = () => {
                setIsClosed(!isClosed);
                createShip({variables:{
                    id:String(shipSelected.id),
                    image: (selector.imageSelected),
                    name: shipSelected.name,
                    model: shipSelected.model,
                    starshipClass: shipSelected.starshipClass,
                    manufacturers: shipSelected.manufacturers,
                    costInCredits:String(shipSelected.costInCredits),
                    crew: shipSelected.crew,
                    length: shipSelected.length,
                                passengers:shipSelected.passengers,
                                maxAtmospheringSpeed: shipSelected.maxAtmospheringSpeed,
                                movies: shipSelected.movies
                }})
            setIsClosed(!isClosed);
        }
        const handleClick = () => {
            setIsClosed(!isClosed);
        }
   
        const shipsFilter = payload => {
            const org = new Set(payload);
            setFilteres([...org])
        }
        
        useEffect(() => {
           if(selector.ships !== undefined){
            shipsFilter(selector.ships.starships)
           }
        },[])
        
    return selector.ships === undefined ? <Redirect to='/'/> : <>
        {isClosed ? null :
            <ShipModal 
            onClick={handleClick} 
            buttonContent={'Add to favorites'} 
            buttonFunction={handleAddFavorites}
            />
        }
        <TitleText>Choose a Starship...</TitleText>
        <ShipsStyle>
            {
                filtered.map((item, i) => 
                <ShipCard 
                    onClick={handleClick} 
                    shipData={item} key={i} 
                    images={selector.shipImages.find(image => image.id === item.id)}
                />)
            }
        </ShipsStyle>
    </>
}

