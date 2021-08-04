import React from 'react';
import { EmptyMessage, FavoriteStyles } from './Styles';
import { Search } from '../../molecules/Search';
import { useDispatch, useSelector } from 'react-redux';
import { ShipCard } from '../../molecules/ShipCard';
import { useState } from 'react';
import { ShipModal } from '../../molecules/ShipModal';
import { removeFavorite } from '../../../redux/actions';
import { TitleText } from '../../atoms/Typography/TitleText';


export const Favorites = () => {
    const selector = useSelector(store => store.favorites);
    const ship = useSelector(store => store.shipSelected)
    const dispatch = useDispatch();
    const [isClosed, setIsClosed] = useState(true);

    const handleClick = () => {
        setIsClosed(!isClosed); 
    }
    const handleRemoveShip = () =>{
        dispatch(removeFavorite(ship.id))
    }
    return selector !== undefined ? <>
        {isClosed ? 
            <div>
                <Search/>
                <FavoriteStyles>
                    {
                        selector.map((item, i) => <ShipCard onClick={handleClick} shipData={item} key={i}/>)
                    }
                </FavoriteStyles>
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