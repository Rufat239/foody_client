import React, { useState } from "react";
import "../../style/sidebar.css";
import { NavLink } from "react-router-dom";
import people from "../../assets/sidebarIcons/people.png";
import basket from "../../assets/sidebarIcons/basket.png";
import Logout from "../Logout/Logout"


function Sidebar() {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

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
          <span>Profile</span>
        </NavLink>
        <NavLink
          to="/yourBasketPage"
          className={({ isActive }) =>
            isActive ? "sidebarList activeSidebar" : "sidebarList"
          }
        >
          <img src={basket} alt="" />
          <span>Your Basket</span>
        </NavLink>
        <NavLink
          to="/ordersPage"
          className={({ isActive }) =>
            isActive ? "sidebarList activeSidebar" : "sidebarList"
          }
        >
          <img src={basket} alt="" />
          <span>Your Orders</span>
        </NavLink>
        <NavLink
          to="/checkout"
          className={({ isActive }) =>
            isActive ? "sidebarList activeSidebar" : "sidebarList"
          }
        >
          <img src={basket} alt="" />
          <span>Checkout</span>
        </NavLink>
        <li
          className="sidebarList"
          onClick={handleLogout}>
            <img src={basket} alt="" />
            <span>Logout</span>
        </li>
        {showLogoutModal && (
          <Logout isOpen={showLogoutModal} onCancel={handleCancel} />
        )}
      </ul>
    </div>
  );
}

export default Sidebar;
