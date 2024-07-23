import React from 'react'
import Orders from '../components/Orders/Orders'
import Sidebar from '../components/Sidebar/Sidebar'

function OrdersPage() {
  return (
    <div style={{ display: "flex", marginTop: "2%", columnGap: "2%" }}>
      <Sidebar />
      <Orders />
    </div>
  )
}

export default OrdersPage