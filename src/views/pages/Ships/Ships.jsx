import React, { useState } from 'react';
import { ShipModal } from '../../molecules/ShipModal';
import { ShipCard } from '../../molecules/ShipCard';
import { ShipsStyle } from './Styles';
import { TitleText } from '../../atoms/Typography/TitleText';

export const Ships = () => {
    const [isClosed, setIsClosed] = useState(true);

    
 
    const handleClick = () => {
        setIsClosed(!isClosed);
    }
   
    return <>
        {isClosed ? null :
            <ShipModal isClosed={isClosed} onClick={handleClick} />
        }
        <TitleText>Choose a Ship...</TitleText>
        <ShipsStyle>
            <ShipCard onClick={handleClick} />
            <ShipCard onClick={handleClick} />
            <ShipCard onClick={handleClick} />
            <ShipCard onClick={handleClick} />
            <ShipCard onClick={handleClick} />
            <ShipCard onClick={handleClick} />
            <ShipCard onClick={handleClick} />
            <ShipCard onClick={handleClick} />
            <ShipCard onClick={handleClick} />
            <ShipCard onClick={handleClick} />
            <ShipCard onClick={handleClick} />
            <ShipCard onClick={handleClick} />
            <ShipCard onClick={handleClick} />
            <ShipCard onClick={handleClick} />
            <ShipCard onClick={handleClick} />
        </ShipsStyle>
    </>
}

