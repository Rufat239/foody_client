import React from 'react'
import 'animate.css';
import orderReceivedImg from '../../assets/checkoutImages/Vector.png'
import '../../style/orderReceived.css'
function OrderReceived() {
  return (
    <div className='all-order-receive-component'>
      <div className='order-received-container'>
        <div className='order-received-image-box'>
          <img className='vector-image' src={orderReceivedImg} alt="" />
        </div>
        <h1>Your order has been received</h1>
      </div>
    </div>
  )
}
export default OrderReceived