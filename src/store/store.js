import {combineReducers, compose, createStore, applyMiddleware } from 'redux'
import { sidebarReducer } from '../reducers/sidebarReducer'
import thunk from 'redux-thunk'
import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';



const reducers = combineReducers({
    sidebar: sidebarReducer,
    auth: authReducer,
    ui: uiReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

