import {LoginActions} from '../actions';

const INITIAL_STATE = {
    loggedIn: false,
    currentUser:{
            email: '',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Blank_woman_placeholder.svg',
            name: '' },
    error: null,
    authenticationheaders: null
};

export default function(state = INITIAL_STATE, action) {
    // Clone the current state
    let newState = {...state};
    
    console.log("ACTION: ", action);


    switch (action.type) {
        
        case LoginActions.DO_LOGIN:
            console.log("You are now logged in !");
            newState.loggedIn = true;
            newState.currentUser = action.payload.currentUser;
            newState.authenticationHeaders = action.payload.authenticationHeaders;
            newState.error = null;
            return newState
                
        case LoginActions.LOGIN_ERROR:
            console.log("Log in Error !!");
            newState.loggedIn = false;
            // Be sure to reset currentUser to null and set the error
            newState.currentUser = null;
            newState.error = action.payload;
            newState.authenticationheaders = null;
            return newState

        default:
            return state;
    }
}