import React, {Component} from 'react';
import { connect } from 'react-redux';

import { Jumbotron, ButtonGroup, Button } from 'react-bootstrap';

export default class StudentHome extends Component {

    render () {
        return (
            <Jumbotron>
                <h1>Hello, Student !!!</h1>
                <p> =)</p>
                <p>This is the student home page</p>
                <p>Here is possible to access the student details
                    and its resources such as subscribed courses, exams done and still to do.
                </p>
                <p> <Button bsStyle="primary">Available courses</Button> </p>
                <p> 
                    <ButtonGroup>
                        <Button>Subscribed courses</Button>
                        <Button>Exams</Button>
                    </ButtonGroup>
                </p>
          </Jumbotron>
        )
    }
}