import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './SignUp.css';

class SignUp extends Component {
    render(){ 
        return (
            <div className="signup-form">
                <h2>Sign Up to Volunteer</h2>
                <Form>
                    <Form.Control id="form-name" type="name" placeholder="Enter name" />
                    <br />
                    <Form.Control id="form-email" type="email" placeholder="Enter email" />
                    <br />
                    <Form.Control id="form-comment" as="textarea" rows={8} />
                    <br />
                    <Button id="submit-button" as="input" type="submit" value="Submit" />{' '}
                </Form>
            </div>
        )
    }
}

export default SignUp;