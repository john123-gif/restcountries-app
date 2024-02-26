import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { resetClickedData } from "../../features/CountryDetails/countryDetailsSlice";
import { useAppDispatch } from '../../app/hooks';
import './backbutton.css'
import { useContext } from 'react';
import { ThemeContext } from '../../App';
import { AppStyle, ComponentStyle } from '../../AppThemes';

export const BackButton = () => {
    const dispatch = useAppDispatch();
    const handleBack = () => {
        dispatch(resetClickedData());
    }
    const { theme } = useContext(ThemeContext);

    return <span className='back-btn-span'>
                <button type='button' className='back-btn' 
                onClick={handleBack} style={theme === 'light' ? AppStyle.light : ComponentStyle.dark}>
                    <span>
                        <FontAwesomeIcon icon={faArrowLeft}/>
                    </span> 
                    <span>
                        Back
                    </span>
                </button>
            </span> 
}