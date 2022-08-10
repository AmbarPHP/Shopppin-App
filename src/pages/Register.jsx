import { Fragment, useState } from "react";
import { Link,useNavigate  } from "react-router-dom";
import "./Register.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


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
    }

    e.preventDefault();

     // Redirecting to home page after creation done
     history('/')
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

  /*return (
    <Fragment>
      <h1>Register</h1>
        <p><Link to="/login">Go to Login</Link></p>
        <p><Link to="/dashboard">Go to Reset Dashboard</Link></p>
        <p><Link to="/forgotPassword">Go to Forgot Password</Link></p>
        <p><Link to="/profile">Go to Profile</Link></p>
        <p><Link to="/resetPassword">Go to Reset Password</Link></p>
    </Fragment>
  );*/

  return (
    <div className="form">
      
        <h1>User Registration</h1>
    
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <Form onSubmit={handleSubmit}>
        <div className="form-body">
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
              type="text"
              id="lastName"
              className="form__input"
              value={lastName}
              onChange={handleInputChange}
              placeholder="LastName"
            />
          </div>
          <div className="email">
            <Form.Label type="text" className="form__label" htmlFor="email">
              Email{" "}
            </Form.Label>
            <Form.Control
              type="email"
              id="email"
              className="form__input"
              placeholder="Email"
              onChange={handleInputChange}
              value={email}
            />
          </div>
          <div className="password">
            <Form.Label type="text" className="form__label" htmlFor="password">
              Password{" "}
            </Form.Label>
            <Form.Control
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
              className="form__input"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <div className="footer">
          <Button type="submit" className="btn">
            Register
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Register;
