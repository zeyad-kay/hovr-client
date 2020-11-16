import { Card as DefaultCard} from "react-bootstrap";
import './Card.css';

function Card(props) {
    return (
        <DefaultCard>
            <DefaultCard.Body>
            {props.img? <DefaultCard.Img src={props.img} /> : null}
            <DefaultCard.Title><h3>{props.title}</h3></DefaultCard.Title>
            <DefaultCard.Text>{props.body}</DefaultCard.Text>
            </DefaultCard.Body>
        </DefaultCard>
    )
}
export default Card;