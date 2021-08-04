import React, { useState } from 'react';
import { ShipModal } from '../../molecules/ShipModal';
import { ShipCard } from '../../molecules/ShipCard';
import { ShipsStyle } from './Styles';
import { TitleText } from '../../atoms/Typography/TitleText';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const Ships = () => {
    const [isClosed, setIsClosed] = useState(true);
    const selector = useSelector(store => store);

 
    const handleClick = () => {
        setIsClosed(!isClosed);
        console.log(selector)
    }
   
    return selector.ships === undefined ? <Redirect to='/'/> : <>
        {isClosed ? null :
            <ShipModal isClosed={isClosed} onClick={handleClick} />
        }
        <TitleText>Choose a Ship...</TitleText>
        <ShipsStyle>
            {
                selector.ships.starships.map((item, i) => <ShipCard onClick={handleClick} shipData={item} key={i}/>)
            }
        </ShipsStyle>
    </>
}

