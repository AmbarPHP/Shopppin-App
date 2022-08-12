import React from "react";

import DashboardContent from "./DashboardContent";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";
import logo from"../assets/logo.png";
function Dashboard(props) {
  return (
    <ShoppingCartProvider>
     
      <DashboardContent>

      </DashboardContent>
    </ShoppingCartProvider>
  );
}

export default Dashboard;
