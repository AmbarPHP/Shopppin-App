import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';


import "./ProductItem.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addToCart, decreaseCart,removeFromCart,clearCart,getTotals } from "../store/slices/cartSlice";
import { useGetAllProductsQuery } from "../store/productApi";


function ProductItem({product}) {
  //const navigate = useNavigate();

  const { items: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();


  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log("Api", isLoading);


/////////////////////////////////////

const cart = useSelector((state) => state.cart);


  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
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
  const quantity = 0;//getItemQuantity(product.id); 

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
               onClick={()=>handleAddToCart(product.id)} > 
              + Add to de Cart
              </Button>
            ) : (
              <div
                className="d-flex aling-items-center flex-column"
                style={{ gap: '.5rem' }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ gap: '.5rem'  }}
                >
                  <Button 
                  /* onClick={()=>increaseCarQuantity(product.id)} */
                  >+</Button>
                  <div>
                    <span className="fs-7">{quantity}</span> in cart
                  </div>
                  <Button 
                  /* onClick={()=>decreaseCarQuantity(product.id)} */
                  >-</Button>
                </div>
                <Button variant="danger" style={{ width:'120px'}} 
                /* onClick={()=>removeFromCart(product.id)} */
                >remove</Button>
              </div>
            )}
        </div>
      
      </Card.Body>
    </Card>
  );
}


export default ProductItem;



