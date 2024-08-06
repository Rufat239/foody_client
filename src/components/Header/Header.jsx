import React, { useEffect, useState } from "react";
import imageLogo from "../../assets/headerImages/Foody..png";
import imageHamburger from "../../assets/headerImages/imageHamburger.png";
import engFlag from "../../assets/headerImages/engFlag.png";
import frFlag from "../../assets/headerImages/frFlag.png";
import azeFlag from "../../assets/headerImages/azeFlag.png";
import basket from "../../assets/headerImages/basket.png";
import "../../style/header.css";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logout from "../Logout/Logout";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [langImg, setLangImg] = useState(engFlag);
  const [hamburgerMenuStyle, setHamburgerMenuStyle] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const loggedOutHandler = () => {
    setShowLogoutModal(false);
  };

  useEffect(() => {
    setIsLoggedIn(Boolean(localStorage.getItem("isLoggedIn")));
  }, [navigate]);

  const { t, i18n } = useTranslation();

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    setShowLogoutModal(true);
  };
  const handleCancel = () => {
    setShowLogoutModal(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleLangDropdown = () => {
    setShowLangDropdown(!showLangDropdown);
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

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
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
        <Link to="/">
          <button className="logoBtn">
            <img src={imageLogo} alt="" className="imgLogo" />
          </button>
        </Link>

        <ul>
          <Link className="links" to="/">
            <li>{t("navbar.home")}</li>
          </Link>
          <Link className="links" to="restaurantMain">
            <li>{t("navbar.restaurants")}</li>
          </Link>
          <Link className="links" to="/aboutPage">
            <li>{t("navbar.aboutus")}</li>
          </Link>
          <Link className="links" to="/howItWorks">
            <li>{t("navbar.howitworks")}</li>
          </Link>
          <Link className="links" to="/faqs">
            <li>{t("navbar.faq")}</li>
          </Link>
        </ul>
      </div>

      <div className="inputBtns">
        <input type="text" />
        <button className="langBtn" onClick={toggleLangDropdown}>
          <img className="imgLangBtn" src={langImg} alt="" />
          {showLangDropdown && (
            <div className="langDropdownMenu">
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

        {isLoggedIn && (
          <Link to="/yourBasketPage">
            <button className="basketBtn">
              <img src={basket} alt="" className="imgBasketBtn" />
            </button>
          </Link>
        )}

        {!isLoggedIn && (
          <Link className="linkSign" to="/loginPage">
            <button className="btnSignUp">{t("navbar.signup")}</button>
          </Link>
        )}
        {isLoggedIn && (
          <button
            className="adminBtn"
            onClick={toggleDropdown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {showDropdown && (
              <div className="dropdownMenu">
                <ul>
                  <li>
                    <Link to="/profilePage">Profile</Link>
                  </li>
                  <li>
                    <Link to="/yourBasketPage">Your Basket</Link>
                  </li>
                  <li>
                    <Link to="/ordersPage">Your Orders</Link>
                  </li>
                  <li>
                    <Link to="/checkoutPage">Checkout</Link>
                  </li>
                  <li>
                    <Link onClick={handleLogout}>Logout</Link>
                  </li>
                </ul>
              </div>
            )}
            Admin
          </button>
        )}
        {showLogoutModal && (
          <Logout onCancel={handleCancel} onLoggedOut={loggedOutHandler} />
        )}
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
              {t("navbar.home")}
            </Link>
          </li>
          <li>
            <Link
              className="responsLink"
              to="/restaurantMain"
              onClick={closeHamburgerMenu}
            >
              {t("navbar.restaurants")}
            </Link>
          </li>
          <li>
            <Link
              className="responsLink"
              to="/aboutPage"
              onClick={closeHamburgerMenu}
            >
              {t("navbar.aboutus")}
            </Link>
          </li>
          <li>
            <Link
              className="responsLink"
              to="/howItWorks"
              onClick={closeHamburgerMenu}
            >
              {t("navbar.howitworks")}
            </Link>
          </li>
          <li>
            <Link
              className="responsLink"
              to="/faqs"
              onClick={closeHamburgerMenu}
            >
              {t("navbar.faq")}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
