// To support middlewares
import { combineReducers, createStore, applyMiddleware } from 'redux';
// To have store persistent (daved on disk)
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// Is a middleware that manages async requests, when the action payload is a function (dispatch)
import thunk from 'redux-thunk';
// react-router-redux, to iclude the router in redux, in order to have more information about history
import { routerReducer, routerMiddleware } from 'react-router-redux'
// import login reducer
import AuthenticationReducer from './login';

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating


// Whitelist of what piece of state that has to be saved
const persistConfig = {
    // is the reducer we want to store
    key: 'authentication',
    storage: storage,
    // is the currentUser contained into authenticatin reducer
    whitelist: ['loggedIn', 'currentUser', 'authenticationHeaders']
};
// Create root reducer as combination of all reducers
const rootReducer = combineReducers({
    router: routerReducer,
    // Make this reducer persistent
    authentication: persistReducer(persistConfig, AuthenticationReducer)
})


export const store = createStore(
    rootReducer, 
    applyMiddleware(thunk, routerMiddleware())
)
export const persistor = persistStore(store);