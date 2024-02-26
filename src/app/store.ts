import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import countriesReducer from '../features/Countries/countriesSlice';
import searchReducer from '../features/SearchCountry/searchSlice';
import filterReducer from '../features/FilterCountries/filterSlice'
import clickedDataReducer from '../features/CountryDetails/countryDetailsSlice'

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    search: searchReducer,
    filter: filterReducer,
    clickedData: clickedDataReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;