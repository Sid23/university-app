import React, {Component} from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { Button, Form, FormControl, FormGroup, Col, ControlLabel } from 'react-bootstrap';

// Import login actions
import { userAuthentication } from '../actions/login';

class Login extends Component {

    constructor(props) {
        super(props);

        // Component state
        this.state = {user: "admin@libero.it", pwd: "password"};
    }

    updateUser = (event) => {
        this.setState({user: event.target.value});
    };

    updatePwd = (event) => {
        this.setState({pwd: event.target.value});
    };

    doLogin = () => {
        // TODO
        console.log(`User, ${this.state.user}!`);
        console.log(`Password, ${this.state.pwd}`);
        this.props.userAuthentication(this.state.user, this.state.pwd)
    };

    //invoked immediately after updating occurs. This method is not called for the initial render.
    componentDidUpdate(prevProps, prevState) {

    }

    render () {
        return (
            <div>
                <Form horizontal>
                    <FormGroup controlId="user">
                        <Col componentClass={ControlLabel} sm={2}>
                        User:
                        </Col>
                        <Col sm={9}>
                        <FormControl type="text"
                            placeholder="Write your post email..." maxLength="80" bsSize="large" value={this.state.user}
                            onChange={this.updateUser}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                        Password:
                        </Col>
                        <Col sm={9}>
                        <FormControl label="Password" type="password"
                            value={this.state.pwd}
                            onChange={this.updatePwd}/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={9}>
                        <Button type="button" onClick={this.doLogin} bsStyle="primary">Log In</Button>
                        </Col>
                    </FormGroup>
                </Form>
                <br />
                {
                    this.props.authentication.error ? this.props.authentication.error : ""
                }
            </div>
           
        )
    }
}

function mapStateToProps(state) {
    return {
        // Get new state returned by login reducer
        authentication: state.authentication
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userAuthentication: (email, password) => dispatch(userAuthentication(email, password)),
        push: (targetUrl) => dispatch(push(targetUrl)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);