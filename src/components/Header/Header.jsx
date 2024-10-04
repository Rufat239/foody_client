import React, { useEffect, useState } from "react";
import imageLogo from "../../assets/headerImages/Foody..png";
import imageHamburger from "../../assets/headerImages/imageHamburger.png";
import engFlag from "../../assets/headerImages/engFlag.png";
import frFlag from "../../assets/headerImages/frFlag.png";
import azeFlag from "../../assets/headerImages/azeFlag.png";
import basket from "../../assets/headerImages/basket.png";
import "../../style/header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logout from "../Logout/Logout";
import axios from "axios";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [langImg, setLangImg] = useState(engFlag);
  const [hamburgerMenuStyle, setHamburgerMenuStyle] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [resDisplayName, setResDisplayName] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();

  const loggedOutHandler = () => {
    setShowLogoutModal(false);
  };

  const { t, i18n } = useTranslation();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  useEffect(() => {
    setIsLoggedIn(Boolean(localStorage.getItem("isLoggedIn")));
    setDisplayName(localStorage.getItem("displayName"));
    setResDisplayName(localStorage.getItem("resDisplayName"));

    const storedProfileImage = localStorage.getItem("profileImage");
    if (storedProfileImage) {
      setProfileImage(storedProfileImage); 
    }
  }, [navigate]);

  async function getUserInfo() {
    const id = JSON.parse(localStorage.getItem("userInfo")).localId;
    const { data } = await axios.get(
      `https://test-foody-admin-default-rtdb.firebaseio.com/users/${id}.json`
    );
    setUserInfo(data);
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    // `userInfo` değiştiğinde `profileImage`'ı güncelle
    if (userInfo && userInfo.profileImage) {
      setProfileImage(userInfo.profileImage);
    }
  }, [userInfo]);

  const handleLogoutClick = () => {
    handleLogout();
    closeHamburgerMenu();
  };

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
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "links activeLinks" : "links"
            }
          >
            <li>{t("navbar.home")}</li>
          </NavLink>
          <NavLink
            to="restaurantMain"
            className={({ isActive }) =>
              isActive ? "links activeLinks" : "links"
            }
          >
            <li>{t("navbar.restaurants")}</li>
          </NavLink>
          <NavLink
            to="/aboutPage"
            className={({ isActive }) =>
              isActive ? "links activeLinks" : "links"
            }
          >
            <li>{t("navbar.aboutus")}</li>
          </NavLink>
          <NavLink
            to="/howItWorks"
            className={({ isActive }) =>
              isActive ? "links activeLinks" : "links"
            }
          >
            <li>{t("navbar.howitworks")}</li>
          </NavLink>
          <NavLink
            to="/faqs"
            className={({ isActive }) =>
              isActive ? "links activeLinks" : "links"
            }
          >
            <li>{t("navbar.faq")}</li>
          </NavLink>
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
          <Link to="/yourBasketPage" className="linkBasket">
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
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="profileImages" />
            ) : (
              <img
                src={userInfo.profileImage}
                alt="Profile"
                className="profileImage"
              />
            )}
            {showDropdown && (
              <div className="dropdownMenu">
                <ul>
                  <h1 className="userName">{userInfo.fullname}</h1>
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
          {!isLoggedIn && (
            <Link className="linkSignRes" to="/loginPage">
              <button className="btnSignUpRes" onClick={closeHamburgerMenu}>
                {t("navbar.signup")}
              </button>
            </Link>
          )}
          {isLoggedIn && (
            <div className="aboutClient">
              <img className="imgClient" src={userInfo.profileImage} alt="" />
              <h2 className="nameClient">
                {resDisplayName ? resDisplayName : displayName}
              </h2>
            </div>
          )}
        </div>
        <ul>
          <NavLink to="/" className="navLinkRes" onClick={closeHamburgerMenu}>
            <li>{t("navbar.home")}</li>
          </NavLink>
          <NavLink
            to="/restaurantMain"
            className="navLinkRes"
            onClick={closeHamburgerMenu}
          >
            <li>{t("navbar.restaurants")}</li>
          </NavLink>
          <NavLink
            to="/aboutPage"
            className="navLinkRes"
            onClick={closeHamburgerMenu}
          >
            <li>{t("navbar.aboutus")}</li>
          </NavLink>
          <NavLink
            to="/howItWorks"
            className="navLinkRes"
            onClick={closeHamburgerMenu}
          >
            <li>{t("navbar.howitworks")}</li>
          </NavLink>
          <NavLink
            to="/faqs"
            className="navLinkRes"
            onClick={closeHamburgerMenu}
          >
            <li>{t("navbar.faq")}</li>
          </NavLink>
          {isLoggedIn && (
            <NavLink
              className="navLinkRes"
              onClick={handleLogoutClick}
            >
              <li>Logout</li>
            </NavLink>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Header;
