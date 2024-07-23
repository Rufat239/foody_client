import React, { useState } from "react";
import imageLogo from "../../assets/headerImages/Foody..png";
import imageHamburger from "../../assets/headerImages/imageHamburger.png";
import "../../style/header.css";
import { Link } from "react-router-dom";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  const [hamburgerMenuStyle, setHamburgerMenuStyle] = useState({});

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const openHamburgerMenu = () => {
    setHamburgerMenuStyle({
      display: "block",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "110vh",
      zIndex: 999,
      margin: 0,
      borderRadius: 0,
    });
  };

  const closeHamburgerMenu = () => {
    setHamburgerMenuStyle({
      display: "none",
    });
  };
  return (
    <div className="navBar">
      <div className="logoLinks">
        <button className="hamburgBtn">
          <img
            src={imageHamburger}
            alt=""
            className="imgHamburg"
            onClick={openHamburgerMenu}
          />
        </button>
        <img src={imageLogo} alt="" className="imgLogo" />

        <ul>
          <Link className="links" to="/">
            <li>Home</li>
          </Link>
          <Link className="links" to="restaurantMain">
            <li>Restaurants</li>
          </Link>
          <Link className="links" to="/aboutPage">
            <li>About us</li>
          </Link>
          <Link className="links" to="/howItWorks">
            <li>How it works</li>
          </Link>
          <Link className="links" to="/faqs">
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
                  <Link to="/ordersPage">Your Orders</Link>
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

      <div className="navRespons" style={hamburgerMenuStyle}>
        <button className="closeHamburger" onClick={closeHamburgerMenu}>
          X
        </button>
        <div className="resSignUpBtn">
          <button>Sign up</button>
        </div>

        <ul>
          <li>
            <Link className="responsLink" to="/" onClick={closeHamburgerMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link
              className="responsLink"
              to="/restaurantMain"
              onClick={closeHamburgerMenu}
            >
              Restaurants
            </Link>
          </li>
          <li>
            <Link
              className="responsLink"
              to="/aboutPage"
              onClick={closeHamburgerMenu}
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              className="responsLink"
              to="/howItWorks"
              onClick={closeHamburgerMenu}
            >
              How it works?
            </Link>
          </li>
          <li>
            <Link
              className="responsLink"
              to="/faqs"
              onClick={closeHamburgerMenu}
            >
              FAQs
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
