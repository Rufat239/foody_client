import React from "react";
import "../../style/logout.css";
import { Link, useNavigate } from "react-router-dom";
import logoutImg from "../../assets/ordersImages/box-arrow-right.svg";

function Logout({ onCancel, onLoggedOut }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
    onLoggedOut();
  };
  return (
    <div className="logout-overlay">
      <div className=" logout-container">
        <div className="text-logoutModal">
          <h1>Are you sure you want to logout?</h1>
          <p>You will need to log in again to continue.</p>
        </div>
        <div className="logout-buttons">
          <button onClick={onCancel} className="logout-cancel-button">
            Cancel
          </button>
          <button onClick={handleLogout} className="logout-button">
            <img src={logoutImg} alt="Logout" />
            <p>Logout</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Logout;
