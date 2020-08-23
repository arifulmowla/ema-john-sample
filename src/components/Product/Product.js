import React from "react";
import "./Product.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { name, img, seller, stock, price } = props.product;
  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div className="product-des">
        <h3>{name}</h3>
        <p>
          <small>by {seller}</small>
        </p>
        <p>
          <b>${price}</b>
        </p>
        <p>
          <small>Only {stock} in stock - Order soon </small>
        </p>

        <button
          className="cart-btn"
          onClick={() => {
            props.handleAddProduct(props.product);
          }}
        >
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
