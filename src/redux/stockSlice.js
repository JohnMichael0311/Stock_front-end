import { createSlice } from '@reduxjs/toolkit';

const stockSlice = createSlice({
    name: 'stocks',
    initialState: { stocks: [] },
    reducers: {
        setStocks: (state, action) => {
            state.stocks = action.payload; 
        },
        addStock: (state, action) => {
            state.stocks.push(action.payload); 
        },
        updateStock: (state, action) => {
            const index = state.stocks.findIndex((stock) => stock.id === action.payload.id);
            if (index !== -1) state.stocks[index] = action.payload; 
        },
    },
});

export const { setStocks, addStock, updateStock } = stockSlice.actions; // Export actions
export default stockSlice.reducer; // Export the reducer
