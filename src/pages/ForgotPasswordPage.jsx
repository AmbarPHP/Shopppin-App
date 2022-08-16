import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./ForgotPassword.scss";

const ForgotPasswordPage = (props) => {

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };


  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    }
     
  };

  return (
    <Container fluid>
      <Row>
        <Col md={6} lg={7} className="container_left">
          <h2>
            Forgot
            <span className="bold d-block">Password</span>
          </h2>
          <p className="lead text-contrast">We've got you covered</p>
          <div className="container__icon">
            <p className="small bold text-contrast">Or sign in with</p>
          </div>
        </Col>
        <Col md={5} lg={4} mx-auto className="container_right">
          <p className="text-secondary mt-sm-6 mb-4 mb-md-6">
            Don't have an account yet?{" "}
            <Link to="/register" className="text-primary bold">
              Create it here
            </Link>
          </p>

          <Form onSubmit={handleSubmit}>
            <div className="form-body">
              <h1>Forgot your password?</h1>
             
              {/* Calling to the methods */}
              <div className="messages"></div>

              <div className="email">
                <Form.Label
                  type="text"
                  className="form__label"
                  htmlFor="email"
                >
             <p className="text-secondary mt-0 mb-4 mb-md-6">Enter your email bellow to retrieve your account or <Link to="/login" className="text-primary bold">Login</Link></p>
                </Form.Label>
                <Form.Control
                  size="sm"
                  className="form__input"
                  type="text"
                  id="email"
                  value={email}
                  onChange={handleInputChange}
                  placeholder="Your registered mail"
                />
              </div>

             

              <Button type="submit" className="btn">
                Send reset link 
              </Button>
            </div>
          </Form>

          
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPasswordPage;
