import styled from "styled-components";

export const FavoriteStyles = styled.div`
width: 100%;
height: 60vh;
display: flex;
flex-direction: column;
align-items:center;
grid-gap:20px;
overflow-y: scroll;
padding: 20px 0;

&::-webkit-scrollbar {
    display: none;
}

@media screen and (min-width: 700px) {
    display: grid;
    height: 70vh;
    grid-template-columns: repeat(3,1fr);
    justify-items: center;
    }

@media screen and (min-width: 1025px) {
    display: grid;
    height: 60vh;
    grid-template-columns: repeat(5,1fr);
    &::-webkit-scrollbar {
        display: initial;
    }
}
`;
export const EmptyMessage = styled.div`
    width: 90%;
    margin: 0 auto;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
`