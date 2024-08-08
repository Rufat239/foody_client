import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import UserBasket from '../components/UserBasket/UserBasket'
import EmptyBasket from '../components/EmptyBasket/EmptyBasket'
import { useSelector } from 'react-redux';


function YourBasketPage() {
  const basketItems = useSelector(state => state.basket.basketItems);
  return (
    <div>
    <div style={{ display: "flex", marginTop: "2%", columnGap: "2%" }}>
      <Sidebar />
      {basketItems.length>0 ?(
 <UserBasket />
) : (
  <EmptyBasket />
)}
    </div>
    {/* <Footer /> */}
  </div>
  )
}

export default YourBasketPage