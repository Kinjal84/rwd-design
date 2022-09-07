import propertyReducer from "./PropertyReducer";
import { legacy_createStore as createStore } from "redux";

export const store = createStore(propertyReducer);
