import React from 'react';
import { EmptyMessage, FavoriteStyles } from './Styles';
import { Search } from '../../molecules/Search';
import { useDispatch, useSelector } from 'react-redux';
import { ShipCard } from '../../molecules/ShipCard';
import { useState } from 'react';
import { ShipModal } from '../../molecules/ShipModal';
import { removeFavorite } from '../../../redux/actions';
import { TitleText } from '../../atoms/Typography/TitleText';
import { useEffect } from 'react';


export const Favorites = () => {
    const selector = useSelector(store => store.favorites);
    const ship = useSelector(store => store.shipSelected)
    const dispatch = useDispatch();
    const [isClosed, setIsClosed] = useState(true);
    const [favoriteShips, setFavoriteShips] = useState(selector);
    const [ships,setShips] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        setShips(selector)
    },[])
    const handleClick = () => {
        setIsClosed(!isClosed); 
    }
    const handleRemoveShip = () =>{
        dispatch(removeFavorite(ship.id))
        setFavoriteShips([]);
    }

    const handleChange = e => {
        setSearchText(e.target.value);
        handleFilter(e.target.value);
    }
    const handleFilter = filterText => {
        let filterShips = favoriteShips.filter(ship => {
            if(ship.name.toString().toLowerCase().includes(filterText.toLowerCase())){
                return ship
            }
        })
        setShips(filterShips)
    }

   console.log(ships)
    return selector !== undefined ? <>
        {isClosed ? 
            <div>
                <Search onChange={handleChange}/>
                <FavoriteStyles>
                    {
                        ships.map((item, i) => <ShipCard onClick={handleClick} shipData={item} key={i}/>)
                    }
                </FavoriteStyles>
            </div> 
            :
            <ShipModal 
                onClick={handleClick} 
                buttonContent={'Remove from favorites'}
                buttonFunction={handleRemoveShip}
            />
        }
        
    </>
    :
    <>
        <EmptyMessage>
             <TitleText>Wow! It seems that you still do not have favorite ships</TitleText>
        </EmptyMessage>
    </>
}