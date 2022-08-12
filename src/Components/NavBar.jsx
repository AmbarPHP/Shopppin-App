import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";
import { Button } from "react-bootstrap";
import yourImg from "../assets/shooping.svg";
import logo from "../assets/logo.png";
import "./NavBar.scss";
import avatar from "../assets/avatar.jpg";

function NavBar() {
  return (
    <Navbar sticky="top" className="bg-white shadow-sm mb-3" expand="md">
      <Container>
        <Navbar.Brand>
        <img src={logo} /><h1 >Marina Store</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Sig in</Nav.Link>
            <NavDropdown title="Shop" href="/cart" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Checkout</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <a  href="/cart">
            <i class="fa-solid fa-cart-shopping fa-2xl"></i>
            <span class="top-0 start-100  p-2 bg-primary text-white  
            border-light badge badge-pill badge-primary">
            2</span>
          </a>
          </Nav>

          
    
          
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default NavBar;
/**  
 *  <Nav.Link href="/register">Sig up</Nav.Link>
            <Nav.Link  href="/login" >Login</Nav.Link>
            <Nav.Link >Shoping Bag</Nav.Link>
 * <Button variant="flat">
            <img src={yourImg} alt={"button"} />
            <div rounded-circle bg-primary className="badget">
              3
            </div>
          </Button>*/