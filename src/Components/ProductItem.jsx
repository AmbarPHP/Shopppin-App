import { PropTypes } from "prop-types";
import "./ProductItem.css";

function ProductItem({ product }) {
  console.log("los parametros son pasados", product.id);
  return (
   

<div className="product__card" key={product.id}>
    <div className="card__detail">
      <img src="_Logo_White.png" alt="logo" className="card-logo"/>
      <div className="product-detail">
        <h2>{product.title}</h2> 
      </div>
      <img src={product.image} className="product__image"/>
      <span className="back-text">
              FAS
            </span>
    </div>
    <div className="card-body">
      <div className="product-desc">
        <span className="product-title">
                <b>{product.title}</b>
                {product.description}
        </span>
        <span className="product-caption">
                Basket Ball Collection
              </span>
        <span className="product-rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star grey"></i>
              </span>
      </div>
      <div className="product-properties">
        <span className="product-size">
                <h4>Size</h4>
                <ul className="ul-size">
                  <li><a href="#">7</a></li>
                  <li><a href="#">8</a></li>
                  <li><a href="#">9</a></li>
                  <li><a href="#" className="active">10</a></li>
                  <li><a href="#">11</a></li>
                </ul>
              </span>
        <span className="product-color">
                <h4>Colour</h4>
                <ul className="ul-color">
                  <li><a href="#" className="orange active"></a></li>
                  <li><a href="#" className="green"></a></li>
                  <li><a href="#" className="yellow"></a></li>
                </ul>
              </span>
        <span className="product-price">
                USD<b>{product.price}</b>
              </span>
      </div>
    </div>
  </div>
  );
}

ProductItem.propTypes = {
  product: PropTypes.object,
};

export default ProductItem;
