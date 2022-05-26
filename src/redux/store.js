import { combineReducers, legacy_createStore as createStore, applyMiddleware, compose } from 'redux'

import thunk from 'redux-thunk'



import authReducer from './reducer/authReducer'

const rootReducer = combineReducers({
    authReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
