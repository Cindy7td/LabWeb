import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';

// Navbar Component
export default function NavBar() 
{
  const user = useUser();
  const firebase = useFirebaseApp();

  const logout = async ()=>{
    await firebase.auth().signOut()
            .then(() =>{  });
  }

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
          {
            !user && <Button variant="primary">Login</Button> && <Button variant="primary">Sign in</Button> 
          }
          {
            user && <Button variant="primary" onClick={logout} href="/Sigin">Logout</Button>
          }
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}