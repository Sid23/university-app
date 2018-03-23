import React, {Component} from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'

import { Jumbotron, Button } from 'react-bootstrap';

class Login extends Component {

    navigate = (targetUrl) => {
        this.state.props.push(targetUrl)
    }

    render () {
        return (
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                This is the student login page.
                Do the Login to access the student page.
                </p>
                <p>
                    <Button bsStyle="primary" onClick={ () => { this.navigate("/student") } }>Log In</Button>
                </p>
          </Jumbotron>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        push: (targetUrl) => dispatch(push(targetUrl)),
    }
}

export default connect(null, mapDispatchToProps)(Login);