import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { CardText } from '../atoms/Typography/CardText';

export const ShipCardText = () => {
    const selector = useSelector(store => store.shipSelected);
    return <>
        <ShipTextStyle>
            <ShipTextContainer>
                <CardText>Name:</CardText>
                <CardText>{selector.name}</CardText>
            </ShipTextContainer>
            <ShipTextContainer>
                <CardText>Model:</CardText>
                <CardText>{selector.model}</CardText>
            </ShipTextContainer>
            <ShipTextContainer>
                <CardText>Manufacturers:</CardText>
                <CardText>{selector.manufacturers.map(item => item)}</CardText>
            </ShipTextContainer>
            <ShipTextContainer>
                <CardText>Cost in credits:</CardText>
                <CardText>{selector.costInCredits}</CardText>
            </ShipTextContainer>
            <ShipTextContainer>
                <CardText>Length: </CardText>
                <CardText>{selector.length}</CardText>
            </ShipTextContainer>
            <ShipTextContainer>
                <CardText>Max atmosphering speed: </CardText>
                <CardText>{selector.maxAtmospheringSpeed}</CardText>
            </ShipTextContainer>
            <ShipTextContainer>
                <CardText>Crew: </CardText>
                <CardText>{selector.crew}</CardText>
            </ShipTextContainer>
            <ShipTextContainer>
                <CardText>Passengers: </CardText>
                <CardText>{selector.passengers}</CardText>
            </ShipTextContainer>
            <ShipTextContainer>
                <CardText>Starship class: </CardText>
                <CardText>{selector.starshipClass}</CardText>
            </ShipTextContainer>
            <ShipTextContainer>
                <CardText>Films:</CardText>
                <CardText>{selector.filmConnection.films.map(item => `Episode ${item.episodeID} ${item.title}, `)}</CardText>
            </ShipTextContainer>
        </ShipTextStyle>
    </>
}

const ShipTextStyle = styled.div`
    width: 95%;
    margin: 0 auto;
`;
const ShipTextContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    grid-gap:5px;
    text-align: left;
`;
