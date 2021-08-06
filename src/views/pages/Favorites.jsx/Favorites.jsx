import React from 'react';
import { EmptyMessage, FavoriteStyles } from './Styles';
import { Search } from '../../molecules/Search';
import { useDispatch, useSelector } from 'react-redux';
import { ShipCard } from '../../molecules/ShipCard';
import { useState } from 'react';
import { ShipModal } from '../../molecules/ShipModal';
import { getFavorites } from '../../../redux/actions';
import { TitleText } from '../../atoms/Typography/TitleText';
import { useEffect } from 'react';
import { gql } from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

export const Favorites = () => {
    const selector = useSelector(store => store);
    const ship = useSelector(store => store.shipSelected)
    const dispatch = useDispatch();
    const [isClosed, setIsClosed] = useState(true);
    const [ships,setShips] = useState([]);
    const [filter, setFilter] = useState(true);

    useEffect(() => {
        dispatch(getFavorites())
         
    },[dispatch])
    const REMOVE_SHIP = gql`
    mutation removeShip($id: String!){
        removeShip(id:$id){id}
    }
    `
    
    const [removeShip] = useMutation(REMOVE_SHIP);

    const handleClick = () => {
        setIsClosed(!isClosed); 
        
    }
    const handleRemoveShip = () =>{
        removeShip({variables:{id:ship.id}})
        dispatch(getFavorites())
        setIsClosed(!isClosed); 
        setFilter(true);
    }
    
    const handleChange = e => {
        handleFilter(e.target.value);
       setFilter(false);
    }
    const handleFilter = filterText => {
        // eslint-disable-next-line array-callback-return
        let filterShips = selector.favorites.ship.filter((ship) => {
            if(ship.name.toString().toLowerCase().includes(filterText.toLowerCase())){
                return ship
            }
        })
        setShips(filterShips)
    }
   
    return selector.favorites !== undefined ? <>
        {isClosed ? 
            <div>
                <Search onChange={handleChange}/>
                {ships === undefined || filter ? 
                <FavoriteStyles>
                {
                    selector
                    .favorites
                    .ship
                    .map((item, i) => <ShipCard 
                                        onClick={handleClick} 
                                        shipData={item} 
                                        key={i} 
                                        image={item.image}
                                    />)
                }
                </FavoriteStyles>      
                :
                <FavoriteStyles>
                {
                   ships
                   .map((item, i) => <ShipCard 
                                        onClick={handleClick} 
                                        shipData={item} 
                                        key={i} 
                                        image={item.image}
                                    />)
                }
                </FavoriteStyles>         
                }
               
            </div> 
            :
            <ShipModal 
                onClick={handleClick} 
                buttonContent={'Remove from favorites'}
                buttonFunction={handleRemoveShip}
            />
        }
        
    </>
    :  
    <>
        <EmptyMessage>
             <TitleText>Wow! It seems that you still do not have favorite ships</TitleText>
        </EmptyMessage>
    </>
}