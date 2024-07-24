import React from 'react'
import delivery from '../../assets/howworksImages/delivery.svg'
import '../../style/howworks.css'

function HowWorks() {
  return (
    <div className="delivery-container">
       <div className='delivery-heading'>
        <h1>How it works</h1>
        <p>
          Delivery may be extended during sale periods. Please refer to the checkout page for an updated estimate for your location. Kindly note that once you have placed an order, it is no longer possible to modify your order. Taxes and duties are included in all product prices. It is possible to place an order with shipment to a different address than your home or billing address when paying with a credit card. Please note that Klarna payments require that your order is shipped to your registered home address.
        </p>
       </div>
        <div className="image-container">
          <div className="background"></div>
          <img src={delivery} alt="Delivery Services" className='delivery-image' />
        </div>
      </div>
  )
}

export default HowWorks