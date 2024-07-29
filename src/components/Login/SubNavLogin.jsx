import React from "react";
import "../../style/subnavLogin.css";
import bayraq from "../../assets/loginimages/Rectangle.svg";

function SubNavLogin() {
  return (
    <div className="login-container">
      <div className="login-title">
        <h1 className="login-name">Foody.</h1>
        <button className="login-button">
          <img src={bayraq} alt="" className="login-image" />
        </button>
      </div>
    </div>
  );
}

export default SubNavLogin;
