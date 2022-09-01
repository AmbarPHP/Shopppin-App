import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { data } from "./products";

function NewProduct() {
  const handleSeed = (e) => {
    e.preventDefault();
    console.log("cargando datos", data);

    data.map((item) => {
      console.log(item);

      /* fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: JSON.stringify({
          title: {item.},
          price: {item.price},
          description: "lorem ipsum set",
          image: "https://i.pravatar.cc",
          category: "electronic",
        }),
      })
        .then((res) => res.json())
        .then((json) => console.log(json)); */
    });

    fetch("https://fakestoreapi.com/products", {
  method: "POST",
  body: JSON.stringify({
    title: "test product",
    price: 13.5,
    description: "lorem ipsum set",
    image: "https://i.pravatar.cc",
    category: "electronic",
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));

  };
  return (
    <Button onClick={handleSeed} variant="primary" type="submit">
      Seed Product
    </Button>
  );
}
export default NewProduct;
