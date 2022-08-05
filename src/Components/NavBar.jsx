import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import yourImg from '../assets/shooping.svg';



function NavBar() {
  return (
    <Navbar sticky="top" className="bg-white shadow-sm mb-3" expand="lg">
      <Container>
        <Navbar.Brand >Tienda Fake</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link >Iniciar sesion</Nav.Link>
            <Nav.Link >Shoping Bag</Nav.Link>
          </Nav>
          <style type="text/css">
        {`
    .btn-flat {
      background-color: green;
      color: white;
      width:"1rem", height:"1rem"
    }

    .btn-xxl {
      padding: 1rem 1rem;
      font-size: 1.5rem;
    }
    `}
      </style>

            <Button variant="flat"  >
            <img src={yourImg} alt={"button"} style={{
              transform:"translate(25%, 25%)",
             }}/>
           
            <div 
            style={{
            color:"white",
            width:"1.5rem", 
            height:"1.5rem",
            position:"absolute",
            bottom:"0" ,
            right:"0",
            transform:"translate(25%, 25%)"}}
            className="rounded-circle
            bg-primary d-flex 
            justify-content-center
            aling-items-center">3</div>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
