import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { fetchData } from "./countriesAPI";
import { selectSearchTerm } from '../SearchCountry/searchSlice'
import { selectFilter } from "../FilterCountries/filterSlice";

interface CountriesState{
  countries: [],
  status: string
}
const initialState:CountriesState = {
    countries: [],
    status: 'pending'
};

export const countriesAsync = createAsyncThunk(
    'countries/fetchCountries',
    async () => {
        const data = await fetchData();
        return data
    }
)

export const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(countriesAsync.pending, (state) => {
            state.status = 'pending';
          })
          .addCase(countriesAsync.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.countries = action.payload;
          })
          .addCase(countriesAsync.rejected, (state) => {
            state.status = 'rejected';
          })
        },
})

export const selectCountries = (state:RootState) => state.countries.countries;

export const selectSearchedFilteredCountries = (state:RootState):any[] => {
  const allCountries = selectCountries(state);
  const searchTerm = selectSearchTerm(state);
  const filterTerm = selectFilter(state);
  return allCountries.filter((country:any) => country.name.toLowerCase().includes(searchTerm.toLowerCase()) && country.region === filterTerm);
}

export const selectSearchCountries = (state:RootState):any[] => {
  const allCountries = selectCountries(state);
  const searchTerm = selectSearchTerm(state);
  return allCountries.filter((country:any) => country.name.toLowerCase().includes(searchTerm.toLowerCase()));
}

export default countriesSlice.reducer;
