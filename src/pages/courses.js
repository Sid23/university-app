import React, {Component} from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'

import { Jumbotron, Button } from 'react-bootstrap';

class Abcd extends Component {

    navigate = (targetUrl) => {
        this.state.props.push(targetUrl)
    }

    render () {
        return (
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                This is the list of all available courses
                </p>
                <p>
                    <Button bsStyle="primary" onClick={ () => { this.navigate("/student") } }>Home</Button>
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

export default connect(null, mapDispatchToProps)(Abcd);