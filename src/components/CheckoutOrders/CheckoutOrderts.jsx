import React from 'react';
import Style from '../../style/checkoutorder.css';
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, removeFromBasket } from '../Redux/actions/basketActions';

function CheckoutOrders() {
    const dispatch = useDispatch();
    const basketItems = useSelector(state => state.basket.basketItems);
    const totalPrice = useSelector(state => state.basket.totalPrice);
    return (
        <div>
            <div className="cards">
                <div className="header">
                    <h2>Your Order</h2>
                </div>
                {basketItems.map((item, index) => (
                    <div key={index} className="order-list">
                        <div className="orders-lists">
                            <span className='sapan'>{item.quantity} x</span>
                            <p>{item.name}</p>
                            <span className='span'>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    </div>
                ))}
                <hr className="separator" />
                <div className="total">
                    <p>Total <span>${totalPrice}</span></p>
                </div>
            </div>

        </div>
    );
}

export default CheckoutOrders;
