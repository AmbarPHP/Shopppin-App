import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Register.scss";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Using useNavigation for redirecting to pages
  let history = useNavigate();

  const handleSubmit = (e) => {
    if (firstName === "" || email === "" || password === "") {
      console.log("error shows here");
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
      console.log(firstName, lastName, email, password, confirmPassword);
      history("/dashboard");
    }

    e.preventDefault();

    // Redirecting to home page after creation done
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
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
        <h1>User {firstName} successfully registered!!</h1>
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
        <Col md={5} lg={4} mx-auto className="container_right">

       
          <div className="form">
          <p class="text-secondary mb-4 mb-md-6">Already have an account? <a href="/login" class="text-primary bold">Login here</a></p>
            <Form onSubmit={handleSubmit}>
              <div className="form-body">
                <h1>User Registration</h1>

                {/* Calling to the methods */}
                <div className="messages">
                  {errorMessage()}
                  {successMessage()}
                </div>

                <div className="username">
                  <Form.Label
                    type="text"
                    className="form__label"
                    htmlFor="firstName"
                  >
                    {" "}
                    First Name{" "}
                  </Form.Label>
                  <Form.Control
                    size="sm"
                    className="form__input"
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                  />
                </div>
                <div className="lastname">
                  <Form.Label
                    type="text"
                    className="form__label"
                    htmlFor="lastName"
                    value={lastName}
                    onChange={(e) => handleInputChange(e)}
                  >
                    Last Name{" "}
                  </Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    id="lastName"
                    className="form__input"
                    value={lastName}
                    onChange={handleInputChange}
                    placeholder="LastName"
                  />
                </div>

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
                    id="email"
                    className="form__input"
                    placeholder="Email"
                    onChange={handleInputChange}
                    value={email}
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
                    value={confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm Password"
                  />
                </div>

                <Button type="submit" className="btn">
                  <a  style={{color: "white"}} href="/dashboard">Register</a>
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
