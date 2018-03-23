import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
// To support middlewares
import { combineReducers, createStore, applyMiddleware } from 'redux';
// Is a middleware that manages async requests, when the action payload is a function (dispatch)
import thunk from 'redux-thunk';
// Router managed by the store
import { Router } from 'react-router';
import createHistory from 'history/createBrowserHistory'
// react-router-redux, to iclude the router in redux, in order to have more information about history
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
// Import the routes definition of this app
import routes from './routes';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()
// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
    combineReducers({
      router: routerReducer
    }), applyMiddleware(middleware)
  )

// Main application entry point
ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={routes}/>
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
