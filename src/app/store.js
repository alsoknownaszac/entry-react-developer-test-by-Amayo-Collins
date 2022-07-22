import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currencyReducer from "../features/currency/currencySlice";
import cartReducer from "../features/cart/cartSlice";
import selectedAttrReducer from "../features/selectedAttributes/selectedAttrSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

// redux persist configuration
const rootPersistConfig = {
  key: "root",
  storage,
  blacklist: ["selectedAttr"],
  stateReconciler: autoMergeLevel2,
};

// redux store configuration
const rootReducer = combineReducers({
  currency: currencyReducer,
  cart: cartReducer,
  selectedAttr: selectedAttrReducer,
});

// redux persist configuration
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

// redux store configuration
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

// redux persist configuration
export const persistor = persistStore(store);
