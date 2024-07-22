import React from 'react'
import redBasket from "../../assets/userBasket/redBasket.png"
import UserBasketItem from '../UserBasketItem/UserBasketItem'
import "../../style/userBasket.css"


function UserBasket() {
  return (
    <div className="userBasketContainer2">
    <div className="userBasketHeadPad2">
      <div className="userBasketHead2">
        <h2>Your Basket</h2>

        <div className="itemQuantity2">
          <figure>
            <img src={redBasket} alt=""/>
          </figure>

          <div className="quantityItems2">
            <span>3</span>
            <p>items</p>
          </div>
        </div>
      </div>
    </div>

    <div className="userBasketItems2">
      <UserBasketItem />
    </div>

    <div class="checkoutContainer2">
      <button class="checkoutButton2">
        <span class="checkoutText2">Checkout</span>
        <span class="checkoutPrice2">$37.40</span>
      </button>
    </div>
  </div>
  )
}

export default UserBasket