import React from "react";
import { Link } from "react-router-dom";
import cart from "../Images/cart.png";

function New({ name, price, img, description }) {
  const click = () => {
    alert("Added to Cart Successfully.");
  };

  return (
    <div className="recip-box">
      <img src={img} alt={`${name} Dish`} style={{ width: "200px", height: "200px" }} />
      <h3 className="product-name">
        <Link to="/description">{description}</Link>
      </h3>
      <h3 className="product-prize">{price}.00 LKR</h3>
      <button className="cart" onClick={click}>
        <img src={cart} alt="Add to Cart" />
      </button>
    </div>
  );
}

export default New;
