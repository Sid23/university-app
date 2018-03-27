import {LoginActions, StudentActions} from '../actions';
import { REHYDRATE } from 'redux-persist';


const INITIAL_STATE = {
    loggedIn: false,
    currentUser:{
            email: '',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Blank_woman_placeholder.svg',
            name: '' },
    error: null,
    authenticationHeaders: null
};

export default function(state = INITIAL_STATE, action) {
    // Clone the current state
    let newState;
    
    console.log("ACTION: ", action);


    switch (action.type) {
        
        case LoginActions.DO_LOGIN:
            newState = {...state};
            console.log("You are now logged in !");
            newState.loggedIn = true;
            newState.currentUser = action.payload.currentUser;
            newState.authenticationHeaders = action.payload.authenticationHeaders;
            newState.error = null;
            return newState;
                
        case LoginActions.LOGIN_ERROR:
            newState = {...state};
            console.log("Log in Error !!");
            newState.loggedIn = false;
            // Be sure to reset currentUser to null and set the error
            newState.currentUser = null;
            newState.error = action.payload;
            newState.authenticationHeaders = null;
            return newState;

        case StudentActions.FETCH_STUDENT:
            newState = {...state};
            if (action.payload.id === state.currentUser.id){
                console.log("------ Update current user !! -----------");

                // Update current user every time is fetched from server, sensible to backend modifications!!
                newState.currentUser = action.payload;
            }
            return newState;

        // Redux persist action
        case REHYDRATE:
            newState = {...state};
            console.log(">>>>>>> Update state with the persistent one!!!");
            // Restore currentUser
            newState.currentUser = action.payload.currentUser;
            newState.authenticationHeaders = action.payload.authenticationHeaders;
            newState.loggedeIn = action.payload.authenticationHeaders;                        
            console.log("Restored authentication: ", newState);
            return newState;

        default:
            return state;
    }
}