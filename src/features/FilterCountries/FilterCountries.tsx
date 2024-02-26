import { useAppDispatch, useAppSelector } from "../../app/hooks";
import './filtercountries.css'
import { selectFilter, setFilter } from "./filterSlice";
import { ComponentStyle } from "../../AppThemes";
import { useContext } from "react";
import { ThemeContext } from "../../App";

export const FilterCountries = () => {
    const filter = useAppSelector(selectFilter);
    const dispatch = useAppDispatch();
 
    const handlefilter = (e:any) => {
        dispatch(setFilter(e.target.value));
    }
    const { theme } = useContext(ThemeContext);

    const options = ['Filter by Region', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

    return (
            <select 
            className="filter" onChange={handlefilter} 
            value={filter} style={theme === 'light' ? ComponentStyle.light : ComponentStyle.dark}>
                {options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
    )
}