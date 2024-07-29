import React from 'react'
import Style from '../../style/checkout.css'

function Checkout() {
    return (
        <div>
            <div className="card">
                <h1>Checkout</h1>
                <p>Delivery Address</p>
                <input type="text" className="input" />
                <p>Contact Number</p>
                <input type="text" className="input" />
                <p>Payment Method</p>
                <div className="radio-group">
                    <label>
                        <input type="radio" name="payment" value="payAtDoor" />
                        Pay at the door
                    </label>
                    <label>
                        <input type="radio" name="payment" value="payByCard" />
                        Pay the door by credit card
                    </label>
                </div>
                <button className="checkout-button">Checkout</button>
            </div>
        </div>
    )
}

export default Checkout