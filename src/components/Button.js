import DefaultButton from 'react-bootstrap/Button';
import './Button.css';

function Button(props) {
    return (
        <DefaultButton variant="btn btn-md btn-primary">{props.children}</DefaultButton>
    )
};
export default Button;