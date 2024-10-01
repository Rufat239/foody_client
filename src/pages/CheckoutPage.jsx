import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Checkout from '../components/CheckOut/Checkout';
import CheckoutOrders from '../components/CheckoutOrders/CheckoutOrderts';
import OrderReceived from '../components/OrderReceived/OrderReceived';
function CheckoutPage() {
  const [orderReceived, setOrderReceived] = useState(false);
  const [error, setError] = useState('');
  const handleOrderComplete = (orderDetails) => {

    setOrderReceived(true);

  };
  return (
    <div style={{ display: "flex", marginTop: "2%", columnGap: "2%", marginBottom: "17%" }} >
      <Sidebar />
      {!orderReceived && (
        <>
          <Checkout onOrderComplete={handleOrderComplete} />
          <CheckoutOrders />
        </>
      )}
      {orderReceived && <OrderReceived />}
    </div>
  );
}
export default CheckoutPage;