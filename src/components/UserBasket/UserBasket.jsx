import React from 'react'
import redBasket from "../../assets/userBasket/redBasket.png"
import UserBasketItem from '../UserBasketItem/UserBasketItem'
import { Link } from 'react-router-dom'
import "../../style/userBasket.css"
import { useSelector } from 'react-redux';


function UserBasket() {

  const basketItems = useSelector((state) => state.basket.basketItems);
  const totalPrice = useSelector((state) => state.basket.totalPrice);

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
            <span> {basketItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
            <p>items</p>
          </div>
        </div>
      </div>
    </div>

    <div className="userBasketItems2">
      <UserBasketItem />
    </div>

    <Link to="/checkoutPage">
    <div class="checkoutContainer2">
      <button class="checkoutButton2">
        <span class="checkoutText2">Checkout</span>
        <span class="checkoutPrice2">${totalPrice.toFixed(2)}</span>
      </button>
    </div>
    </Link>
  </div>
  )
}

export default UserBasket