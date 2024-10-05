import React, { useEffect, useRef, useState } from "react";
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

  // Search part dropdown
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [showAllRestaurants, setShowAllRestaurants] = useState(false);

  const [restaurantData, setRestaurantData] = useState([]);
  const [category, setCategory] = useState([]);

  //  GET RESTAURANT DATAS
  useEffect(() => {
    const getRestaurants = async () => {
      const restaurantURL = `https://test-foody-admin-default-rtdb.firebaseio.com/restaurants.json`;
      try {
        const response = await axios.get(restaurantURL);
        const data = response.data;
        setRestaurantData(Object.values(data));
      } catch (error) {
        console.log("error", error);
      }
    };

    getRestaurants();
  }, []);

  // GET CATEGORY DATAS
  useEffect(() => {
    const getCategoryDatas = async () => {
      const categorUrl = `https://test-foody-admin-default-rtdb.firebaseio.com/categories.json`;

      try {
        const response = await axios.get(categorUrl);
        const dataCategory = response.data;
        setCategory(Object.values(dataCategory));
      } catch (error) {
        console.log("error");
      }
    };
    getCategoryDatas();
  }, []);

  const filteredRestaurantsName = restaurantData.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      setDropdownVisible(true);
    } else {
      setDropdownVisible(false);
    }
  };

  // scroll hide and active
  const [showMore, setShowMore] = useState(false);
  // touch screen hide dropdown
  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

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
        <input
          type="text"
          placeholder={t("placeholder")}
          value={searchQuery}
          onChange={handleInputChange}
        />

        {/* Dropdown for serach */}

        {dropdownVisible && (
          <div
            className={`search-dropdown ${dropdownVisible ? "show" : ""} 
    ${showMore ? "show-scroll" : "hide-scroll"}`}
            ref={dropdownRef}
          >
            <ul>
              {filteredRestaurantsName.length === 0 ? (
                <li className="no-results33">No result found</li>
              ) : (
                (showAllRestaurants
                  ? filteredRestaurantsName
                  : filteredRestaurantsName.slice(0, 4)
                ).map((restaurant, id) => (
                  <section key={id}>
                    <Link
                    className="homeLinkInt"
                      to="/internal"
                      state={{ restaurant }}
                      onClick={() => {
                        setDropdownVisible(false);
                        setSearchQuery("");
                      }}
                    >
                      <li className="restaurant-item">
                        <figure>
                          <img
                            src={restaurant.url}
                            alt={restaurant.name}
                            className="restaurant-logo"
                          />
                        </figure>

                        <div className="restaurant-info">
                          <h4 className="restaurant-nameHome">{restaurant.name}</h4>
                          <p className="restaurant-descriptionHome">
                            {restaurant.category}
                          </p>
                        </div>
                      </li>
                    </Link>
                  </section>
                ))
              )}
              {filteredRestaurantsName.length > 4 && !showAllRestaurants && (
                <li className="moreLinkStyle">
                  <button
                    onClick={() => {
                      setShowAllRestaurants(true);
                      setShowMore(true);
                    }}
                    className="moreLink"
                  >
                    More
                    <svg
                      style={{ marginLeft: "10px" }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="8"
                      viewBox="0 0 15 8"
                      fill="none"
                    >
                      <path
                        d="M0.439371 4.33538L12.6665 4.33538L9.00867 7.38246C8.83687 
                  7.52613 8.83687 7.75871 9.00867 7.90201C9.18048 8.04568 
                  9.4586 8.04568 9.62996 7.90201L13.9798 4.26483C14.149 4.12335 
                  14.149 3.88675 13.9798 3.74528L9.62993 0.10772C9.45812 -0.03595 
                  9.18 -0.03595 9.00864 0.10772C8.83683 0.25139 8.83683 0.483968 
                  9.00864 0.627271L12.6665 3.60054L0.439407 3.60054C0.196858 
                  3.60054 3.57638e-05 3.76516 3.5741e-05 3.96796C3.57182e-05 
                  4.17076 0.196858 4.33538 0.439371 4.33538Z"
                        fill="#d63626"
                      />
                    </svg>
                  </button>
                </li>
              )}
              {filteredRestaurantsName.length > 4 && showAllRestaurants && (
                <li className="moreLinkLess">
                  <button
                    onClick={() => {
                      setShowAllRestaurants(false);
                      setShowMore(false);
                    }}
                    className="moreLink"
                  >
                    <svg
                      style={{ marginRight: "20px" }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="8"
                      viewBox="0 0 15 8"
                      fill="none"
                      transform="scale(-1, 1) translate(-15, 0)"
                    >
                      <path
                        d="M0.439371 4.33538L12.6665 4.33538L9.00867 7.38246C8.83687 
                  7.52613 8.83687 7.75871 9.00867 7.90201C9.18048 8.04568 
                  9.4586 8.04568 9.62996 7.90201L13.9798 4.26483C14.149 4.12335 
                  14.149 3.88675 13.9798 3.74528L9.62993 0.10772C9.45812 -0.03595 
                  9.18 -0.03595 9.00864 0.10772C8.83683 0.25139 8.83683 0.483968 
                  9.00864 0.627271L12.6665 3.60054L0.439407 3.60054C0.196858 
                  3.60054 3.57638e-05 3.76516 3.5741e-05 3.96796C3.57182e-05 
                  4.17076 0.196858 4.33538 0.439371 4.33538Z"
                        fill="#d63626"
                      />
                    </svg>
                    Less
                  </button>
                </li>
              )}
            </ul>
          </div>
        )}

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
                    <Link onClick={handleLogout} className="logoutLinkSty">Logout</Link>
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
            <NavLink className="navLinkRes" onClick={handleLogoutClick}>
              <li>Logout</li>
            </NavLink>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Header;
