import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import React, { useState } from "react";
import NavBar from "./NavBar";
import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';

// Class in charge of user registration
export default function Singin() 
{
    const [ username, setUsername ] = useState('');
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const firebase = useFirebaseApp();

    const submit = async ()=>{
        await firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    return (
     <>
     <NavBar></NavBar>
     <Container>
         <h1>Sign up</h1>
     </Container>
     <Container>
     <Form>
     <Form.Row>
        <Form.Group as ={Col} >
            <Form.Label>Username</Form.Label>
            <Form.Control 
            type="text" 
            name="userName" 
            placeholder="Enter username" 
            value={username} 
            onChange={ (ev)=> setUsername(ev.target.value) } 
            required 
            />
            
        </Form.Group>
        <Form.Group as ={Col} >
            <Form.Label>Name</Form.Label>
            <Form.Control 
            type="text"
            name="name" 
            placeholder="Enter name"  
            value={name} 
            onChange={ (ev)=> setName(ev.target.value) } 
            required />
        </Form.Group>
     </Form.Row>
     <Form.Row>
        <Form.Group as ={Col} >
            <Form.Label>Email address</Form.Label>
            <Form.Control 
            type="email" 
            placeholder="Enter email"  
            name="email" 
            value={email} 
            onChange={ (ev)=> setEmail(ev.target.value) } 
            required
            />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Form.Group as ={Col} >
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type="password" 
            placeholder="Enter Password" 
            name="password" 
            value={password}  
            onChange={ (ev)=> setPassword(ev.target.value) }
            required
            />
        </Form.Group>
     </Form.Row>
        <Button 
            variant="primary" 
            type="submit" 
            onClick={submit}
            aref = "/Projects">
            Submit
        </Button>
    </Form>
    </Container>
     </>
    )
}