import React from "react";

const NavBar = (props) => {
  return (
    <div style={styles.nav} className="navbar">
      <div style={styles.cartIconContainer}>
        <img
          style={styles.cartIcon}
          src="https://www.flaticon.com/svg/vstatic/svg/34/34568.svg?token=exp=1619890215~hmac=334e17dfb86c85d29c89f07c1e9f57ce"
          alt="cart-icon"
        />
        <span style={styles.cartCount}>{props.count}</span>
        
      </div>
    </div>
  );
};
const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20,
  },
  nav: {
    height: 70,
    background: "#4267b2",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  cartIconContainer: {
    position: "relative",
  },
  cartCount: {
    background: "yellow",
    borderRadius: "50%",
    padding: "4px 8px",
    position: "absolute",
    right: 0,
    top: -9,
  },
};

export default NavBar;
