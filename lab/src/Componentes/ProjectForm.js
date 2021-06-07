import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import NavBar from "./NavBar";
import { useState } from "react";
import { db } from "../Config";
import app from "../base"
import { useFirebaseApp } from 'reactfire';

// Handling how to add a new projects
export default function ProjectForm(props) 
{
    const [project, setProject] = useState({
        title: '',
        description:'',
        owner: ''
    });
    
    const firebase = useFirebaseApp();

    // Handler of the changes on the form
    const handleInputChange = e =>{
        const {name,value} = e.target;
        setProject({...project,[name]: value}) 
    }

    // Handler of the submit of the form
    const handlerSubmit = e =>{
        e.preventDefault();
        addOrEdit(project);
    }

    // Connection to the database
    const addOrEdit = async (newProject) =>{
        await db.collection('projects').doc().set(newProject) 
    }
    
    return (
    <>
     <Container>
     <Form onSubmit= {handlerSubmit}> 
        <Form.Row>
        <Form.Group as ={Col} >
            <Form.Label>Project Title</Form.Label>
            <Form.Control 
            type="text" 
            name="title" 
            placeholder="Enter Title" 
            onChange= {handleInputChange}
            required 
            /> 
        </Form.Group>
        <Form.Group as ={Col} >
            <Form.Label>Description</Form.Label>
            <Form.Control 
            type="text"
            name="description" 
            placeholder="Description" 
            onChange= {handleInputChange} 
            required />
        </Form.Group>
        </Form.Row>
        <Form.Row>
        <Button variant="outline-danger" type="submit" href="/Projects">
            Cancel
        </Button>
        <Button variant="outline-success" type="submit" >
            Save
        </Button>
        </Form.Row>
    </Form>
    </Container>
    </>
    )
}