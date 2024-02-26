import { useContext, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectSearchedFilteredCountries, selectSearchCountries, countriesAsync } from './countriesSlice';
import { selectFilter } from '../FilterCountries/filterSlice';
import { setClickedData } from '../CountryDetails/countryDetailsSlice';
import { Loader } from '../../Components/Loader/Loader';
import './countries.css'
import { ThemeContext } from '../../App';
import { ComponentStyle, AppStyle } from '../../AppThemes';
import React from 'react';


export const Countries = () => {
    const searchcountries = useAppSelector(selectSearchCountries);
    const searchfilteredCountries = useAppSelector(selectSearchedFilteredCountries);
    const filter = useAppSelector(selectFilter);
    const update = filter === "Filter by Region" ? searchcountries : searchfilteredCountries;
    const { status } = useAppSelector(state => state.countries);
    const dispatch = useAppDispatch();
    
    const handleClickedItem = (param:any) => {
        dispatch(setClickedData(param));
    }
    //current value of theme of App
    const { theme } = useContext(ThemeContext);

    useEffect(() => {   
        dispatch(countriesAsync());
    },[dispatch])

    if(status === 'pending'){
        return <Loader />
        
    } else if(status === 'fulfilled' && update.length === 0){
        return <div className='no-result'><p>No result found</p></div>

    } else if(status === 'rejected')
    {
        return <div className='rejected-message'><p>Check your internet connection</p></div> 
    } else {
        return (
            <div className='countries-grid' style={theme === 'light' ? AppStyle.light : AppStyle.dark}>
               {
                update.map((country:any, index) => (
                    <div className='country-card' key={index} onClick={() => handleClickedItem(country)}
                    style={theme === 'light' ? ComponentStyle.light : ComponentStyle.dark}>
                        <div className='img-div'>
                            <img className='country-img' src={country.flag} alt={country.name} />
                        </div>
                        <div className='country-description'>
                            <h4 className='country-name'>{country.name}</h4>
                            <span className='sub-details'>
                                <p><span className='detail-points'>Population:</span> {country.population.toLocaleString('en-US')}</p>
                                <p><span className='detail-points'>Region:</span> {country.region}</p>
                                <p><span className='detail-points'>Capital:</span> {country.capital}</p>
                            </span>   
                        </div>      
                    </div>  
               ))}
            </div>
        )
    }
}