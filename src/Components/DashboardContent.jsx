import { useState, Fragment, useEffect } from "react";
import React from 'react'
import Container from "react-bootstrap/Container";
import ProductList from "./ProductList";
import Product from "./ProductItem";
import CategoriesList from "./CategoriesList";
import ProductItem from "./ProductItem";


function DashboardContent() {
  const [filter, setFilter] = useState<string>('');

  //tenia error por no implementar la funcion 
  //tengo que ejecutar la actulizacion, pero no regreso valores
  function onSelectFilter(filter:string):void{
    setFilter(filter);
  }

  useEffect(() => {
    onSelectFilter(filter);
    console.log("cambiando la categoria con un click", filter);
  }, [filter]);



  return (
    <Container>
      <CategoriesList onSelectFilter={(filter:string) => setFilter(filter)}></CategoriesList>
      <ProductList subFilter={filter}>
        <div>Los productos</div>
        <ProductItem ></ProductItem>
      </ProductList>
      </Container>
  );
}
export default DashboardContent;
