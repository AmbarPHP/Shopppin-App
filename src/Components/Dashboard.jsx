import React from "react";
import NavBar from "./NavBar";
import DashboardContent from "./DashboardContent";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";

function Dashboard(props:any) {
  return (
    <ShoppingCartProvider>
      <h1>Dashboard de la tienda</h1>
      <NavBar></NavBar>
      <DashboardContent></DashboardContent>
    </ShoppingCartProvider>
  );
}

export default Dashboard;
