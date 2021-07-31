import styled from "styled-components";
import { Color } from "../Colors";

export const HeaderText = styled.p`
    font-size:18px;
    color: ${Color.white};
    cursor: pointer;
    &: hover{
        color: ${Color.yellowLight};
        text-shadow: 0px 0px 5px ${Color.yellow};
    }
`