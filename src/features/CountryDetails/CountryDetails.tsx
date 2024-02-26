import { useAppSelector } from '../../app/hooks';
import { useAppDispatch } from '../../app/hooks';
import { selectClickedData } from './countryDetailsSlice';
import { Loader } from '../../Components/Loader/Loader';
import { selectCountries } from '../Countries/countriesSlice';
import { setClickedData } from './countryDetailsSlice';
import { useContext } from 'react';
import { ThemeContext } from '../../App';
import { AppStyle, ComponentStyle } from '../../AppThemes';
import './countryDetails.css'

export const CountryDetails = () => {
    const clickedData = useAppSelector(selectClickedData);
    const allcountries = useAppSelector(selectCountries);
    const dispatch = useAppDispatch();
    const getData = (param:any) => param;
    const data = getData(clickedData)
    /**
     * 
     * @returns a string of concatenated languages of clicked country
     */
    const getLanguage = () => {
        return data.languages.map((element:any) => element.name).join(', ');
    }
    const language_list = getLanguage();

    /**
     * 
     * @param countries is the entire data of countries in the store
     * @param borders is the array of border countries of the clicked country
     * @returns an array of border countries of clicked country (arr[ {obj} ]);
     */
    const getBorderCountries = (countries:any, borders:any) => {
        var b_array = [];
        for(const border of borders){
            for(const country of countries){
                if(border === country.alpha3Code){
                    b_array.push(country);
                }
            }
        }
        b_array = b_array.map((country:any) => country);

        const red_array = [];
        if(b_array.length > 3){
            red_array.push(b_array[0] ,b_array[1], b_array[3])

        } else if(b_array.length === 3){
            red_array.push(b_array[0], b_array[1], b_array[2])

        } else if(b_array.length === 2){
            red_array.push(b_array[0], b_array[1])

        } else if(b_array.length === 1){
            red_array.push(b_array[0]);

        } else if(borders.length === 0){
            red_array.push('', '', '')
        }
        return red_array;
    }
    const borders = getBorderCountries(allcountries, data.borders);
    console.log(borders)
    console.log(data)

    const handleBorderCountryClick = (param:any) => {  
       dispatch(setClickedData(param));
    }
    const { theme } = useContext(ThemeContext);



    if(clickedData.length === 0){
        return <Loader />
    } else {
        return (
            <div className='country-details-div' style={theme === 'light' ? AppStyle.light : AppStyle.dark}>
                <div className='details-img-div'>
                    <img src={data.flag} alt={data.name} className='details-img'/>
                </div>
                <div className="details-description-div">
                    <span><h2 className='details-h2'>{data.name}</h2></span>
                    <span className='details-group'>
                        <span className='details-area-1'>
                            <p><span className='details-point'>Native Name:</span> {data.name}</p>
                            <p><span className='details-point'>Population:</span> {data.population.toLocaleString('en-US')}</p>
                            <p><span className="details-point">Region:</span> {data.region}</p>
                            <p><span className="details-point">Sub Region:</span> {data.subregion}</p>
                            <p><span className="details-point">Capital:</span> {data.capital}</p>
                        </span>
                        <span className='details-area-2'>
                        <p><span className="details-point">Top Level Domain:</span> {data.topLevelDomain}</p>
                        <p><span className="details-point">Currencies:</span> {data.currencies[0].name}</p>
                        <p><span className="details-point">Languages:</span> {language_list}</p>
                        </span>
                    </span>
                    <div className='border-countries'>
                        <span className='details-point'>Border Countries:</span>
                        <span className='border-countries-span'>
                            
                            {borders.map((bordercountry, index) => (
                                <button className='border-country-btn' style={theme === 'light' ? ComponentStyle.light : ComponentStyle.dark} 
                                    key={index} onClick={() => {handleBorderCountryClick(bordercountry)}}>
                                    {bordercountry.name}
                                </button>
                            ))}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}