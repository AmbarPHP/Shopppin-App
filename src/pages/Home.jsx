import { useState, Fragment, useEffect } from "react";
import React from "react";
import ProductList from "../Components/ProductList";
import Product from "../Components/ProductItem";
import CategoriesList from "../Components/CategoriesList";
import ProductItem from "../Components/ProductItem";
import Footer from "../Components/Footer";
import carrusel1 from "../assets/happy-girl.jpg";
import { Container, Row, Col } from "react-bootstrap";
import logo from"../assets/logo.png";
//voy a leer la informacion del context
import {useAuth} from "../context/authContext";
import headphones from "../assets/blue-headphones.jpg";


//es el layout principal
function Home() {
  //Nos ahoramos esto y lo pasamos una funcion dentro de authContext
  //const {user}= useAuth();
  //console.log("auth context val",user);


  const [filter, setFilter] = useState("electronics");

  function onSelectFilter(filter) {
    setFilter(filter);
  }

  useEffect(() => {
    onSelectFilter(filter);
    //console.log("cambiando la categoria con un click", filter);
  }, [filter]);

  return (
    <div className="d-flex">
   
    <Container className="dashboard_container">
    <Row className="gap-y " style={{backgroundColor:'rgba(0, 157, 206)'}}>
      <Col sm={12} md={6} lg={6} className="px-0 order-md-2">
        <img className="ms-auto align-items-end" style={{backgroundColor:'blue', width:320, height:320}} 
        src={headphones} alt="..."/>
      </Col>

      <Col sm={12} md={6} lg={4} className="ms-lg-auto align-items-end">
            <div className="text-center text-lg-start text-lg-nowrap">
              <h4 className="text-light font-weight-light mb-0 pb-1">What you were waiting for?</h4>
              <h1 className="text-contrast bold display-4">The New Headphones Collection</h1>
              <p className="lead text-light pb-3">Discover our selection of the best Headphones</p>
            </div>
      </Col>
      </Row>
       <div className="section-heading">
        <span className="text-primary bold">Discover</span>
        <h3>What's Trending Now</h3>
        </div>
      <CategoriesList 
        onSelectFilter={(filter) => setFilter(filter)}
      ></CategoriesList>
      <ProductList subFilter={filter}>
        <div> {"list products goes here"}</div>
        <ProductItem></ProductItem>
      </ProductList>
     
    {/* tODO 
    PAGINACION 
    <div className="align-content-center" >
        <button className="bg-primary text-white" >Previous</button>
        <button className="bg-success text-white" >Next</button>
    </div> */}

      <Footer></Footer>
    </Container>
   

    
    </div>
  );
}
export default Home;
