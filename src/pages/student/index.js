import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { Jumbotron, ButtonGroup, Button } from 'react-bootstrap';

// Import student actions
import { fetchStudent } from '../../actions/student';

class StudentHome extends Component {

    navigate = (resource) => {
        let url = `/students/${this.props.authentication.currentUser.id}/` + resource
        console.log("Target url: ", url)
        this.props.history.push(url)
    }
    
    componentDidMount() {
        // Get the current user id and then ask for it to the backend server, and update it
        // This because user may change on the backend after the login
        console.log("Student Home DidMount");
        this.props.fetchStudent(
            this.props.authentication.currentUser.id,
            this.props.authentication.authenticationHeaders
        );
    }

    shouldComponentUpdate(nextProps, nextState) {

        if (nextProps.authentication.currentUser.name !== this.props.authentication.currentUser.name) {
            console.log("Current user name changed")
            return true;
        } else {
            console.log("Current user does not changed")
            return false;
        }
    }

    render () {
        console.log("Student Home page should just render once!")
        console.log("render props: ", this.props)
        if (this.props.authentication.currentUser) {
            return (
                <Jumbotron>
                    <h1>Hello, Student !!!</h1>
                    <h1>{this.props.authentication.currentUser.name}</h1>
                    =)<br />
                    This is the student home page
                    Here is possible to access the student details
                        and its resources such as subscribed courses, exams done and still to do.
                    <Button bsStyle="primary">Available courses</Button>
                        <ButtonGroup>
                            <Button onClick={ () => { this.navigate("courses") } }>Subscribed courses</Button>
                            <Button onClick={ () => { this.navigate("exams") } }>Exams</Button>
                        </ButtonGroup>
                </Jumbotron>
            )
        } else {
            return "No user Logged in...";
        }
    }
}

function mapStateToProps(state) {
    return {
        // Get new state returned by login reducer (authentication is the name of reducer used into combine reducer)
        authentication: state.authentication
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchStudent: (id, authHeaders) => dispatch(fetchStudent(id, authHeaders))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentHome));