import Navigation from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/logo.svg';
import MenuIcon from '../../assets/menu-icon.svg';
import './Navbar.css';
import Button from '../Button/Button';

function Navbar() {
  const toggle = <img src={MenuIcon} alt=""></img>
  
  return (
    <Navigation className="navbar" expand="lg">
      <Navigation.Brand href="/">
        <img id="brand" src={logo} alt="hovr" />
      </Navigation.Brand>
      <Navigation.Toggle children={toggle} aria-controls="basic-navbar-nav" />

      <Navigation.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" id="navbarNav">
          <Nav.Link className="nav-item" href="/calculate">
            <Button>Calculate Price</Button>
          </Nav.Link>
          <Nav.Link className="nav-item" href="/signup">Signup</Nav.Link>
          <Nav.Link className="nav-item" href="/login">Login</Nav.Link>
        </Nav>
      </Navigation.Collapse>
    </Navigation>
  );
}
export default Navbar;