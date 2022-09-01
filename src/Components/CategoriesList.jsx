import { Fragment, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function CategoriesList({ onSelectFilter }) {
  //TODO leer las categorias que existen
  const [category, setCategory] = useState([]); //useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true); //useState<boolean>(true);

  const getCategory = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((res) => {
        setCategory(res);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getCategory();
    console.log("obtuvo datos de categorias en effect", category);
  }, [isLoading]);

  
  const data=category.map((item, index) => {
    return(
    <Col key={index} className="justify-content-star mt-4"> 
        <h5  key={index} className="bold" style={{color:'fff', backgroud_color:'000'}}
          onClick={() => onSelectFilter(item)}>
          {item}
        </h5>
    </Col>)
  });

  return (
    <Container className="container-row">
      <Row>
        {data}
      </Row>
  </Container>
  );
}
export default CategoriesList;
