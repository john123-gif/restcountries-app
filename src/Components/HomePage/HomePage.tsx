import { CountryDetails } from "../../features/CountryDetails/CountryDetails";
import { Countries } from "../../features/Countries/Countries";
import { SearchFilter } from "../SearchFilter/SearchFilter";
import { Header } from "../Header/Header";
import { selectClickedData } from "../../features/CountryDetails/countryDetailsSlice";
import { useAppSelector } from "../../app/hooks";
import { BackButton } from "../BackButton/BackButton";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { AppStyle } from "../../AppThemes";


export const HomePage = () => {
    const clickedData = useAppSelector(selectClickedData);
    const { theme } = useContext(ThemeContext);
    
        if(clickedData.length === 0){
            return (
                <div style={theme === 'light' ? AppStyle.light : AppStyle.dark}>
                    <Header />
                    <SearchFilter />
                    <Countries /> 
                </div>
            )
        } else {
            return (
                <div style={theme === 'light' ? AppStyle.light : AppStyle.dark}>
                    <BackButton />
                    <Header />
                    <CountryDetails />
                </div>
            )
        }
}