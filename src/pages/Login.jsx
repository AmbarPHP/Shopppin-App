import { Fragment } from "react";
import { Link } from "react-router-dom";
function Login  (props)  {
  return (
    <Fragment>
      <h1>Login</h1>

      <p>
        <Link to="/dashboard">Go to Dashboard Page</Link>
      </p>
      <p>
        <Link to="/forgotPassword">Forgot Password Page</Link>
      </p>
    </Fragment>
  );
};

export default Login;
