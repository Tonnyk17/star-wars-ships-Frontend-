import React from 'react';
import styled from 'styled-components';
import {CardsContainer} from '../../molecules/CardsContainer/CardsContainer';

export const Home = () => {
    return <>
        <HomeStyle>
            <CardsContainer />
        </HomeStyle>
    </>
}
const HomeStyle = styled.div`
    width: 100%;
    height: 90vh;
`