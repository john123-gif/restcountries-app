import { createSlice } from "@reduxjs/toolkit";
import  type { RootState } from "../../app/store";

const initialState: string = "Filter by Region";

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter: (state, action) => state = action.payload,
    }
})

export const { setFilter } = filterSlice.actions;

export const selectFilter = (state:RootState) => state.filter;

export default filterSlice.reducer;