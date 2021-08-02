import React from 'react';
import styled from 'styled-components';
import { Button } from '../atoms/Button';
import { CardText } from '../atoms/Typography/CardText';

export const ShipCardText = ({ isClose }) => {
    return <>
        <ShipTextStyle>
            <ShipTextContainer>
                <CardText>Name:</CardText>
                <CardText>CR90 corvette</CardText>
            </ShipTextContainer>
            <ShipTextContainer>
                <CardText>Model:</CardText>
                <CardText>CR90 corvette</CardText>
            </ShipTextContainer>
            <ShipTextContainer>
                <CardText>Manufacturers:</CardText>
                <CardText>Sienar Fleet Systems,
                    Cyngus Spaceworks</CardText>
            </ShipTextContainer>
            <ShipTextContainer>
                <CardText>Cost in credits:</CardText>
                <CardText>840000</CardText>
            </ShipTextContainer>
            <ShipTextContainer>
                <CardText>Length: </CardText>
                <CardText>38</CardText>
            </ShipTextContainer>
            <ShipTextContainer>
                <CardText>Max atmosphering speed: </CardText>
                <CardText>1000</CardText>
            </ShipTextContainer>
            <ShipTextContainer>
                <CardText>Crew: </CardText>
                <CardText>5</CardText>
            </ShipTextContainer>
            <ShipTextContainer>
                <CardText>Passengers: </CardText>
                <CardText>75</CardText>
            </ShipTextContainer>
            <ShipTextContainer>
                <CardText>Starship class: </CardText>
                <CardText>landing craft</CardText>
            </ShipTextContainer>
            <ShipTextContainer>
                <CardText>Films</CardText>
                <CardText>Episode 4 A New Hope, Episode 4 A New Hope</CardText>
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
