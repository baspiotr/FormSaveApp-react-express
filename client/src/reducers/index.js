import { combineReducers } from "redux";
import guestFormReducer from "./guestFormReducer";

export default combineReducers({ guestForm: guestFormReducer });
