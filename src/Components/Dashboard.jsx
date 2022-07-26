import { Fragment } from "react";
import NavBar from "./NavBar";
import DashboardContent from "./DashboardContent";

function Dashboard(props) {
  return (
    <Fragment>
      <h1>Dashboard de la tienda</h1>
      <NavBar></NavBar>
      <DashboardContent></DashboardContent>
    </Fragment>
  );
}

export default Dashboard;
