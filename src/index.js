import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
// Router managed by the store
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

// Import the routes definition of this app
import Routes from './routes';
// import a custom store with middlewares
import store from './reducers';


// Main application entry point
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter >
        {renderRoutes(Routes)}
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
