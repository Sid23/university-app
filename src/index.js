import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
// Persistent redux
import { PersistGate } from 'redux-persist/lib/integration/react';
// Router managed by the store
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

// Import the routes definition of this app
import Routes from './routes';
// import a custom store with middlewares, and persist
import { store, persistor } from './reducers';


// Main application entry point
ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <BrowserRouter >
                {renderRoutes(Routes)}
            </BrowserRouter>
        </PersistGate>
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
