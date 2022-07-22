
import { Fragment } from "react";
import { Link } from "react-router-dom";
function ProfilePage (props) {
    return (
      <Fragment>
        <h1>ResetPasswordPage</h1>
  
        <p>
          <Link to="/dashboard">Go to Dashboard page</Link>
        </p>
      </Fragment>
    );
  };

  export default ProfilePage;