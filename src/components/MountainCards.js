import MountainCard from './MountainCard'
import Row from 'react-bootstrap/Row'

function MountainCards() {
    let mountains = [
        {
            name: "Washington",
            elevation: 6288,
            state: "NH",
            climbed: "N"
        }
    ]

    return (
        <Row>
            {mountains.map(mountain => (
                <MountainCard name={mountain.name} elevation={mountain.elevation} state={mountain.state}></MountainCard>
            ))}
        </Row>
    )
}

export default MountainCards;