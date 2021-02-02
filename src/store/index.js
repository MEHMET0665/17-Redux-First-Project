
import articleReducer from '../reducer/articlelistReducer'
import searchReducer from '../reducer/searchReducer'

import { createStore,combineReducers } from "redux";

const rootReducer=combineReducers({
  articlesSate: articleReducer,
  searchSate: searchReducer
});
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

