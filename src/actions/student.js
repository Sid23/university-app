import { StudentActions } from "./"
import { serverRequest, getStudentDetails } from './shared';

export function fetchStudent(id, authHeaders) {
    
    console.log("FETCH_STUDENT action!");
    console.log("Auth Headers: ", authHeaders);

    return function(dispatch) {
        return serverRequest(
            `users/${id}`,
            'GET',
            // Custom Header of the request
            {},
            // Body of the request
            {},
            authHeaders)
            .then(
                // What this action has to do aftert backend request is completed
                response => {
                    console.log("SERVER RESPONSE: ", response);

                    if(response.status >= 300) {
                        dispatch({
                            type: StudentActions.FETCH_STUDENT_ERROR,
                            // Put error code and message into error action payload
                            payload: {
                                code:response.status,
                                message: response.data.errors[0]
                            }
                        });
                        return;
                    }

                    // Dispatch the action with data retrieved from the backed server (requested student)
                    dispatch({
                        type: StudentActions.FETCH_STUDENT,
                        payload: getStudentDetails(response)
                    })
                }
            ).catch(error => {
                console.log("Network error: ", error);
                dispatch({
                    type: StudentActions.FETCH_STUDENT_ERROR,
                    // Put error code and message into error action payload
                    payload: {
                        code: 999,
                        message: "Error contacting the server..."
                    }
                })
            }
        )
    }
}