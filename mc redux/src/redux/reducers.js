import { combineReducers } from 'redux';

import macStoreReducer from "./macStoreReducer";

let combinedReducer=combineReducers({
    // редьюсер macStoreReducer отвечает за раздел state под именем macStore
    macStore: macStoreReducer,
});

export default combinedReducer;