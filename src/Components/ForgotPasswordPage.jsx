import { Fragment } from "react";
import { Link } from "react-router-dom";

const ForgotPasswordPage = (props) => {
    return (
      <Fragment>
        <h1>Forgot Pasword Page</h1>
  
        <p>
          <Link to="/dashboard">Go to Dashboard page</Link>
        </p>
      </Fragment>
    );
  };

  export default ForgotPasswordPage