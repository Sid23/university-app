// Definitions of actions that are common in the application
import axios from 'axios';
import { SERVER_URL } from '../config/url';

export function serverRequest(relativePath, method, header, body, noLoginCredentials = false) {
    return axios.request({
        url: SERVER_URL + relativePath,
        method: method,
        headers: Object.assign({},
                    {
                        'Content-Type': 'application/json'
                    },
                    // Header require login credentials?
                    noLoginCredentials ? null : null,
                    header
                ),
        // body of the request
        data: body,
        validateStatus: function (status) {
            return status < 500; // Reject only if the status code is greater than or equal to 500
        }
    })
}