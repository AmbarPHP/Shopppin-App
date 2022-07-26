import ForgotPasswordPage from "./Components/ForgotPasswordPage";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ProfilePage from "./Components/ProfilePage";
import ResetPasswordPage from "./Components/ResetPasswordPage";

import "bootstrap/dist/css/bootstrap.min.css";

//Crear rutas, es para moverse entre la app aunque sea SPA
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const routes = [
    { path: "/", component: <Register /> },
    { path: "/register", component: <Register /> },
    { path: "/login", component: <Login /> },
    { path: "/dashboard", component: <Dashboard /> },
    { path: "/forgotPassword", component: <ForgotPasswordPage /> },
    { path: "/resetPassword", component: <ResetPasswordPage /> },
    { path: "/profile", component: <ProfilePage /> },
  ];

  const getRoutes = (allRoutes) =>
    allRoutes.map((route, index) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.path) {
        return (
          <Route
            exact
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
