import React, {Component} from 'react';
import { connect } from 'react-redux';

import { Jumbotron, Button } from 'react-bootstrap';

export default class StudentCourses extends Component {

    render () {
        return (
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                This is the list of student courses
                </p>
                <p>
                    <Button bsStyle="primary">Home</Button>
                </p>
          </Jumbotron>
        )
    }
}