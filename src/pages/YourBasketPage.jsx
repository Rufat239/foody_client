import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import UserBasket from '../components/UserBasket/UserBasket'


function YourBasketPage() {
  return (
    <div>
    <div style={{ display: "flex", marginTop: "2%", columnGap: "2%" }}>
      <Sidebar />
      <UserBasket />
    </div>
    {/* <Footer /> */}
  </div>
  )
}

export default YourBasketPage