// react-router components
import { Fragment, useEffect } from "react";
//Crear rutas, es para moverse entre la app aunque sea SPA
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";




let teachers = [
  { name: "Stephany", description: "maestra", grupo: "2A", avatar:"x.jpg" },
  { name: "Geny", description: "maestra", grupo: "3A", avatar:"x.jpg" },
  { name: "Linday", description: "maestra", grupo: "1A", avatar:"x.jpg" },
];

const Clases = () => {
  return "Clases";
};

const TeacherListPage = () => {
  let lista = teachers.map((item) => {
    <tr>
      <td>
        <img src={item.avatar} />
      </td>
      <td> {item.name}</td>
      <td>{item.description}</td>
    </tr>;
  });
  return (
    <div>
      <h1>LIsta de maestros</h1>
      {lista}
    </div>
  );
};

const Register = () => {
  return (
    <Fragment>
      <h1>Register</h1>
      <p>
        <Link to="/login">Go to Login</Link>
      </p>
    </Fragment>
  );
};

const Login = (props) => {
  return (
    <Fragment>
      <h1>Login</h1>

      <p>
        <Link to="/dashboard">Go to Dashboard Page</Link>
      </p>
      <p>
        <Link to="/forgotPassword">Forgot Password Page</Link>
      </p>
    </Fragment>
  );
};

const Dashboard = (props) => {
  return (
    <Fragment>
      <h1>Dashboard</h1>

      <p>
        <Link to="/profile">Profile Page</Link>
      </p>
      <p>
        <Link to="/resetPassword">Reset Password Page</Link>
      </p>
      <p>
        <Link to="/login">Close Session Page</Link>
      </p>
    </Fragment>
  );
};

const ForgotPasswordPage = (props) => {
  return (
    <Fragment>
      <h1>Forgot Pasword Page</h1>

      <p>
        <Link to="/dashboard">Go to Dashboard page</Link>
      </p>
    </Fragment>
  );
};

const ResetPasswordPage = (props) => {
  return (
    <Fragment>
      <h1>ResetPasswordPage</h1>

      <p>
        <Link to="/dashboard">Go to Dashboard</Link>
      </p>
    </Fragment>
  );
};

const ProfilePage = (props) => {
  return (
    <Fragment>
      <h1>ResetPasswordPage</h1>

      <p>
        <Link to="/dashboard">Go to Dashboard page</Link>
      </p>
    </Fragment>
  );
};

export default function App() {
  const routes = [
    { path: "/", component: <Register /> },
    { path: "/Register", component: <Register/> },
    { path: "/login", component: <Login/> },
    { path: "/dashboard", component: <Dashboard/> },
    { path: "/forgotPassword", component: <ForgotPasswordPage/> },
    { path: "/resetPassword", component: <ResetPasswordPage/> },
    { path: "/profile", component: <ProfilePage/> },
  ];

  const getRoutes = (allRoutes) =>
    allRoutes.map((route, index) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.path) {
        return <Route exact path={route.path} element={route.component} key={index} />;
      }

      return null;
    });

  return (
    <Router>
      <Routes>
        {getRoutes(routes)}
      </Routes>
    </Router>
  );
}

