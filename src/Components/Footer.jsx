import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Footer.scss";

import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import payment_methods from "../assets/payment-methods.png";

function Footer() {
  return (
    <Container fluid className="container-row align-bottom" style={{backgroundColor:'rgba(0, 157, 206)'}}>
      <Row>
        <Col sm={12} md={4} lg={4}  >
            <h6 className="bold text-contrast">All Products</h6>
            <nav className="nav flex-column">
              <a className="nav-item py-1" style={{color:'#fff'}} href="#">Headphones</a> 
              <a className="nav-item py-1" style={{color:'#fff'}} href="#">Audio Accessories</a> 
              <a className="nav-item py-1" style={{color:'#fff'}} href="#">Earbuds</a> 
              <a className="nav-item py-1" style={{color:'#fff'}} href="#">Speakers</a> 
              <a className="nav-item py-1" style={{color:'#fff'}} href="#">Subwoofers</a> 
              <a className="nav-item py-1" style={{color:'#fff'}} href="#">Portable Speakers</a> 
              <a className="nav-item py-1" style={{color:'#fff'}} href="#">Sound Bars</a> 
              <a className="nav-item py-1" style={{color:'#fff'}} href="#">Amplifiers</a> 
              <a className="nav-item py-1" style={{color:'#fff'}} href="#">Bluetooth</a> 
              <a className="nav-item py-1" style={{color:'#fff'}} href="#">LED TV's</a> 
              <a className="nav-item py-1" style={{color:'#fff'}} href="#">Blue-Ray</a> 
            </nav>
        </Col>
        <Col sm={12} md={4} lg={4} >
            <h6 className="bold text-contrast">Categories</h6>
            <nav className="nav flex-column">
              <a className="nav-item py-1" style={{color:'#fff'}} href="#">Headphones</a> 
              <a className="nav-item py-1" style={{color:'#fff'}} href="#">Audio Accessories</a> 
              <a className="nav-item py-1" style={{color:'#fff'}} href="#">Earbuds</a> 
              <a className="nav-item py-1" style={{color:'#fff'}} href="#">Speakers</a> 
              <a className="nav-item py-1" style={{color:'#fff'}} href="#">Subwoofers</a> 
              <a className="nav-item py-1" style={{color:'#fff'}} href="#">Portable Speakers</a> 
              <a className="nav-item py-1" style={{color:'#fff'}} href="#">Sound Bars</a> 
              <a className="nav-item py-1" style={{color:'#fff'}} href="#">Amplifiers</a> 
              <a className="nav-item py-1" style={{color:'#fff'}} href="#">Bluetooth</a> 
              <a className="nav-item py-1" style={{color:'#fff'}} href="#">LED TV's</a> 
              <a className="nav-item py-1" style={{color:'#fff'}} href="#">Blue-Ray</a> 
            </nav>
        </Col>
        <Col sm={12} md={4} lg={4} >
            <h6 className="bold text-contrast">Our Newsletter</h6>
        </Col>

        <div className="row align-items-center">
          <div className="col-md-4">
            <nav className="nav flex-wrap">
              <a className="nav-item py-1 me-3" href="#">Support</a> 
              <a className="nav-item py-1 me-3" href="#">Privacy</a> 
              <a className="nav-item py-1 me-3" href="#">Terms of use</a> 
              <a className="nav-item py-1" href="#">Return Policy</a>
            </nav>
          </div>
        <div className="col-md-4 text-center">
            <a className="d-inline-block align-middle me-3" href="#">
              <img className="img-responsive logo" src="..//logo-light.png" alt=""/>
            </a>
        </div>
        <div className="col-md-4 d-flex">
          <nav className="nav ms-md-auto">
            <a className="btn btn-sm btn-dark me-2" href="#">
              <i className="fab fa-twitter"></i></a> 
              <a className="btn btn-sm btn-dark me-2" href="#">
                <i className="fab fa-facebook"></i>
                </a> 
              <a className="btn btn-sm btn-dark me-2" href="#">
                <i className="fab fa-instagram"></i></a> 
              <a className="btn btn-sm btn-dark me-2" href="#">
                <i className="fab fa-pinterest"></i></a> 
              <a className="btn btn-sm btn-dark" href="#">
                <i className="fab fa-youtube"></i></a>
          </nav>
          </div>
        </div>
        <div className="row align-items-center mt-4">
          <div className="col-md-6">
            <p className="mt-4 small mb-md-0 text-center text-md-start">© 2021 
            <a href="5studios.net" target="_blank">5studios.net</a>. All Rights Reserved</p></div>
            <div className="col-md-6">
              <img className="img-responsive ms-md-auto" style={{width:'136px'}} 
              src={payment_methods} alt="Payment methods"/>
        </div></div>
      </Row>
    </Container>
  );
}
export default Footer; 