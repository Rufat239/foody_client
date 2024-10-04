import React from 'react';
import { useSelector } from 'react-redux';
import Orders from '../components/Orders/Orders';
import Sidebar from '../components/Sidebar/Sidebar';

const OrdersPage = () => {
  const orders = useSelector((state) => state.order.orders);

  return (
    <div style={{ display: "flex", marginTop: "2%", columnGap: "2%", marginBottom: "17%" }}>
      <Sidebar />
      <Orders orders={orders} />
    </div>
  );
};

export default OrdersPage;

