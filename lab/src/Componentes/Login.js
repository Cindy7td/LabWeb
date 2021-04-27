import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import React, { useState } from "react";
import NavBar from "./NavBar";

export default function Login() 
{
    const [user, setUser] = useState({
      
        email: "",
        password: "",
      });

    function onChange(event) { setUser({[event.target.name]: event.target.value}) }
    return (
     <>
     <NavBar></NavBar>
     <Container>
         <h1>Login</h1>
     </Container>
     <Container>
     <Form>
     
     <Form.Row>
        <Form.Group as ={Col} >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" pattern="^[a-zA-Z0-9._-]+@[a-zA-Z-]+\.[a-zA-Z]+" value={user.email} onChange={onChange} required/>
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        </Form.Row>
        <Form.Row>
        <Form.Group as ={Col} >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"   name="password" value={user.password} onChange={onChange} required/>
        </Form.Group>
    
        </Form.Row>
    
        <Button variant="outline-primary"  type="submit">
            login
        </Button>
    </Form>
    </Container>
     </>
    )
}