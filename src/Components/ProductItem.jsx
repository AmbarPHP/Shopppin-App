import "./ProductItem.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";

type ProductItemProps={ 
  id:number
  title:string
  price:number
  image:string
}

function ProductItem({product}: any ): JSX.Element {
//function ProductItem({id, title, price, image}|{{id, title, price, image}: ProductItemProps): JSX.Element{
  console.log("los parametros son pasados", product.title);
  const {getItemQuantity, increaseCarQuantity, decreaseCarQuantity, removeFromCart}=useShoppingCart()

  const quantity = getItemQuantity(product.id); 


  return (
    <Card key={product.image} className="h-100">
      <Card.Img
        src={product.image}
        variant="top"
        height="200px"
        style={{ objectFit: "cover" }}
      ></Card.Img>
      <Card.Body className=" d-flex flex-column">
        <Card.Title
          className="d-flex 
        justify-content-space-between
        aling-items-baseline
        mb-4"
        >
          <span className="ms-2 ">{product.title}</span>
          <span className="ms-2 text-muted">{product.price}</span>
        </Card.Title>  
        <div className="mt-auto">
            {quantity === 0 ? (
              <Button className="w-100" onClick={()=>increaseCarQuantity(product.id)}> + Add to de Cart</Button>
            ) : (
              <div
                className="d-flex aling-items-center flex-colum"
                style={{ gap: ".5rem" }}
              >
                <div
                  className="d-flex align-items-center jsutify-content-center"
                  style={{ gap: ".5rem" }}
                >
                  <Button onClick={()=>increaseCarQuantity(product.id)}>+</Button>
                  <div>
                    <span className="fs-3">{quantity}</span> in cart
                  </div>
                  <Button onClick={()=>decreaseCarQuantity(product.id)}>-</Button>
                </div>
                <Button variant="danger" onClick={()=>removeFromCart(product.id)}>remove</Button>
              </div>
            )}
        </div>
      
      </Card.Body>
    </Card>
  );
}
/**
 * 
 ProductItem.propTypes = {
   product: PropTypes.object,
 };
 */

export default ProductItem;
function getShoppingCart(): { getItemQuantity: any; increaseCarQuantity: any; decreaseCarQuantity: any; removeFromCart: any; } {
  throw new Error("Function not implemented.");
}

