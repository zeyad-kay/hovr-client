import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import './Contact.css';
import Button from "../Button/Button";

function Contact(props) {
    const [emailValue, setEmailValue] = useState();
    const [nameValue, setNameValue] = useState();
    let inputs = {
        email: setEmailValue,
        password: setNameValue
    }

    let handler = (e) => {
        inputs[e.target.name](e.target.value);
    }
    let submit = () => {
        alert("Thanks");
    };

    return (
        <Form>
            <FormGroup size="lg">
            </FormGroup>
                <FormControl required onChange={handler} name="name" value={nameValue} placeholder="Name" aria-describedby="inputGroup-sizing-lg" />
            <FormGroup>
                <FormControl required onChange={handler} name="email" value={emailValue} placeholder="Email" aria-describedby="inputGroup-sizing-lg" />
            </FormGroup>
            <Button handler={submit}>Submit</Button>
        </Form>
    )
}

export default Contact;