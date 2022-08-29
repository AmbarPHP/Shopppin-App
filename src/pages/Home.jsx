import { useState, Fragment, useEffect } from "react";
import React from "react";
import Container from "react-bootstrap/Container";
import ProductList from "../Components/ProductList";
import Product from "../Components/ProductItem";
import CategoriesList from "../Components/CategoriesList";
import ProductItem from "../Components/ProductItem";
import Footer from "../Components/Footer";
import carrusel1 from "../assets/happy-girl.jpg";
import logo from"../assets/logo.png";

function Home() {
  const [filter, setFilter] = useState("electronics");

  function onSelectFilter(filter) {
    setFilter(filter);
  }

  useEffect(() => {
    onSelectFilter(filter);
    console.log("cambiando la categoria con un click", filter);
  }, [filter]);

  return (
    <Container className="dashboard_container">
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
      <Footer></Footer>
    </Container>
   
  );
}
export default Home;
