import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export default function  ProjectCard(props) 
{
    return (
        <Card style={{ width: '18rem', margin: '10px'}} border="info   ">
        <Card.Header><h4>{props.name}</h4></Card.Header>
        <Card.Body>
            <Card.Text> {props.descrip} </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
            <Button variant="danger">Eliminar</Button>{' '}
            <Button variant="success">Open</Button>
         </Card.Footer>
        </Card>
    )
}