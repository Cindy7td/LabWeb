import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

export default function  NavBar() 
{
    return (
<Navbar bg="primary" expand="lg" variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/login">Home</Nav.Link>
      <Nav.Link href="/Projects">Projects</Nav.Link>
     
    </Nav>
    <Form inline>
      
      <Button variant="primary">Login</Button>
      <Button variant="primary">Signin</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
)
}