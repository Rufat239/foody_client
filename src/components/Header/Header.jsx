import React from "react";
import imageLogo from "../../assets/headerImages/Foody..png";
import "../../style/header.css";
import { Link } from "react-router-dom";

function Header() {
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
          <li>About us</li>
          <li>How it works</li>
          <li>FAQs</li>
        </ul>
      </div>

      <div className="inputBtns">
        <input type="text" />
        <button className="langBtn">LANG</button>
        <button className="inpSignUp">Sign up</button>
      </div>
    </div>
  );
}

export default Header;
