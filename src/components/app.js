/**
 * The main page. This is used to initialize all the application context.
 */

// React
import React, { Component } from 'react';

// Actions
// [...]

export default class App extends Component {

    // Define constructor (Remember to call super(props)) in order to set the COMPONENT state

    // Define component's lifecycles functions
    // [...]
   
    // children component defined into routes definition
    render() {
        console.log(this.props.children)
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
