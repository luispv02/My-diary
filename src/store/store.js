import {combineReducers, compose, createStore, applyMiddleware } from 'redux'
import { sidebarReducer } from '../reducers/sidebarReducer'
import thunk from 'redux-thunk'
import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducer = combineReducers({
    sidebar: sidebarReducer,
    auth: authReducer,
    ui: uiReducer
})


export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

