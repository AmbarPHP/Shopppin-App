import { useState, Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import FilterCatalog  from "./FilterCatalog";

function Dashboard(props) {
  const [categorySelect, SetCategorySelected] = useState("women's clothing");
  return (
    <Fragment>
      <h1>Dashboard de la tienda</h1>
      <p>
        <Link to="/profile">Profile Page</Link>
      </p>
      <div>
        <select>
          <option value="women's clothing">Mujeres</option>
          <option value="men's clothing">Hombres</option>
        </select>
      </div>
      <FilterCatalog subFilter={categorySelect}></FilterCatalog>
      <p>
        <Link to="/resetPassword">Reset Password Page</Link>
      </p>
      <p>
        <Link to="/login">Close Session Page</Link>
      </p>
    </Fragment>
  );
}

export default Dashboard;
