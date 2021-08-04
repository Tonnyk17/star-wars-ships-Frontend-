import styled from 'styled-components';

export const CardsContainerStyle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`
export const CardsCarousel = styled.div`
width: 100%;
height: 400px;
display: flex;
align-items: center;
overflow-x: scroll;
grid-gap: 5px;
padding-left: 50px;
padding-right: 50px;
&::-webkit-scrollbar {
    display: none;
}

@media screen and (min-width: 700px){
    justify-content: center;
    padding: 0;
    flex-wrap: wrap;
    overflow: none;
    height: auto;
}

@media screen and (min-width: 1025px){
    flex-wrap: nowrap;
    overflow-x: scroll;
    height:400px;
}
`;