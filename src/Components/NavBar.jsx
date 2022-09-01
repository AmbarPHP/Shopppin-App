import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
//import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
//import yourImg from "../assets/shooping.svg";
import logo from "../assets/logo.png";
import headphones from "../assets/blue-headphones.jpg";
import "./NavBar.scss";
//import avatar from "../assets/avatar.jpg";
import { useSelector } from "react-redux";
import { useAuth } from "../context/authContext";

function NavBar() {
  const { user } = useAuth();

  const { cartTotalQuantity, cartTotalAmount } = useSelector(
    (state) => state.cart
  );
  return (
    <div className="d-flex">
      <Row className="gap-y " style={{ backgroundColor: "rgba(0, 157, 206)" }}>
        <Navbar sticky="top" className="bg-white   shadow-sm mb-3" expand="md">
          <Container className="">
            <Navbar.Brand>
              <img src={logo} />
              <h1>Marina Store</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav>
                {user && user.email ? (
                  <div className="mt-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      className="rounded-circle"
                      alt="Avatar"
                      style={{ display: "block", width: 40, padding: 3 }}
                    />
                    <span className="d-block bold text-contrast">Welcome{"  "}</span>
                    <span className="">{user.email}</span>
                  </div>
                ) : (
                  ""
                )}
                {/* Toggle between LogIn/LogOut*/}{" "}
                {user ? (
                  <Nav.Link href="/login">LogOut</Nav.Link>
                ) : (
                  <Nav.Link href="/login">Login</Nav.Link>
                )}
                <Nav.Link href="/register">Sig in</Nav.Link>
                <NavDropdown title="Shop" href="/cart" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/cart">Checkout</NavDropdown.Item>
                  <NavDropdown.Item href="/home">
                    Continue buying
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link to="/cart">
                  <div className="nav-bag">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      fill="currentColor"
                      className="bi bi-handbag-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
                    </svg>
                    <span className="bag-quantity">
                      <span>{cartTotalQuantity}</span>
                      <span>{cartTotalAmount}</span>
                    </span>
                  </div>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Col sm={12} md={6} lg={6} className="px-0 order-md-2">
          <img
            className="ms-auto align-items-end"
            style={{ backgroundColor: "blue", width: 320, height: 320 }}
            src={headphones}
            alt="..."
          />
        </Col>

        <Col sm={12} md={6} lg={4} className="ms-lg-auto align-items-end">
          <div className="text-center text-lg-start text-lg-nowrap">
            <h4 className="text-light font-weight-light mb-0 pb-1">
              What you were waiting for?
            </h4>
            <h1 className="text-contrast bold display-4">
              The New Headphones Collection
            </h1>
            <p className="lead text-light pb-3">
              Discover our selection of the best Headphones
            </p>
          </div>
        </Col>
      </Row>
    </div>
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
