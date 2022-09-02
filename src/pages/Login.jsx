import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.scss";
import { useAuth } from "../context/authContext";

function Login(props) {

  let history = useNavigate();
  const { login } = useAuth();

  const [error, setError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    console.log("signUp", user); //enviando a firebase

    try {
      const response=await login(user.email, user.password);
      console.log("validando correo", response);
      //history("/home");
    } catch (error) {
      setError(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target; //console.log("handle change", name, value);
    setUser({ ...user, [name]: value });
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

          <div className="messages">{error}</div>

          <Form onSubmit={handleSubmit}>
            <div className="form-body">
              <h1>Login</h1>

              
              

              <div className="username">
                <Form.Label
                  type="text"
                  className="form__label"
                  htmlFor="firstName"
                >
                  {" "}
                  Email{" "}
                </Form.Label>
                <Form.Control
                  size="sm"
                  className="form__input"
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                  placeholder="Email"
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
                  name="password"
                  value={user.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                />
              </div>

              <Button type="submit" className="btn" >
                <a href="/dashboard" className="mt-4" style={{ color:'#fff'}}> Register</a>
              </Button>
            </div>
          </Form>

          <a  href="/forgotPassword" className="mt-4" className="text-secondary mt-sm-6 mb-4 mb-md-6">
            Forgot your password?
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
