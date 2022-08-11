import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import Dashboard from "./Components/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProfileContainer from "./pages/Profile/ProfileContainer";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import Admin from "./Components/Admin";
import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";

//Crear rutas, es para moverse entre la app aunque sea SPA
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, Key } from "react";



function App() {
  const routes = [
    { path: "/", component: <Login /> },
    { path: "/admin", component: <Admin/> },
    { path: "/register", component: <Register /> },
    { path: "/login", component: <Login /> },
    { path: "/dashboard", component: <Dashboard /> },
    { path: "/forgotPassword", component: <ForgotPasswordPage /> },
    { path: "/resetPassword", component: <ResetPasswordPage /> },
    { path: "/profile", component: <ProfileContainer /> },
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
    <Router>
      <Routes>{getRoutes(routes)}</Routes>
    </Router>
  );
}
export default App;
