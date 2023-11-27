import React from "react";
import { Link } from "react-router-dom";
function Header(props) {
  console.warn(props.data);
  //console.warn(props.data[2])
  return (
    <div>
      <Link to="/" style={{textDecoration:"none"}}><h1 className="nav-color">Digital Store</h1></Link>
      <div className="add-to-cart">
        <span className="cart-count">{props.data.cardData.length}</span>
        <Link to="/cart"><img
          src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg"
          alt="carting"
        /></Link>
        
      </div>
    </div>
  );
}

export default Header;
