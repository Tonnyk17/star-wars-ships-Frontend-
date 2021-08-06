import React from 'react';
import styled from 'styled-components';
import { Color } from '../atoms/Colors';
import searchIcon from '../../assets/images/search.svg';

export const Search = ({onChange}) => {
   
    return<>
        <SearchStyles>
            <SearchInput placeholder='Search Starship...' onChange={onChange}/>
            <Icon src={searchIcon} alt={'search'}/>
           
        </SearchStyles>
    </>
}

const SearchStyles = styled.form`
    width: 70%;
    margin: 0 auto;
    border-radius: 20px;
    display: flex;
    align-items: center;
    position: relative;
    border: 2px solid ${Color.yellow};
    
`;
const SearchInput = styled.input`
    width:100%;
    height: 45px;
    font-size:18px;
    border-radius: 20px;
    background: ${Color.black60};
    color: ${Color.white};
    padding: 0 10px;
    border: none;
    outline: none;
  
`;

const Icon = styled.img`
    width: 30px;
    height: 30px;
    position: absolute;
    right: 10px;
    cursor: pointer;
`