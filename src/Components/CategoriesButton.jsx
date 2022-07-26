
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";



function CategoriesButton(props) {
  //TODO leer las categorias que existen
  const [category, setCategory] = useState({});
  const [isLoading, setIsLoading] = useState(true);


  function getCategory() {
    fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
      .then((res) => {
        setCategory(res);
        setIsLoading(false);
        //console.log("obtuvo datos de categorias", res);
      });
  }
  useEffect(() => {
    getCategory();
  }, []);

  if (isLoading) {
    // ⬅️ si está cargando, mostramos un texto que lo indique
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    category.map((item, index) => {
        return (
          <>
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary" onClick={() => props.handleChangeCategory(item)}>
                {item}
              </Button>
            </ButtonGroup>
          </>
        );
      })
  )
  
 
}

export default CategoriesButton;
