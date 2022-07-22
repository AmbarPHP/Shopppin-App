import { motion } from "framer-motion";
import { useEffect, useState } from "react";
//todo FILTRAR ESTA CATEGORIA EN SUBCATEGORIAS

//TODO cambiar a Catalog y pasarle solo los filtros
function  FilterCatalog  ({ subFilter }) {
  //filtrar los items por categoria
  //https://fakestoreapi.com/products/categories => este debe ser puesto en un select o listarlo en botones

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  function getData() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setIsLoading(false);
      })
      .then((json) => console.log(json));
  }
  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    // ⬅️ si está cargando, mostramos un texto que lo indique
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }

  const itemContainer = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      {data
        .filter((item) => item.category === "subFilter")
        .map((item, i) => (
          <motion.div
            className="menu-items"
            key={item.id}
            variants={itemContainer}
            transition={{ delay: i * 0.2 }}
          >
           
            <motion.div className="item-content">
              <motion.div className="item-title-box">
                <motion.h5 className="item-title">{item.title}</motion.h5>
                <motion.h5 className="item-price">${item.price}</motion.h5>
              </motion.div>
              <motion.p className="item-desc">{item.desc}</motion.p>
            </motion.div>
          </motion.div>
        ))}
    </>
  );
};

export default FilterCatalog;
