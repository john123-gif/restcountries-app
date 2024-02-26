import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";


const initialState = "";

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchTerm: (state, action) => state = action.payload,
    }

});

export const { setSearchTerm } = searchSlice.actions;

export const selectSearchTerm = (state: RootState) => state.search;

export default searchSlice.reducer;