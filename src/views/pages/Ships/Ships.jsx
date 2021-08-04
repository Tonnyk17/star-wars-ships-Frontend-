import React, { useState } from 'react';
import { ShipModal } from '../../molecules/ShipModal';
import { ShipCard } from '../../molecules/ShipCard';
import { ShipsStyle } from './Styles';
import { TitleText } from '../../atoms/Typography/TitleText';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addFavorites  } from '../../../redux/actions';

export const Ships = () => {
    const dispatch = useDispatch();
    const [isClosed, setIsClosed] = useState(true);
    const selector = useSelector(store => store);
    const shipSelected = useSelector(store => store.shipSelected);
 
    const handleClick = () => {
        setIsClosed(!isClosed);
        dispatch(addFavorites(shipSelected));
        console.log(selector)
    }
   
    return selector.ships === undefined ? <Redirect to='/'/> : <>
        {isClosed ? null :
            <ShipModal onClick={handleClick} buttonContent={'Add to favorites'} buttonFunction={handleClick}/>
        }
        <TitleText>Choose a Ship...</TitleText>
        <ShipsStyle>
            {
                selector.ships.starships.map((item, i) => <ShipCard onClick={handleClick} shipData={item} key={i}/>)
            }
        </ShipsStyle>
    </>
}

