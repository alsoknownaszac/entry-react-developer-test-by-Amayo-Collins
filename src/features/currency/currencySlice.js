import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { symbol: "$", currName: "USD" },
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    // to change the currency accros the app
    changeCurrency: (state, action) => {
      state.value = action.payload;
    },
  },
});

const { actions, reducer } = currencySlice;

export const selectCurrency = (state) => ({
  currency: state.currency.value,
});

export const { changeCurrency } = actions;

export default reducer;
