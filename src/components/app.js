/**
 * The main page. This is used to initialize all the application context.
 */

// React
import React, { Component } from 'react';
import {connect} from 'react-redux';

import { push } from 'react-router-redux'

// Actions
// [...]

class Container extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

class App extends Component {

    // Define constructor (Remember to call super(props)) in order to set the COMPONENT state
    // [...]

    // Define component's lifecycles functions
    // [...]
   
    // children component defined into routes definition
    render() {
        return (
            <Container>
                {this.props.children}
            </Container>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        push: (newUrl)=>dispatch(push(newUrl)),
    }
}

export default connect(null, mapDispatchToProps)(App);
