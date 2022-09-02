import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.scss";

function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "userName") {
      setUserName(value);
    }
    setPassword(value);
  };

  return (
    <Container fluid>
      <Row>
        <Col md={6} lg={7} className="container_left">
          <h2>
            Welcome to
            <span className="bold d-block">Marina Store </span>
          </h2>
          <p className="lead text-contrast">Login to your account</p>
          <div className="container__icon">
            <p className="small bold text-contrast">Or sign in with</p>
          </div>
        </Col>
        <Col md={5} lg={4}  className="container_right mx-auto">
          <p className="text-secondary mt-sm-6 mb-4 mb-md-6">
            Don't have an account yet?{" "}
            <a href="register" className="text-primary bold">
              Create it here
            </a>
          </p>

          <Form onSubmit={handleSubmit}>
            <div className="form-body">
              <h1>Login</h1>

              {/* Calling to the methods */}
              <div className="messages"></div>

              <div className="username">
                <Form.Label
                  type="text"
                  className="form__label"
                  htmlFor="firstName"
                >
                  {" "}
                  user name{" "}
                </Form.Label>
                <Form.Control
                  size="sm"
                  className="form__input"
                  type="text"
                  id="userName"
                  value={userName}
                  onChange={handleInputChange}
                  placeholder="User Name"
                />
              </div>

              <div className="password">
                <Form.Label
                  type="text"
                  className="form__label"
                  htmlFor="password"
                >
                  Password{" "}
                </Form.Label>
                <Form.Control
                  size="sm"
                  className="form__input"
                  type="password"
                  id="password"
                  value={password}
                  onChange={handleInputChange}
                  placeholder="Password"
                />
              </div>

              <Button type="submit" className="btn" >
                <a href="/dashboard" className="mt-4" style={{ color:'#fff'}}> Register</a>
              </Button>
            </div>
          </Form>

          <a  href="/forgotPassword" className="mt-4 text-secondary mt-sm-6 mb-4 mb-md-6">
            Forgot your password?
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
