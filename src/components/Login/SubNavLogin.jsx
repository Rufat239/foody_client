import React ,{ useState } from "react";
import "../../style/subnavLogin.css";
import engFlag from "../../assets/loginimages/Rectangle.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import frFlag from "../../assets/headerImages/frFlag.png";
import azeFlag from "../../assets/headerImages/azeFlag.png";


function SubNavLogin() {
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [langImg, setLangImg] = useState(engFlag);
  const { t, i18n } = useTranslation();


  const toggleLangDropdown = () => {
    setShowLangDropdown(!showLangDropdown);
  };


  return (
    <div className="login-container">
      <div className="login-title">
       <Link to='/'><button className="login-name">Foody.</button></Link>
        <button className="login-btnLang" onClick={toggleLangDropdown}>
          <img src={langImg} alt="" className="login-imgLang" />
          {showLangDropdown && (
            <div className="login-langDropdownMenu">
              <ul>
                <li>
                  <button
                    onClick={() => {
                      setLangImg(engFlag);
                      i18n.changeLanguage("en");
                    }}
                  >
                    <img src={engFlag} alt="" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setLangImg(frFlag);
                      i18n.changeLanguage("fr");
                    }}
                  >
                    <img src={frFlag} alt="" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setLangImg(azeFlag);
                      i18n.changeLanguage("az");
                    }}
                  >
                    <img src={azeFlag} alt="" />
                  </button>
                </li>
              </ul>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

export default SubNavLogin;
