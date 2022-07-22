import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const selectedAttrSlice = createSlice({
  name: "selectedAttr",
  initialState,
  reducers: {
    // to add selected attributes from user to product object going to cart from product description page
    addAttr: (state, action) => {
      const target = action.payload;
      const name = target.getAttribute("name");
      const value = target.getAttribute("value");
      state.value = { ...state.value, [name]: value };
    },
    // to add default selected attributes from user to product object going to cart from product list page
    addAttrCart: (state, action) => {
      state.value = action.payload;
    },
    //to clear selected attributes by user when the page is left
    clearAttr: (state) => {
      state.value = null;
    },
  },
});

const { actions, reducer } = selectedAttrSlice;

export const selectedAttrDisplay = (state) => ({
  selectedAttr: state.selectedAttr.value,
});

export const { addAttr, addAttrCart, clearAttr } = actions;

export default reducer;
