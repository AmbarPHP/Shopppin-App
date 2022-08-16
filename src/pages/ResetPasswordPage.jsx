import { Fragment } from "react";
import { Link } from "react-router-dom";

function ResetPasswordPage (props) {
    return (
      <Fragment>
        <h1>ResetPasswordPage</h1>
  
        <p>
          <Link to="/home">Go to Home</Link>
        </p>
      </Fragment>
    );
  };

  export default ResetPasswordPage;