import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// Project description card
export default function ProjectCard(props) 
{
    return (
        <Card style={{ width: '18rem', margin: '5px'}} border="info">
        <Card.Header><h4>{props.name}</h4></Card.Header>
        <Card.Body>
            <Card.Text> {props.description} </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
            <Button variant="danger" onClick={()=>props.onDeleteClick(props.myKey)}>Delete</Button>{' '}
            <Button variant="success" href="/Projects" >Open</Button>
         </Card.Footer>
        </Card>
    )
}