import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder } from '../Redux/actions/orderActions';
import '../../style/checkout.css'
let orderIdCounter = Math.floor(Math.random() * 5000);
function generateId() {
    return ++orderIdCounter;
}
function Checkout({ onOrderComplete }) {
    const dispatch = useDispatch();
    const basketItems = useSelector(state => state.basket.basketItems);
    const totalPrice = useSelector(state => state.basket.totalPrice);
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [error, setError] = useState('');
    const handleCheckout = () => {
        if (!paymentMethod || !deliveryAddress || !contactNumber) {
            setError('Incomplete information detected. Fill out all fields to continue.');
            return;
        }
        setError('');
        const newOrder = {
            deliveryAddress,
            contactNumber,
            paymentMethod,
            id: generateId(),
            time: new Date().toLocaleString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            }),
            totalPrice,
            items: basketItems
        };
        dispatch(addOrder(newOrder));
        onOrderComplete(newOrder);
    };
    return (
        <div>
            <div className='mobile-edit'>
                <div className="card-checkout-page">
                    <h1 className='checkout-container-heading'>Checkout</h1>
                    <label className='heading-of-inputs' htmlFor="">Delivery Address</label>
                    <input type="text" className="input-checkout-page" placeholder='Enter your address' value={deliveryAddress} onChange={(e) => setDeliveryAddress(e.target.value)} />
                    <label className='heading-of-inputs' htmlFor="">Contact Number</label>
                    <input type="text" className="input-checkout-page" placeholder='Enter your phone number' value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
                    <p c></p>
                    <label className='heading-of-inputs' htmlFor="">Payment Method</label>
                    <div className="radio-group-checkout">
                        <div className='payment-checkout'>
                            <input type="radio" name="payment" value="Cash on Delivery" checked={paymentMethod === 'Cash on Delivery'} onChange={() => setPaymentMethod('Cash on Delivery')} />
                            <p>Pay at the door</p>
                        </div>
                        <div className='payment-checkout'>
                            <input type="radio" name="payment" value="Pay by Card" checked={paymentMethod === 'Pay by Card'} onChange={() => setPaymentMethod('Pay by Card')} />
                            <p>Pay the door by credit card</p>
                        </div>
                    </div>
                    <button className="checkout-button-checkout-page" onClick={handleCheckout}>Checkout</button>
                    {error && <p className='checkout-page-error'>{error}</p>}
                </div>
            </div>
        </div>
    );
}
export default Checkout;