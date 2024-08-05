import React, { useState } from "react";
import "../../style/sidebar.css";
import { NavLink } from "react-router-dom";
import people from "../../assets/sidebarIcons/people.png";
import basket from "../../assets/sidebarIcons/basket.png";
import Logout from "../Logout/Logout";
import { useTranslation } from "react-i18next";

function Sidebar() {
  const { t } = useTranslation();

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const loggedOutHandler = () => {
    setShowLogoutModal(false);
  };

  const handleLogout = () => {
    setShowLogoutModal(true);
  };
  const handleCancel = () => {
    setShowLogoutModal(false);
  };

  return (
    <div className="userSidebar">
      <ul>
        <NavLink
          to="/profilePage"
          className={({ isActive }) =>
            isActive ? "sidebarList activeSidebar" : "sidebarList"
          }
        >
          <img src={people} className="profileImage" />
          <span>{t("sidebar.profile")}</span>
        </NavLink>
        <NavLink
          to="/yourBasketPage"
          className={({ isActive }) =>
            isActive ? "sidebarList activeSidebar" : "sidebarList"
          }
        >
          <img src={basket} alt="" />
          <span>{t("sidebar.yourBasket")}</span>
        </NavLink>
        <NavLink
          to="/ordersPage"
          className={({ isActive }) =>
            isActive ? "sidebarList activeSidebar" : "sidebarList"
          }
        >
          <img src={basket} alt="" />
          <span>{t("sidebar.yourOrders")}</span>
        </NavLink>
        <NavLink
          to="/checkoutPage"
          className={({ isActive }) =>
            isActive ? "sidebarList activeSidebar" : "sidebarList"
          }
        >
          <img src={basket} alt="" />
          <span>{t("sidebar.checkout")}</span>
        </NavLink>
        <li className="sidebarList" onClick={handleLogout}>
          <img src={basket} alt="" />
          <span>{t("sidebar.logout")}</span>
        </li>
        {showLogoutModal && (
          <Logout onLoggedOut={loggedOutHandler} onCancel={handleCancel} />
        )}
      </ul>
    </div>
  );
}

export default Sidebar;
