// Define actions used by action reducer
// each action has its own type to be identified and its payload (useful data)
import { LoginActions } from "./"
import { serverRequest, getStudentDetails } from './shared';

export function userAuthentication(email, password) {
    console.log("LOGIN action!");
    
    return function(dispatch) {
        return serverRequest(
            `auth/sign_in`,
            'POST',
            // Header of the request
            {},
            // Body of the request
            {'email': email, 'password': password},
            null)
            .then(
                response => {
                    console.log("SERVER RESPONSE: ", response);

                    if(response.status >= 300) {
                        dispatch({
                            type: LoginActions.LOGIN_ERROR,
                            payload: response.data.errors[0]
                        });
                        return;
                    }
                    
                    let loginCredentials = {
                        'access-token':response.headers['access-token'],
                        'client':response.headers['client'],
                        'expiry':response.headers['expiry'],
                        'token-type':response.headers['token-type'],
                        'uid':response.headers['uid']
                    };
                    dispatch({
                        type: LoginActions.DO_LOGIN,
                        payload: {
                            currentUser: getStudentDetails(response),
                            authenticationHeaders: loginCredentials
                        }
                    })
                }
            ).catch(error => {
                console.log("Authentication error: ", error);
                dispatch({
                    type: LoginActions.LOGIN_ERROR,
                    payload: "There has been an error contacting the server"
                })
            })
    }
}

