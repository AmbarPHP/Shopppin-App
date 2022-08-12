import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Footer.scss";

import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Footer.scss";

function Footer() {
  return (
    <Container fluid className="container-row align-bottom">
      <Row>
        <Col sm={12} md={4} lg={4}  >
            <h6 class="bold text-contrast">All Products</h6>
        </Col>
        <Col sm={12} md={4} lg={4} >
            <h6 class="bold text-contrast">Categories</h6>
        </Col>
        <Col sm={12} md={4} lg={4} >
            <h6 class="bold text-contrast">Our Newsletter</h6>
        </Col>
       
      </Row>
    </Container>
  );
}
export default Footer; 