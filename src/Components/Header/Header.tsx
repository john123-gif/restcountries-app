import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import './header.css'
import { ThemeContext } from '../../App';
import { useContext } from 'react';
import { ComponentStyle } from '../../AppThemes';

export const Header = () => {
    const handleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    const {theme, setTheme} = useContext(ThemeContext);
    
    return (
        <header className="header" 
        style={
            theme === 'light' 
            ? ComponentStyle.light 
            : ComponentStyle.dark}>
           <span className='night-span'>
            <h3 className="h3">Where in the world?</h3>
                <div className='night-mode-div'>
                    <button className="night_mode_button" 
                    style={
                    theme === 'light' 
                    ? ComponentStyle.light 
                    : ComponentStyle.dark} onClick={handleTheme}>
                        <FontAwesomeIcon icon={faMoon} /> 
                        <span>Dark Mode</span>
                    </button>
                </div>
           </span>
        </header>
    )
}