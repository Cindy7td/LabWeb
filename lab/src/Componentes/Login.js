import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import NavBar from "./NavBar";
import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';
import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../base.js";
import { AuthContext } from "../AuthProvider.js";

// Log in logic for user access
const Login = ({ history }) => {

//Make the call to firebase and verify that it is in order, in case of being rejected it is sent at to the sign in screen
        const handleLogin = useCallback(
          async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
              await app
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
              history.push("/");
            } catch (error) {
              alert(error);
            }
          },
          [history]
        );
        const { currentUser } = useContext(AuthContext);
        if (currentUser) {
            return <Redirect to="/" />;
        }
    return (
     <>
     <NavBar></NavBar>
     <Container>
         <h1>Login</h1>
     </Container>
     <Container>
        <Form onSubmit={handleLogin}>
            <Form.Row>
                <Form.Group as ={Col} >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        name="email" 
                        required/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                </Form.Row>
                <Form.Row>
                <Form.Group as ={Col} >
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Enter password"
                        name="password" 
                        required/>
                </Form.Group>
                </Form.Row>
                <Button 
                    variant="outline-primary"  
                    type="submit" 
                    href = "/Projects">
                    Login
                </Button>
            </Form>
        </Container>
    </>
    )
};
export default withRouter(Login);