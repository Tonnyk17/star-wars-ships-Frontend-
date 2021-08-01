import styled from "styled-components";
import React from "react";

export const IconButton = ({ image, name, onClick }) => {
    return (
        <>
            <IconButtonStyle src={image} alt={name} onClick={onClick} />
        </>
    )
}

const IconButtonStyle = styled.img`
    width: 30px;
    heigth: 30px;
    color: white;
    cursor: pointer;
    @media screen and (min-width: 700px){
        width: 35px;
        heigth: 35px;
    }

    @media screen and (min-width: 1025px){
        width: 40px;
        heigth: 40px;
    }
`;