import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProfileContainer from "./pages/Profile/ProfileContainer";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import Admin from "./Components/Admin";
import Cart from "./pages/Cart";
import NavBar from "./Components/NavBar";
import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";

//Crear rutas, es para moverse entre la app aunque sea SPA
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Provider} from "react-redux";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, Key } from "react";
import store from "./store";


function App() {
  const routes = [
    { path: "/", component: <Login /> },
    { path: "/admin", component: <Admin/> },
    { path: "/register", component: <Register /> },
    { path: "/login", component: <Login /> },
    { path: "/home", component: <Home /> },
    { path: "/forgotPassword", component: <ForgotPasswordPage /> },
    { path: "/resetPassword", component: <ResetPasswordPage /> },
    { path: "/profile", component: <ProfileContainer /> },
    { path: "/cart", component: <Cart /> },
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
    <Provider store="store">
    <NavBar></NavBar>
    <Router>
      <Routes>{getRoutes(routes)}</Routes>
    </Router>
    </Provider>
  );
}
export default App;
