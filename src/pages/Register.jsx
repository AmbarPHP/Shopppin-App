import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useAuth} from "../context/authContext";


import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Register.scss";
import { sign } from "crypto";

function Register() {


  const {signUp}= useAuth();
  const [user, setUser]=useState({
    email:"",
    password:""
  })

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Using useNavigation for redirecting to pages
  let history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    console.log("signUp", user); //enviando a firebase, el data del form

    try {
      const resp= await signUp(user.email, user.password);
      console.log("validando correo", resp);
      
       // history("/home");
      
    } catch (error) {
      setError(error);
    }
    
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("handle change", name, value);
     setUser({...user,[name]:value});
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {user.email} successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };



  return (
    <Container fluid>
      <Row>
        <Col md={6} lg={7} className="container_left">
          <h2>
            Get started with
            <span className="bold d-block">Marina Store </span>
          </h2>
          <p className="lead text-contrast">Welcome register and be happy</p>
          <div className="container__icon">
            <p className="small bold text-contrast">Or sign in with</p>
          </div>
        </Col>
        <Col md={5} lg={4}  className="mx-auto container_right">

          {/* Calling to the methods */}
          <div className="messages">
                  {errorMessage()}
                  {successMessage()}
          </div>

          <div className="form">
          <p className="text-secondary mb-4 mb-md-6">Already have an account? <a href="/login" className="text-primary bold">Login here</a></p>
            <Form onSubmit={handleSubmit}>
              <div className="form-body">
                <h1>User Registration</h1>

             

                <div className="email">
                  <Form.Label
                    type="text"
                    className="form__label"
                    htmlFor="email"
                  >
                    Email{" "}
                  </Form.Label>
                  <Form.Control
                    size="sm"
                    type="email"
                    name="email"
                    className="form__input"
                    placeholder="Email"
                    onChange={handleInputChange}
                    value={user.email}
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
                <div className="confirm-password">
                  <Form.Label
                    type="text"
                    className="form__label"
                    htmlFor="confirmPassword"
                  >
                    Confirm Password{" "}
                  </Form.Label>
                  <Form.Control
                    size="sm"
                    className="form__input"
                    type="password"
                    id="confirmPassword"
                    value={user.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm Password"
                  />
                </div>

                <Button type="submit" className="btn">
                  <a  style={{color: "white"}} >Register</a>
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
