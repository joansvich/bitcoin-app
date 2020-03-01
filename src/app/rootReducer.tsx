import { combineReducers } from "@reduxjs/toolkit";
import priceDisplayReducer from "../features/priceDisplay/priceDisplaySlice";

const rootReducer = combineReducers({
  priceDisplay: priceDisplayReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
