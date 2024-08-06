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
            <div className="mobile-edit">
                <h1 className='mobile-header'>Checkout</h1>
                <div className="card-checkout-order">
                    <div className='checkout-order-container'>
                        <div className="header-checkout-order">
                            <h2>Your Order</h2>
                        </div>
                        {basketItems.map((item, index) => (
                            <div key={index} className="order-list-checkout-page">
                                <div className="orders-list-content-checkout">
                                    <div className='checkout-name-quantity-box'>
                                        <span className='checkout-quanity'>{item.quantity} </span>
                                        <p>x {item.name}</p>
                                    </div>
                                    <div className='checkout-price-box'>
                                        <span className='checkout-price'>${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <hr className="separator" /> */}
                    <div className="total">
                        <p>Total </p>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CheckoutOrders;