import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Cart.scss";

import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Cart.scss";
import logo from "../assets/logo.png";
import product1 from "../assets/product1.png";

function Cart() {
  return (
    <Container fluid className="container-fluid">
        <Row className="gap-y align-items-center text-center text-md-start">
            <Col md={10}>
                <h1 className="regular text-contrast">Your cart</h1>
                <p className="mb-0 text-muted">Add another $25 and get Free Shipping</p>
            </Col>
            <Col>
                <h2 className="h1 text-contrast">$654.<sup>00</sup></h2>
                <p className="mb-0 text-muted">8 items</p>
            </Col>
        </Row>
      <Row>
        <Col md={12} sm={12}>
            <div className="bg-light shadow-sm">
            <div className="container bring-to-front py-0">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb small py-2">
                        <li className="breadcrumb-item"><a href="/dashboard">Dasboard</a></li>
                        <li className="breadcrumb-item"><a href="/cart">Shop</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Cart</li>
                    </ol>
                </nav>
            </div>
            </div>
        </Col>
      </Row>

      <Row sm={2} md={1} lg={1} xl={1} className="border-bottom py-4">
        <Col sm={4} md={8} lg={9} xl={10}>

                
                <div className=" media text-center d-sm-flex text-sm-start">
                    <a sm={4} md={4} href="">
                        <img src={product1} 
                            className="me-sm-4 " 
                        alt=""/>
                    </a>
                </div>
                <div className=" ms-5 p-3 align-self-end col-sm-12 col-md-4 col-lg-6">
                    <a 
                    className="product-category text-muted font-xs" 
                    href="">Wireless &amp; Bluetooth
                    </a>
                    <h6 className="product-title bold">
                        <a 
                        href="" 
                        className="text-darker">Bluetooh Mouse</a>
                    </h6>
                        <p 
                        className="my-0 text-muted small">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                        <div 
                        className="text-primary light lead mt-3">
                            <span>$25.</span> <sup>00</sup>
                        </div>
                </div>

        </Col>
        <Col md={4} lg={3} xl={2}>
            <form className="form text-center text-sm-start" novalidate="noValidate">
                <div className="form-group mb-0">
                    <label className="control-label font-sm text-light" htmlFor="q1">Quantity</label> <select className="form-select" id="q1">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <button className="btn btn-link px-0 text-danger" type="button">
                    <i className="fas fa-times me-2"></i> Remove
                </button>
            </form>
        </Col>
      </Row>
      <Row >
        <div className="d-grid">
            <button className="btn btn-outline-primary mt-4" type="button">
                <i className="fas fa-redo me-2"></i>Update cart</button>
        </div>
      </Row>
      <Row>
        <div className="card-header">
            <a href="#" className=" card-title fs-3 fw-bold"  >
            <i className="fas fa-angle-down angle"></i>
            Shipping Options</a>
        </div>
        <div className="card-body">
        <form className="form form-check-list" method="post" novalidate="novalidate">
            <div className="mb-3 shadow-sm p-3">
                <div className="d-flex flex-column flex-sm-row align-items-sm-center"><div><div className="radio radio-primary">
                    <input className="form-control" type="radio" id="free-shipping" name="shipping-options"/> 
                    <label className="control-label text-darker" forHtml="free-shipping">
                        Free Shipping</label>
                    </div>
                        <p className="small text-muted my-0">
                            1 month - Tuesday, Dec 3rd 2019
                        </p>
                    </div>
                    <div className="ms-sm-auto">
                        <span className="font-sm text-primary">$0.00</span>
                    </div>
                </div>
            </div>
            <div className="mb-3 shadow-sm p-3">
                <div className="d-flex flex-column flex-sm-row align-items-sm-center">
                    <div>
                        <div className="radio radio-primary">
                            <input className="form-control" type="radio" id="standard-shipping" name="shipping-options"/> 
                            <label className="control-label text-darker" forHtml="standard-shipping">
                                Standard Shipping
                            </label>
                        </div>
                        <p className="small text-muted my-0">
                            2 weeks - Tuesday, Dec 3rd 2019
                        </p>
                    </div>
                    <div className="ms-sm-auto">
                        <span className="font-sm text-primary">$9.99</span>
                    </div>
                </div>
            </div>
            <div className="mb-3 shadow-sm p-3">
                <div className="d-flex flex-column flex-sm-row align-items-sm-center">
                    <div>
                        <div className="radio radio-primary">
                            <input className="form-control" type="radio" id="express-shipping" name="shipping-options"/> 
                            <label className="control-label text-darker" forHtml="express-shipping">Express Shipping</label>
                        </div>
                        <p className="small text-muted my-0">3 days - Tuesday, Dec 3rd 2019</p>
                    </div>
                    <div className="ms-sm-auto">
                        <span className="font-sm text-primary">$29.99</span>
                    </div>
                </div>
            </div>
        </form>
      </div>
      <hr className="my-4"></hr>
      <h6 className="text-darker">Shipping to</h6>
      <p className="text-muted">Your Address, 1234 Your Street, Your City</p>
      <div className="d-flex flex-wrap">
        <p className="bold text-darker text-uppercase">Total</p>
        <p className="h5 bold price ms-sm-auto">$654.00</p>
      </div>
      
      </Row>
      

     

      
    
    </Container>
  );
}
export default Cart; 