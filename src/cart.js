import React from "react";
import CartItem from "./cartItem";

const Cart = (props) => {
  const { products } = props;
  return (
    <div className="cart">
      <h1>Cart</h1>
      {products.map((product) => {
        return (
          <CartItem
            product={product}
            key={product.id}
            onIncreaseQuantity={props.onIncreaseQuantity}
            onDecreaseQuantity={props.onDecreaseQuantity}
            onDeleteProduct={props.onDeleteProduct}
          />
        );
      })}
    </div>
  );
};

export default Cart;
