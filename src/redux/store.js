import propertyReducer from "./reducers/PropertyReducer";
import { legacy_createStore as createStore } from "redux";

export const store = createStore(propertyReducer);
