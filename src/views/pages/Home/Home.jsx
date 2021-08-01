import React from 'react';
import styled from 'styled-components';
import { TitleText } from '../../atoms/Typography/TitleText';
import { CardsContainer } from '../../molecules/CardsContainer';

export const Home = () => {
    return <>
        <HomeStyle>
            <TitleText>Choose a film...</TitleText>
            <CardsContainer />
        </HomeStyle>
    </>
}
const HomeStyle = styled.div`
    width: 100%;
    height: 80vh;
`