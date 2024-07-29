import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Checkout from '../components/CheckOut/Checkout'
import CheckoutOrders from '../components/CheckoutOrders/CheckoutOrderts'

function CheckoutPage() {
  return (
    <div>
       <Sidebar />
       <Checkout/>
       <CheckoutOrders/>
    </div>
  )
}

export default CheckoutPage