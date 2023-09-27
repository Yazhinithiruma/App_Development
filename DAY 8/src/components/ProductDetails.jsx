import React, { useState } from 'react';
import '../assests/css/ProductDetails.css';
import Header1 from './header1';
import Footer from './footer';

function ProductDetails() {
  const [cartItems, setCartItems] = useState([]);
  const products = [
    {
      name: 'Handcrafted Item 1',
      description: 'Description for Handcrafted Item 1.',
      price: 199.99,
      image:
        'https://images.unsplash.com/photo-1574291814206-363acdf2aa79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhhbmQlMjBtYWRlJTIwY3JhZnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
    // {
    //   name: 'Handcrafted Item 2',
    //   description: 'Description for Handcrafted Item 2.',
    //   price: 24.99,
    //   image:
    //     'https://images.unsplash.com/photo-1574291814206-363acdf2aa79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhhbmQlMjBtYWRlJTIwY3JhZnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    // },
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleProceedToCheckout = () => {
    // You can add your navigation logic here.
    // For example, you can use window.location.href to navigate.
    window.location.href = '/payment';
  };

  return (
    <>
      <Header1 />
      <div className="app-container">
        <div className="product-list">
          {products.map((product, index) => (
            <div className="product-details-container" key={index}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Price: Rs{product.price}</p>
                <button
                  className="add-to-cart-button"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart">
          <h2>Your Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <div className="addtocattable-container">
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
                          <button onClick={() => removeFromCart(index)}>
                            Remove
                          </button>
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
              </div>
              <div className="cart-actions">
                <button onClick={handleClearCart}>Clear Cart</button>
                <button onClick={handleProceedToCheckout}>
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetails;
