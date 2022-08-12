import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Footer.scss";

import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Footer.scss";

function Footer() {
  return (
    <Container fluid className="container-row align-bottom" style={{backgroundColor:'rgba(0, 157, 206)'}}>
      <Row>
        <Col sm={12} md={4} lg={4}  >
            <h6 class="bold text-contrast">All Products</h6>
            <nav class="nav flex-column">
              <a class="nav-item py-1" style={{color:'#fff'}} href="#">Headphones</a> 
              <a class="nav-item py-1" style={{color:'#fff'}} href="#">Audio Accessories</a> 
              <a class="nav-item py-1" style={{color:'#fff'}} href="#">Earbuds</a> 
              <a class="nav-item py-1" style={{color:'#fff'}} href="#">Speakers</a> 
              <a class="nav-item py-1" style={{color:'#fff'}} href="#">Subwoofers</a> 
              <a class="nav-item py-1" style={{color:'#fff'}} href="#">Portable Speakers</a> 
              <a class="nav-item py-1" style={{color:'#fff'}} href="#">Sound Bars</a> 
              <a class="nav-item py-1" style={{color:'#fff'}} href="#">Amplifiers</a> 
              <a class="nav-item py-1" style={{color:'#fff'}} href="#">Bluetooth</a> 
              <a class="nav-item py-1" style={{color:'#fff'}} href="#">LED TV's</a> 
              <a class="nav-item py-1" style={{color:'#fff'}} href="#">Blue-Ray</a> 
            </nav>
        </Col>
        <Col sm={12} md={4} lg={4} >
            <h6 class="bold text-contrast">Categories</h6>
            <nav class="nav flex-column">
              <a class="nav-item py-1" style={{color:'#fff'}} href="#">Headphones</a> 
              <a class="nav-item py-1" style={{color:'#fff'}} href="#">Audio Accessories</a> 
              <a class="nav-item py-1" style={{color:'#fff'}} href="#">Earbuds</a> 
              <a class="nav-item py-1" style={{color:'#fff'}} href="#">Speakers</a> 
              <a class="nav-item py-1" style={{color:'#fff'}} href="#">Subwoofers</a> 
              <a class="nav-item py-1" style={{color:'#fff'}} href="#">Portable Speakers</a> 
              <a class="nav-item py-1" style={{color:'#fff'}} href="#">Sound Bars</a> 
              <a class="nav-item py-1" style={{color:'#fff'}} href="#">Amplifiers</a> 
              <a class="nav-item py-1" style={{color:'#fff'}} href="#">Bluetooth</a> 
              <a class="nav-item py-1" style={{color:'#fff'}} href="#">LED TV's</a> 
              <a class="nav-item py-1" style={{color:'#fff'}} href="#">Blue-Ray</a> 
            </nav>
        </Col>
        <Col sm={12} md={4} lg={4} >
            <h6 class="bold text-contrast">Our Newsletter</h6>
        </Col>

        <div class="row align-items-center">
          <div class="col-md-4">
            <nav class="nav flex-wrap">
              <a class="nav-item py-1 me-3" href="#">Support</a> 
              <a class="nav-item py-1 me-3" href="#">Privacy</a> 
              <a class="nav-item py-1 me-3" href="#">Terms of use</a> 
              <a class="nav-item py-1" href="#">Return Policy</a>
            </nav>
          </div>
        <div class="col-md-4 text-center">
            <a class="d-inline-block align-middle me-3" href="#">
              <img class="img-responsive logo" src="..//logo-light.png" alt=""/>
            </a>
        </div>
        <div class="col-md-4 d-flex">
          <nav class="nav ms-md-auto">
            <a class="btn btn-sm btn-dark me-2" href="#">
              <i class="fab fa-twitter"></i></a> 
              <a class="btn btn-sm btn-dark me-2" href="#">
                <i class="fab fa-facebook"></i>
                </a> 
              <a class="btn btn-sm btn-dark me-2" href="#">
                <i class="fab fa-instagram"></i></a> 
              <a class="btn btn-sm btn-dark me-2" href="#">
                <i class="fab fa-pinterest"></i></a> 
              <a class="btn btn-sm btn-dark" href="#">
                <i class="fab fa-youtube"></i></a>
          </nav>
          </div>
        </div>
        <div class="row align-items-center mt-4">
          <div class="col-md-6">
            <p class="mt-4 small mb-md-0 text-center text-md-start">© 2021 
            <a href="5studios.net" target="_blank">5studios.net</a>. All Rights Reserved</p></div>
            <div class="col-md-6">
              <img class="img-responsive ms-md-auto" style={{max_width:'136px'}} src="../img/shop/payment-methods.png" alt="Payment methods"/>
        </div></div>
      </Row>
    </Container>
  );
}
export default Footer; 