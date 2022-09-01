import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./ProductItem.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  addToCart,
  decreaseCart,
  removeFromCart,
  clearCart,
  getTotals,
} from "../store/slices/cartSlice";

function ProductItem({ product }) {

  //const navigate = useNavigate();
  //renombrar 
  const { items: products, status } = useSelector((state) => state.products);
  const { cartItems} = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  /////////////////////////////////////

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    console.log("Click in handle Add to cart");
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  /////////////////////////////
  //TODO: Necesito leero desde el estado
  const quantity = 1; //getItemQuantity(product.id);

  return (
    <Card key={product.image} className="h-100">
      <Card.Img
        src={product.image}
        className="rounded mt-4 d-block"
        variant="top"
        height="30%"
        style={{ objectFit: "fill" }}
      ></Card.Img>
         <Card.Body
         
         className=" d-flex flex-column  ">
        <a class="product-category text-muted font-xs" >
        {product.title.slice(0,42)}
        </a>
        <Card.Title
          className="d-flex 
        aling-items-baseline
        mb-4"
        >
          
        </Card.Title>
        
        <div class="center-flex justify-content-between flex-wrap">
          <div class="product-price d-flex align-items-end">
            <div class="text-primary light lead">
              <span>${product.price}.</span> <sup>00</sup>
            </div>
            <del class="text-muted light strike-through ms-2">
              <span>$54.</span> <sup>00</sup>
            </del>
          </div>
          <div class="product-rating small text-alternate">
            <i class="fas fa-star"></i> <i class="fas fa-star"></i>{" "}
            <i class="fas fa-star"></i> <i class="fas fa-star"></i>{" "}
            <i class="fas fa-star"></i>
          </div>
        </div>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              className="w-100"
              onClick={() => handleAddToCart(product.id)}
            >
              + Add to de Cart
            </Button>
          ) : (
            <div
              className="d-flex aling-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button
                onClick={() => handleAddToCart(product.id)}
                 
                >
                  +
                </Button>
                <div>
                  <span className="fs-7">{quantity}</span> in cart
                </div>
                <Button
                onClick={()=>handleDecreaseCart(product.id)} 
                >
                  -
                </Button>
              </div>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
              <Button
                variant="danger"
                style={{ width: "120px" }}
                 onClick={()=>handleRemoveFromCart(product.id)} 
              >
                remove
              </Button>
              </div>
            </div>
          )}
        </div>
      </Card.Body>
      
       
    
    </Card>
  );
}

export default ProductItem;
