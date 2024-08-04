import React from "react";
import "../../style/subnavLogin.css";
import bayraq from "../../assets/loginimages/Rectangle.png";
import segment from '../../assets/loginimages/segment.svg';

function SubNavLogin() {
  return (
    <div className="login-container">
       <button className="login-segment">
          <img src={segment}></img>
        </button>
      <div className="login-title">
        <h1 className="login-name">Foody.</h1>
        <button className="login-btnLang">
          <img src={bayraq} alt="" className="login-imgLang" />
        </button>
      </div>
    </div>
  );
}

export default SubNavLogin;
