import { Container, Jumbotron } from "react-bootstrap";
import './Section.css';

function Section(props) {
    return (
            <Jumbotron bsPrefix={props.className} fluid>
                <Container>
                    {props.children}
                </Container>
            </Jumbotron>
    )
}
export default Section;