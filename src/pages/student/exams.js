import React, {Component} from 'react';
import { connect } from 'react-redux';

import { Jumbotron, Button } from 'react-bootstrap';

export default class StudentExams extends Component {

    render () {
        return (
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                This is the list of all exams
                </p>
                <p>
                    <Button bsStyle="primary">Home</Button>
                </p>
          </Jumbotron>
        )
    }
}