import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dataCategory: [],
    dataJokes: [],
};

const reducer = createSlice({
    name: "data",
    initialState,
    reducers: {
        setCategory: (state, action) => {
            if (action?.payload) return {
                ...state,
                dataCategory: action.payload
            }
        },
        setJokes: (state, action) => {
            if (action?.payload) return {
                ...state,
                dataJokes: action.payload
            }
        },
    }
});

export const { 
    setCategory, 
    setJokes,
} = reducer.actions;

export default reducer.reducer;