import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import UserProfile from "./UserProfile";

function ProfileContainer(props) {
  const [user, setUser] = useState({});

  function getUser() {
    const UrlAPI = "https://fakestoreapi.com/users/1";
    fetch(UrlAPI)
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
        console.log("la respuesta https://fakestoreapi.com/users/1", res);
      });
  }

  useEffect(() => {
    console.log("entre en efect", typeof user, user);
    getUser();
  }, []);

  //verificar si el user esta autentificado
  console.log("entre en efect", typeof(user), user);
  return <UserProfile data={user}></UserProfile>;
}

export default ProfileContainer;
