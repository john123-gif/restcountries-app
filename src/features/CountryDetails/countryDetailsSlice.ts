import { createSlice } from "@reduxjs/toolkit";
import  type { RootState } from "../../app/store";

const initialState:any[] = [];

export const clickedDataSlice = createSlice({
    name: 'clickedData',
    initialState,
    reducers: {
        setClickedData: (state, action) => state = action.payload,
        resetClickedData: (state) => state = []
    }
})

export const { setClickedData, resetClickedData } = clickedDataSlice.actions;

export const selectClickedData = (state:RootState) => state.clickedData;

export default clickedDataSlice.reducer;