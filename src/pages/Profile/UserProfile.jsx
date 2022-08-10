import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from "react-bootstrap";

function UserProfile(props) {
 const user=props.data;
  console.log("se pasaron los datos",user);
  //verificar si el user esta autentificado
  return (
    <Row className="">
        
                <Col key={user.id} sm={4} md={4} lg={3}>
                    <Card style={{ width: '18rem' }}>
                          
                        <Card.Body>
                            <Card.Title>{user.name.firstname} {user.name.lastname}</Card.Title>
                            <Card.Text>
                                {user.email}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
    </Row>
)
}
 


export default UserProfile;
