import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// Structure of the main notes
export default function Tasks(props) 
{
    return (
        <Card style={{ width:'18rem', margin: '5px'}} border="secondary">
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{props.status}</Card.Subtitle>
            <Card.Text>
            {props.descript}
            </Card.Text>
            <Card.Text>
            {props.date}
            </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
         <Button variant="danger" onClick={()=>props.onDeleteClick(props.myKey)}>Delete</Button>
         </Card.Footer>
        </Card>
    )
}