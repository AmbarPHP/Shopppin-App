import { Fragment } from "react";
import { Link } from "react-router-dom";

function Register(){
 
 
  
  return (
    <Fragment>
      <h1>Register</h1>
      <p>
        <Link to="/login">Go to Login</Link>
        <Link to="/forgotPassword">Go to Forgot Password</Link>
        <Link to="/profile">Go to Profile</Link>
        <Link to="/resetPassword">Go to Reset Password</Link>
        <Link to="/dashboard">Go to Reset Dashboard</Link>
      </p>
    </Fragment>
  );
};

export default Register;
