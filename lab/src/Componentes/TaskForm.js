import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import NavBar from "./NavBar";

export default function TaskForm(props) 
{
  
    return (
    <>
     <NavBar></NavBar>
     <Container>
         <h1>Task</h1>
     </Container>
     <Container>
     <Form>
        <Form.Row>
        <Form.Group as ={Col} >
            <Form.Label>Title</Form.Label>
            <Form.Control 
            type="text" 
            name="title" 
            placeholder="Enter Title" 
            required 
            />
            
        </Form.Group>
        <Form.Group as ={Col} >
            <Form.Label>Description</Form.Label>
            <Form.Control 
            type="text"
            name="description" 
            placeholder="Description"  
            required />
        </Form.Group>
        </Form.Row>
        <Form.Row>
        <Form.Group as ={Col} >
            <Form.Label>Date</Form.Label>
            <Form.Control 
            type="text"
            name="Date" 
            placeholder="dia/mes/año"  
            required />
        </Form.Group>
        <Form.Group as ={Col} >
        <Form.Label>Status</Form.Label>
        <Form.Control  as="select" defaultValue="Status...">
            <option>Status</option>
            <option>To do</option>
            <option>Doing</option>
            <option>Done</option>
        </Form.Control>
        </Form.Group>
        </Form.Row>
   
        <Form.Row>
        <Button variant="outline-danger"  type="submit">
            cancel
        </Button>
        <Button variant="outline-success"  type="submit">
            Save
        </Button>
        </Form.Row>
    </Form>
    </Container>
    </>
    )
}