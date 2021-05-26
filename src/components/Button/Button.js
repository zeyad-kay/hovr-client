import DefaultButton from 'react-bootstrap/Button';
import './Button.css';

function Button(props) {
    return (
        <DefaultButton onClick={props.handler} variant="btn btn-md btn-primary">{props.children}</DefaultButton>
    )
};
export default Button;