import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../store/slices/cartSlice";

import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const shippin=200;

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  console.log("lo que le paso al cart ", cart);
  cart.cartItems.map((cartItem) => {
    console.log(cartItem.name, cartItem.cartQuantity);
  });

  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div className="card">
            <div className="card-body p-4">
              <div className="row">
                <div className="col-lg-7">
                  <h5 className="mb-3">
                    <a href="/home" className="text-body">
                      <i className="fas fa-long-arrow-alt-left me-2"></i>
                      Continue shopping
                    </a>
                  </h5>
                  <hr />

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                      <p className="mb-1">Shopping cart</p>
                      <p className="mb-0">You have {cart.cartTotalQuantity} items in your cart</p>
                    </div>
                    <div>
                      <p className="mb-0">
                        <span className="text-muted">Sort by:</span>{" "}
                        <a href="#!" className="text-body">
                          price <i className="fas fa-angle-down mt-1"></i>
                        </a>
                      </p>
                    </div>
                  </div>

                  {cart.cartItems &&
                    cart.cartItems.map((cartItem) => {
                      console.log("lo que tiene el map", cartItem.image);
                      return (
                        <div className="card mb-3" key={cartItem.product}>
                          <div className="card-body">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex flex-row align-items-center">
                                <div >
                                <a className="sm-4"   style={{ maxWidth:"12px" }} >
                                 
                                  <img
                                    className="img-thumbnail center-block"
                                    variant="top"
                                    src={cartItem.image}
                                  />
                                      </a>
                                </div>
                                <div className="ms-3">
                                  <h5>{cartItem.name}</h5>
                                  <p className="small mb-0">{cartItem.name}</p>
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center">
                                <div style={{ width: "50px" }}>
                                  <h5 className="fw-normal mb-0">
                                    {cartItem.cartQuantity}
                                  </h5>
                                </div>
                                <div style={{ width: "80px" }}>
                                  <h5 className="mb-0">${cartItem.prices}</h5>
                                </div>
                                <a href="#!" style={{ color: "#cecece" }}>
                                  <i className="fas fa-trash-alt"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>

                <div className="col-lg-5">
                  <div className="card bg-primary text-white rounded-3">
                    <div className="card-body bg-primary">
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <h5 className="mb-0">Card details</h5>
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                          className="img-fluid rounded-3"
                          style={{ width: "45px" }}
                          alt="Avatar"
                        />
                      </div>

                      <p className="small mb-2">Card type</p>
                      <a href="#!" type="submit" className="text-white">
                        <i className="fab fa-cc-mastercard fa-2x me-2"></i>
                      </a>
                      <a href="#!" type="submit" className="text-white">
                        <i className="fab fa-cc-visa fa-2x me-2"></i>
                      </a>
                      <a href="#!" type="submit" className="text-white">
                        <i className="fab fa-cc-amex fa-2x me-2"></i>
                      </a>
                      <a href="#!" type="submit" className="text-white">
                        <i className="fab fa-cc-paypal fa-2x"></i>
                      </a>

                      <form className="mt-4">
                        <div className="form-outline form-white mb-4">
                          <input
                            type="text"
                            id="typeName"
                            className="form-control form-control-lg"
                            siez="17"
                            placeholder="Cardholder's Name"
                          />
                          <label className="form-label" htmlFor="typeName">
                            Cardholder's Name
                          </label>
                        </div>

                        <div className="form-outline form-white mb-4">
                          <input
                            type="text"
                            id="typeText"
                            className="form-control form-control-lg"
                            siez="17"
                            placeholder="1234 5678 9012 3457"
                            minLength="19"
                            maxLength="19"
                          />
                          <label className="form-label" htmlFor="typeText">
                            Card Number
                          </label>
                        </div>

                        <div className="row mb-4">
                          <div className="col-md-6">
                            <div className="form-outline form-white">
                              <input
                                type="text"
                                id="typeExp"
                                className="form-control form-control-lg"
                                placeholder="MM/YYYY"
                                size="7"
                                minLength="7"
                                maxLength="7"
                              />
                              <label className="form-label" htmlFor="typeExp">
                                Expiration
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-outline form-white">
                              <input
                                type="password"
                                id="typeText"
                                className="form-control form-control-lg"
                                placeholder="&#9679;&#9679;&#9679;"
                                size="1"
                                minLength="3"
                                maxLength="3"
                              />
                              <label className="form-label" htmlFor="typeText">
                                Cvv
                              </label>
                            </div>
                          </div>
                        </div>
                      </form>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Subtotal</p>
                        <p className="mb-2">${cart.cartTotalAmount}</p>
                      </div>

                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Shipping</p>
                        <p className="mb-2">$20.00</p>
                      </div>

                      <div className="d-flex justify-content-between mb-4">
                        <p className="mb-2">Total(Incl. taxes)</p>
                        <p className="mb-2">$ {cart.cartTotalAmount+shippin>200?cart.cartTotalAmount+shippin:0}</p>
                      </div>

                      <button
                        type="button"
                        className="btn btn-info btn-block btn-lg"
                      >
                        <div className="d-flex justify-content-between">
                          <span>$ {cart.cartTotalAmount+shippin>200?cart.cartTotalAmount+shippin:0} </span>
                          <span>
                          {" "}Checkout{" "}
                            <i className="fas fa-long-arrow-alt-right ms-2"></i>
                          </span>
                        </div>
                      </button>

                      <button
                        type="button"
                        className="btn btn-info btn-block btn-lg"
                        onClick={() => handleClearCart()}
                      >
                          <span>{"       "}</span>
                        <div className="d-flex justify-content-between">
                          <span>$ Clear cart </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
