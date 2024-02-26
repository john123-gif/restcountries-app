import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {selectSearchTerm, setSearchTerm } from './searchSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ComponentStyle } from '../../AppThemes';
import { ThemeContext } from '../../App';
import './searchcountry.css';

export const SearchCountry = () => {
    const searchterm = useAppSelector(selectSearchTerm);
    const dispatch = useAppDispatch();

    const handleSearch = (e:any) => {
        dispatch(setSearchTerm(e.target.value))
    }
    const { theme } = useContext(ThemeContext);
    return (
        <div className='search-box' style={theme === 'light' ? ComponentStyle.light : ComponentStyle.dark}>
            <span className='icon'>
                <FontAwesomeIcon icon={faSearch}/>
            </span>
            <span className='input-span'>
                <input type='search' 
                className='search-input' 
                placeholder='Search for a country...'
                value={searchterm}
                onChange={handleSearch}
                style={theme === 'light' ? ComponentStyle.light : ComponentStyle.dark}
                />
            </span>
            
        </div>
    )
}