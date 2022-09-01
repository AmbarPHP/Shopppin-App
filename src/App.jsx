import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProfileContainer from "./pages/Profile/ProfileContainer";
import ResetPasswordPage from "./pages/ResetPasswordPage";

import Cart from "./pages/Cart";
import NavBar from "./Components/NavBar";
import UserList from "./pages/UserList";
import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import * as ReactDOM from "react-dom";


//Crear rutas, es para moverse entre la app aunque sea SPA
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";





function App() {
  const routes = [
    { path: "/", component: <Login /> },

    { path: "/register", component: <Register /> },
    { path: "/login", component: <Login /> },
    { path: "/home", component: <Home /> },
    { path: "/forgotPassword", component: <ForgotPasswordPage /> },
    { path: "/resetPassword", component: <ResetPasswordPage /> },
    { path: "/profile", component: <ProfileContainer /> },
    { path: "/cart", component: <Cart/> },
    { path: "/user", component: <UserList /> },

  ];

  const getRoutes = (allRoutes) =>
    allRoutes.map((route, index ) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.path) {
        return (
          <Route
            path={route.path}
            element={route.component}
            key={index}
          />
        );
      }

      return null;
  });

  return (
    <>
      <NavBar></NavBar>
      <Router>
        <Routes>{getRoutes(routes)}</Routes>
      </Router>
    </>    
  );
}
export default App;
