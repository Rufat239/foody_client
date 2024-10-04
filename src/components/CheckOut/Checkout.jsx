import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder } from '../Redux/actions/orderActions';
import { clearBasket } from '../Redux/actions/basketActions';
import '../../style/checkout.css'
import { v4 } from 'uuid';
import postCheckoutDatas from '../../service/checkout/postCheckout';


function Checkout({ onOrderComplete }) {
    const dispatch = useDispatch();
    const basketItems = useSelector(state => state.basket.basketItems);
    const totalPrice = useSelector(state => state.basket.totalPrice);
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [error, setError] = useState('');

    const handleCheckout = () => {
        if (basketItems.length === 0) {
            setError('Your basket is empty. Please add items to proceed.');
            return;
        }


        if (!paymentMethod || !deliveryAddress || !contactNumber) {
            setError('Incomplete information detected. Fill out all fields to continue.');

            return;
        }
        setError('');
        const newOrder = {
            customerID: JSON.parse(localStorage.getItem("userInfo")).localId,
            deliveryAddress,
            contactNumber,
            paymentMethod,
            id: v4().replace(/-/g, ""),
            time: new Date().toLocaleString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            }),
            totalPrice,
            items: basketItems
        };
        postCheckoutDatas(newOrder)
        dispatch(addOrder(newOrder));
        dispatch(clearBasket())
        onOrderComplete(newOrder);

    };

    const validateContactNumber = (value) => {
        const regex = /^[0-9\s+()-]*$/; 
        if (regex.test(value) || value === '') {
            setContactNumber(value);
            
        } else {
            console.log("error");
        }
    };

    
    return (
        <div>
            <div className='mobile-edit'>
                <div className="card-checkout-page">
                    <h1 className='checkout-container-heading'>Checkout</h1>
                    <label className='heading-of-inputs' htmlFor="">Delivery Address</label>
                    <input type="text" className="input-checkout-page" placeholder='Enter your address' value={deliveryAddress} onChange={(e) => setDeliveryAddress(e.target.value)} />
                    <label className='heading-of-inputs' htmlFor="">Contact Number</label>
                    <input type="text" className="input-checkout-page" placeholder='Enter your phone number' value={contactNumber}
                        onChange={(e) => validateContactNumber(e.target.value)}/>
                    <label className='heading-of-inputs' htmlFor="">Payment Method</label>
                    <div className="radio-group-checkout">
                        <div
                            className={`payment-checkout ${paymentMethod === 'Cash on Delivery' ? 'active' : ''}`}
                            onClick={() => setPaymentMethod('Cash on Delivery')}
                        >
                            <input
                                type="radio"
                                name="payment"
                                value="Cash on Delivery"
                                checked={paymentMethod === 'Cash on Delivery'}
                                readOnly
                            />
                            <p>Pay at the door</p>
                        </div>
                        <div
                            className={`payment-checkout ${paymentMethod === 'Pay by Card' ? 'active' : ''}`}
                            onClick={() => setPaymentMethod('Pay by Card')}
                        >
                            <input
                                type="radio"
                                name="payment"
                                value="Pay by Card"
                                checked={paymentMethod === 'Pay by Card'}
                                readOnly
                            />
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