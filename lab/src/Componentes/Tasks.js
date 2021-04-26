import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function  Tasks(props) 
{
    return (
        <Card style={{ width: '18rem', margin: '8px'}} border= "warning ">
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{props.status}</Card.Subtitle>
            <Card.Text>
            {props.descrip}
            </Card.Text>
            <Card.Text>
            {props.date}
            </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
         <Button variant="info">Editar</Button>
         <Button variant="danger">Eliminar</Button>
         </Card.Footer>
        </Card>
    )
}