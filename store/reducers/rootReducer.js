import { combineReducers } from "redux";
import WalppaerReducer from "./walppaperReducer.js";

const saidRootReducer = combineReducers({
    walppaers: WalppaerReducer,
});


export default saidRootReducer;
