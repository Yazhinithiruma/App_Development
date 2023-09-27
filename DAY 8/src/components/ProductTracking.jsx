import React, { useState, useEffect } from 'react';
import '../assests/css/ProductTracking.css'; 
import Header1 from './header1';
import Footer from './footer';

function ProductTracking() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const mockOrders = [
      {
        id: 1,
        orderId: '12345',
        orderDate: '2023-09-15',
        shippingAddress: '123 Main St, Chennai, India',
        status: 'Pending',
      },
      {
        id: 2,
        orderId: '67890',
        orderDate: '2023-09-18',
        shippingAddress: '456 Elm St, Coimbatore, India',
        status: 'Shipped',
      },
      {
        id: 3,
        orderId: '67892',
        orderDate: '2023-09-25',
        shippingAddress: '4 Slm St, Pudukkotta,India',
        status: 'Delivered',
      },
      {
        id: 4,
        orderId: '67893',
        orderDate: '2023-10-25',
        shippingAddress: '4 Slm St, Karur,India',
        status: 'Delivered',
      },
      {
        id: 5,
        orderId: '67823',
        orderDate: '2023-09-05',
        shippingAddress: '4 Slm St, Trippur,India',
        status: 'Pending',
      },
      {
        id: 6,
        orderId: '67890',
        orderDate: '2023-09-30',
        shippingAddress: '4 Slm St, Madurai,India',
        status: 'Shipped',
      },
      {
        id: 7,
        orderId: '67882',
        orderDate: '2023-09-02',
        shippingAddress: '4 Slm St, Salem,India',
        status: 'Delivered',
      },
      {
        id: 8,
        orderId: '67872',
        orderDate: '2023-05-25',
        shippingAddress: '4 Slm St, Dingugal,India',
        status: 'Shipped',
      },
      {
        id: 9,
        orderId: '67812',
        orderDate: '2023-08-12',
        shippingAddress: '4 Slm St, Chennai,India',
        status: 'Delivered',
      },
      {
        id: 10,
        orderId: '67852',
        orderDate: '2023-07-25',
        shippingAddress: '4 Slm St, Pudukkottai,India',
        status: 'Pending',
      },
      
    ];

    setOrders(mockOrders);
  }, []);

  return (
    <>
    <Header1/>
    <div className="product-tracking-container">
      <h2 className="product-tracking-title">ORDER TRACKING</h2>
      <div className="order-list">
        {orders.map((order) => (
          <div className="order" key={order.id}>
            <div className="order-info">
              <p><strong>Order ID:</strong> {order.orderId}</p>
              <p><strong>Date:</strong> {order.orderDate}</p>
              <p><strong>Shipping Address:</strong> {order.shippingAddress}</p>
            </div>
            <div className={`order-status ${order.status.toLowerCase()}`}>
              {order.status}
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default ProductTracking;
