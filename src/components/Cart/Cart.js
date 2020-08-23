import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  let productPrice = cart.reduce(
    (productPrice, ct) => productPrice + ct.price,
    0
  );

  let shippingCost = 0;
  if (productPrice > 35) {
    shippingCost = 4.99;
  } else if (productPrice > 0) {
    shippingCost = 12.99;
  } else {
    shippingCost = 0;
  }
  const tax = (productPrice + shippingCost) / 10;
  const grandTotal = productPrice + shippingCost + tax;

  const filterNumber = (number) => {
    const precision = number.toFixed(2);
    return Number(precision);
  };
  return (
    <div className="cart">
      <h2>Order summary</h2>
      <h5>Total item ordered: {props.cart.length}</h5>
      <br />
      <p>Product price: ${filterNumber(productPrice)}</p>
      <p>Shipping cost: ${filterNumber(shippingCost)}</p>
      <p>
        <small>tax 10%: ${filterNumber(tax)}</small>
      </p>
      <p>Grand total: ${filterNumber(grandTotal)}</p>
    </div>
  );
};

export default Cart;
