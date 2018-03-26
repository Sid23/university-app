// To support middlewares
import { combineReducers, createStore, applyMiddleware } from 'redux';
// Is a middleware that manages async requests, when the action payload is a function (dispatch)
import thunk from 'redux-thunk';
// react-router-redux, to iclude the router in redux, in order to have more information about history
import { routerReducer, routerMiddleware } from 'react-router-redux'
// import login reducer
import AuthenticationReducer from './login';

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
    combineReducers({
      router: routerReducer,
      authentication: AuthenticationReducer
    }), 
    applyMiddleware(thunk, routerMiddleware())
)
export default store;