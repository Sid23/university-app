import React, {Component} from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'

import { Jumbotron, Button } from 'react-bootstrap';

class StudentExams extends Component {

    navigate = (targetUrl) => {
        this.state.props.push(targetUrl)
    }

    render () {
        return (
            <Jumbotron>
                <h1>Hello, world!</h1>
                This is the list of all exams
                <Button bsStyle="primary" onClick={ () => { this.navigate("/student") } }>Home</Button>
            </Jumbotron>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        push: (targetUrl) => dispatch(push(targetUrl)),
    }
}

export default connect(null, mapDispatchToProps)(StudentExams);