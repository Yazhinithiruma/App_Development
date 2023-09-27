import React, { useState } from 'react';
import '../assests/css/addtocart.css';
import logo from '../assests/css/logo.jpg';

function CartPage() {
  // Initialize the cart items with an empty array
  const [cartItems, setCartItems] = useState([]);

  // Function to remove an item from the cart
  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  // Function to calculate the total price of items in the cart
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };
  

  return (
    <>
    <div className='cartlogoimage'>
    <img src={logo} alt="logo"/>
  </div>
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2">Total:</td>
              <td>${calculateTotal().toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
      )}
      <div className="cart-actions">
        <button onClick={() => setCartItems([])}>Clear Cart</button>
        <button>Proceed to Checkout</button>
      </div>
    </div>
    </>
  );
}

export default CartPage;
