import React from 'react'
import "../../style/sidebar.css"
import { NavLink } from 'react-router-dom'
import people from "../../assets/sidebarIcons/people.png"
import basket from "../../assets/sidebarIcons/basket.png"

function Sidebar() {
  return (
    <div className="userSidebar">
    <ul>
      <NavLink to='/profile' className={({ isActive }) => isActive ? "sidebarList activeSidebar" : "sidebarList"}>
        <img src={people} className="profileImage" />
        <span>Profile</span>
      </NavLink>
      <NavLink to='/yourBasket' className={({ isActive }) => isActive ? "sidebarList activeSidebar" : "sidebarList"}>
        <img src={basket} alt="" />
        <span>Your Basket</span>
      </NavLink>
      <NavLink to='/yourOrders' className={({ isActive }) => isActive ? "sidebarList activeSidebar" : "sidebarList"}>
        <img src={basket} alt="" />
        <span>Your Orders</span>
      </NavLink>
      <NavLink to='/checkout' className={({ isActive }) => isActive ? "sidebarList activeSidebar" : "sidebarList"}>
        <img src={basket} alt="" />
        <span>Checkout</span>
      </NavLink>
      <NavLink to='/logout' className={({ isActive }) => isActive ? "sidebarList activeSidebar" : "sidebarList"}>
        <img src={basket} alt="" />
        <span>Logout</span>
      </NavLink>
    </ul>
  </div>
  )
}

export default Sidebar