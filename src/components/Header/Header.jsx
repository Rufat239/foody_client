import React, { useState } from "react";
import imageLogo from "../../assets/headerImages/Foody..png";
import "../../style/header.css";
import { Link } from "react-router-dom";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div className="navBar">
      <div className="logoLinks">
        <img src={imageLogo} alt="" className="imgLogo" />

        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="restaurantMain">
            <li>Restaurants</li>
          </Link>
          <Link to="/aboutPage">
            <li>About us</li>
          </Link>
          <Link to="/howItWorks">
            <li>How it works</li>
          </Link>
          <Link to="/faqs">
            <li>FAQs</li>
          </Link>
        </ul>
      </div>

      <div className="inputBtns">
        <input type="text" />
        <button className="langBtn">LANG</button>
        <button className="inpSignUp" onClick={toggleDropdown}>
          {showDropdown && (
            <div className="dropdownMenu">
              <ul>
                <li>
                  <a href="/profile">Profile</a>
                </li>
                <li>
                  <Link to="/yourBasketPage">Your Basket</Link>
                </li>
                <li>
                  <a href="/yourOrders">Your Orders</a>
                </li>
                <li>
                  <a href="/checkout">Checkout</a>
                </li>
                <li>
                  <a href="/logout">Logout</a>
                </li>
              </ul>
            </div>
          )}
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Header;
