import { legacy_createStore, applyMiddleware, combineReducers } from "redux";

import {thunk} from "redux-thunk";
import { reducer as productReducer } from "./Products/reducer";
import { reducer as authReducer } from "./Authentication/reducer";

 const rootReducer = combineReducers({
    productReducer,
    authReducer,
   
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));