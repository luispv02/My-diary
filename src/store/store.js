import {combineReducers, compose, createStore, applyMiddleware } from 'redux'
import { sidebarReducer } from '../reducers/sidebarReducer'
import thunk from 'redux-thunk'
import { authReducer } from '../reducers/authReducer';


const reducers = combineReducers({
    showSidebar: sidebarReducer,
    auth: authReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

