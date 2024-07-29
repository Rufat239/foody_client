import React from 'react'
import Style from '../../style/checkoutorder.css'

function CheckoutOrderts() {
    return (
        <div>
            <div className="cards">
                <div className="header">
                    <h2>Your Order</h2>
                </div>
                <div className="order-list">
                    <p>1 x Papa John's Pizza Restaurant - $8.00</p>
                    <p>2 x Papa Coffee - $6.00</p>
                    <p>2 x Papa Cola - $3.80</p>
                    <p>2 x Papa Sprite - $7.10</p>
                </div>
                <hr className="separator" />
                <div className="total">
                    <p>Total</p>
                </div>
            </div>
        </div>
    )
}

export default CheckoutOrderts