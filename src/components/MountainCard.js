import './MountainCard.css'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function MountainCard(props) {
    return (
        <div className="MountainCard">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Subtitle>{props.elevation} ft, {props.state}</Card.Subtitle>
                    <Button>Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MountainCard;