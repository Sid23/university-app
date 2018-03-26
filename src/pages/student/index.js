import React, {Component} from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'

import { Jumbotron, ButtonGroup, Button } from 'react-bootstrap';

class StudentHome extends Component {

    navigate = (targetUrl) => {
        this.props.push(targetUrl)
    }
    
    render () {
        return (
            <Jumbotron>
                <h1>Hello, Student !!!</h1>
                 =)<br />
                This is the student home page
                Here is possible to access the student details
                    and its resources such as subscribed courses, exams done and still to do.
                <Button bsStyle="primary">Available courses</Button>
                
                    <ButtonGroup>
                        <Button onClick={ () => { this.navigate("/students/:id/courses") } }>Subscribed courses</Button>
                        <Button onClick={ () => { this.navigate("/students/:id/exams") } }>Exams</Button>
                    </ButtonGroup>
          </Jumbotron>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        push: (targetUrl) => dispatch(push(targetUrl)),
    }
}

export default connect(null, mapDispatchToProps)(StudentHome);