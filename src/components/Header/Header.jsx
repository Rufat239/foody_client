import React from "react";
import imageLogo from "../../assets/headerImages/Foody..png";
import "../../style/header.css";

function Header() {
  return (
    <div className="navBar">
      <div className="logoLinks">
        <img src={imageLogo} alt="" className="imgLogo" />

        <ul>
          <li>Home</li>
          <li>Restaurants</li>
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
