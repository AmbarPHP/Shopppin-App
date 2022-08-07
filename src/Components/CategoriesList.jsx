
import { Fragment, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";


function CategoriesList({onSelectFilter}) {
  //TODO leer las categorias que existen
  const [category, setCategory] = useState([]); //useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);//useState<boolean>(true);


  const getCategory=()=> {
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

    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    
      category.map((item, index) => {
        return (
          <div>
          <ButtonGroup aria-label="Basic example">
          <Button key={item.id} variant="secondary" onClick={() => onSelectFilter(item)}>
          {item.categories}
          </Button>
          </ButtonGroup>
          </div>
          );
        })
   
    
  )
  
 
}

export default CategoriesList;
