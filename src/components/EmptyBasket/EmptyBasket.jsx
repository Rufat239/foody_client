import React from "react";
import iconBasket from "../../assets/userBasket/iconBasket.svg";
import emptyBasket from "../../assets/userBasket/emptyBasket.svg";
import "../../style/emptyBasket.css"

function EmptyBasket() {
  return (
    <div className="userEmptyBasketContainer2">
      <div className="userEmptyBasketHeadPad2">
     
        <div className="itemQuantityEmpty2">
          <figure>
            <img src={iconBasket} alt="" />
          </figure>

          <div className="quantityItemsEmpty2">
            <span>0</span>
            <p>item</p>
          </div>
        </div>
        {/* </div> */}
      </div>

      <div className="userEmptyBasketItems2">
       
        <figure>
          <img src={emptyBasket} alt="" />
        </figure>

          <h2 className="firstEmptyText">Opps!</h2>
          <h2 className="secondEmptyText">Basket empty</h2>
      </div>

      
      <div className="checkoutEmptyContainer2">
        <button className="checkoutEmptyButton2">
          <span className="checkoutEmptyText2">Checkout</span>
          <span className="checkoutEmptyPrice2">$0.00</span>
        </button>
      </div>
      
    </div>
   
  );
};

export default EmptyBasket;
