import "./ProductItem.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";



function ProductItem({product}) {
//function ProductItem({id, title, price, image}|{{id, title, price, image}: ProductItemProps): JSX.Element{
  console.log("los parametros son pasados", product.title);
  const {getItemQuantity, increaseCarQuantity, decreaseCarQuantity, removeFromCart}=useShoppingCart()

  const quantity = getItemQuantity(product.id); 

  return (
    <Card key={product.image} className="h-100">
      <Card.Img
        src={product.image}
        className="rounded mx-auto d-block"
        variant="top"
        height="100px"
        style={{ objectFit: "cover" }}
      ></Card.Img>
      <Card.Body className=" d-flex flex-column">
        <Card.Title
          className="d-flex 
        justify-content-space-between
        aling-items-baseline
        mb-4"
        >
          <span className="ms-2 fs-8">{product.title}</span>
          <span className="ms-2 text-muted">{'$'+product.price}</span>
        </Card.Title>  
        <div className="mt-auto">
            {quantity === 0 ? (
              <Button className="w-100" 
              onClick={()=>increaseCarQuantity(product.id)}> + Add to de Cart</Button>
            ) : (
              <div
                className="d-flex aling-items-center flex-column"
                style={{ gap: '.5rem' }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ gap: '.5rem'  }}
                >
                  <Button onClick={()=>increaseCarQuantity(product.id)}>+</Button>
                  <div>
                    <span className="fs-7">{quantity}</span> in cart
                  </div>
                  <Button onClick={()=>decreaseCarQuantity(product.id)}>-</Button>
                </div>
                <Button variant="danger" style={{ width:'120px'}} onClick={()=>removeFromCart(product.id)}>remove</Button>
              </div>
            )}
        </div>
      
      </Card.Body>
    </Card>
  );
}


export default ProductItem;

/*
function getShoppingCart(): { getItemQuantity; increaseCarQuantity; decreaseCarQuantity; removeFromCart } {
  throw new Error("Function not implemented.");
}
*/


