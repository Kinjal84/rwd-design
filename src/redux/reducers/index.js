import { combineReducers } from "redux";
import propertyReducer from "./PropertyReducer";

const rootReducer = combineReducers({
    propertyReducer,
})

export default rootReducer;