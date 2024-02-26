import { SearchCountry } from "../../features/SearchCountry/SearchCountry";
import { FilterCountries } from "../../features/FilterCountries/FilterCountries";
import './searchfilter.css'

export const SearchFilter = () => {
    return (
        <div className="search-filter-div">
            <SearchCountry />
            <FilterCountries />
        </div>
    )
}