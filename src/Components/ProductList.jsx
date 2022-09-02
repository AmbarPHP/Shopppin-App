import { useEffect, useState } from "react";
import "./ProductList.scss";
import ProductItem from "./ProductItem";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useGetAllProductsQuery } from "../store/productApi";

//todo FILTRAR ESTA CATEGORIA EN SUBCATEGORIAS
//TODO cambiar a Catalog y pasarle solo los filtros
function ProductList({ subFilter }){
  //filtrar los items por categoria
  //https://fakestoreapi.com/products/categories => este debe ser puesto en un select o listarlo en botones
  //

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { data, error } = useGetAllProductsQuery(); //, isLoading
  //console.log("Api", data);


  function getProduct() {
  
    //TODO HACER UN FILTER DE CATEGORIAS
    let category = subFilter;
    //esto me daria error, por que dice que lee un objeto en la prop
    //console.log("filtrando la busqueda","https://fakestoreapi.com/products/category/" + category);
    //.filter((item) => item.category === {subFilter})
    const UrlAPI = "https://fakestoreapi.com/products/category/" + category;
    fetch(UrlAPI)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
        setIsLoading(false);
      });
  }


  
  useEffect(() => {
    getProduct();
  }, [subFilter, isLoading]);

  if (isLoading) {
    // ⬅️ si está cargando, mostramos un texto que lo indique
    return (
      <div className="App">
        <h1>  </h1>
      </div>
    );
  }

//para ponerle un key unico al container RoW
let i=0;
  return (
    <div className="product__container" id="products">
       <Row xs={1} sm={2} md={3} lg={4}  xl={6} xxl={6} className="g-3 "  >
          {products.map((product, index) => {   
            return (
            <Col className="product-margin" xs={12} sm={6} md={4} lg={3} xl={3} xxl={3} key={i++}>
            <ProductItem key={index} product={product}/>
            </Col>)
          })}
       </Row>
    </div>
  );
}



export default ProductList;
