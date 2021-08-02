import styled from "styled-components";
import { Color } from "../Colors";

export const CardText = styled.p`
    font-size: 12px;
    color: ${Color.white};
    height: 14px;

    @media screen and (min-width: 700px){
        font-size: 14px;
    }
`