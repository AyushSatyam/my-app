import React from "react";

const CartItem = (props) => {
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={style.image} />
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>{props.product.title}</div>
        <div style={{ fontSize: 25 }}>Rs: {props.product.price}</div>
        <div style={{ fontSize: 25 }}>Qty: {props.product.qty}</div>
        <div className="cart-item-actions">
          <img
            alt="increase"
            className="action-icons"
            src="https://www.flaticon.com/premium-icon/icons/svg/3114/3114793.svg"
            onClick={() => props.onIncreaseQuantity(props.product)}
          />
          <img
            alt="decrease"
            className="action-icons"
            src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1619885476~hmac=28fd8af9f1d8ead4116369af1589ccdd"
            onClick={() => props.onDecreaseQuantity(props.product)}
          />
          <img
            alt="delete"
            className="action-icons"
            src="https://www.flaticon.com/svg/vstatic/svg/3096/3096673.svg?token=exp=1619885508~hmac=35f7b0625ec04ee5c2e83357c04a4b33"
            onClick={() => props.onDeleteProduct(props.product.id)}
          />
        </div>
      </div>
    </div>
  );
};
const style = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    backgroundColor: "#777",
  },
};
export default CartItem;
