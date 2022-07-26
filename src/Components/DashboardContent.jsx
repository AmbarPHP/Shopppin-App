import { useState, Fragment, useEffect } from "react";
import ProductList from "./ProductList";
import Product from "./ProductItem";
import CategoriesButton from "./CategoriesButton";
import ProductItem from "./ProductItem";

function DashboardContent() {
  const [categorySelect, setCategorySelected] = useState("women's clothing");

  useEffect(() => {
    setCategorySelected(categorySelect);
    console.log("llama a la handleChange efect");
  }, [categorySelect]);


  //TODO regresar aqui para visuallizar los productos
  /*

*/

  return (
    <>
      <CategoriesButton onClick={setCategorySelected}></CategoriesButton>
      <ProductList subFilter={categorySelect}>
        <div>Los productos</div>
        <ProductItem></ProductItem>
      </ProductList>
    </>
  );
}
export default DashboardContent;
