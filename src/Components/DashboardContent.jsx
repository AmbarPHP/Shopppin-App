import { useState, Fragment, useEffect } from "react";
import React from 'react'
import Container from "react-bootstrap/Container";
import ProductList from "./ProductList";
import Product from "./ProductItem";
import CategoriesList from "./CategoriesList";
import ProductItem from "./ProductItem";


function DashboardContent() {
  const [filter, setFilter] = useState('');

  function onSelectFilter(filter){
    setFilter(filter);
  }

  useEffect(() => {
    onSelectFilter(filter);
    console.log("cambiando la categoria con un click", filter);
  }, [filter]);



  return (
    <Container>
      <CategoriesList onSelectFilter={(filter) => setFilter(filter)}></CategoriesList>
      <ProductList subFilter={filter}>
        <div>Los productos</div>
        <ProductItem ></ProductItem>
      </ProductList>
      </Container>
  );
}
export default DashboardContent;
