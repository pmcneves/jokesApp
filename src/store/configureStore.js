import { combineReducers, createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension"
import jokesReducer from "../reducers/jokesReducer";
import filtersReducer from "../reducers/filtersReducer";

const configureStore = () => {
    const store = createStore(
        combineReducers({
            jokes: jokesReducer,
            filters: filtersReducer,
        }),
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    );
    return store
}

export default configureStore