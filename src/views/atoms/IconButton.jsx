import styled from "styled-components";
import React from "react";


export const IconButton = ({ image, name }) => {
    return (
        <>
            <IconButtonStyle src={image} alt={name} />
        </>
    )
}

const IconButtonStyle = styled.img`
    width: 40px;
    heigth: 40px;
    color: white;
`;