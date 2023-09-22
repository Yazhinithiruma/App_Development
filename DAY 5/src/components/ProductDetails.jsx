import React, { useState } from 'react';
import '../assests/css/ProductDetails.css';

function ProductDetails(props) {
  const { product } = props;

  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const addToCart = () => {
    setIsAddedToCart(true);
  };

  return (
    <div className="product-details-container">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        {isAddedToCart ? (
          <button className="added-to-cart-button" disabled>
            Added to Cart
          </button>
        ) : (
          <button className="add-to-cart-button" onClick={addToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

const product = {
  name: 'Handcrafted Item',
  description: 'A beautiful handcrafted product description goes here.',
  price: 19.99,
  image: 'https://images.unsplash.com/photo-1574291814206-363acdf2aa79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhhbmQlMjBtYWRlJTIwY3JhZnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
};

function App() {
  return (
    <div className="App">
      <ProductDetails product={product} />
    </div>
  );
}

export default App;
