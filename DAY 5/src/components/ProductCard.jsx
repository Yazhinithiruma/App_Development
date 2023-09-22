import React from 'react';
import '../assests/css/ProductCard.css';

const sampleProducts = [
  {
    "imageUrl": "https://images.unsplash.com/photo-1574291814206-363acdf2aa79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhhbmQlMjBtYWRlJTIwY3JhZnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "title": "Handcrafted Wooden Jewelry Box",
    "description": "Beautiful wooden jewelry box with intricate carvings.",
    "color": "Mahogany",
    "discountedPrice": 89.99,
    "price": 109.99,
    "discountPercent": 18,
  },
  {
    "imageUrl": "https://plus.unsplash.com/premium_photo-1673958391148-deba7b5b57bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFuZCUyMG1hZGUlMjBjcmFmdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "title": "Handwoven Multicolored Blanket",
    "description": "Soft and cozy blanket handwoven with vibrant colors.",
    "color": "Multicolor",
    "discountedPrice": 39.99,
    "price": 49.99,
    "discountPercent": 20,
  },
  {
    "imageUrl": "https://images.unsplash.com/photo-1574291814206-363acdf2aa79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhhbmQlMjBtYWRlJTIwY3JhZnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "title": "Hand-painted Ceramic Mug Set",
    "description": "Set of four ceramic mugs with unique hand-painted designs.",
    "color": "Assorted",
    "discountedPrice": 24.99,
    "price": 29.99,
    "discountPercent": 17,
  },
  {
    "imageUrl": "https://plus.unsplash.com/premium_photo-1673958391148-deba7b5b57bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFuZCUyMG1hZGUlMjBjcmFmdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "title": "Handmade Leather Journal",
    "description": "A rustic leather-bound journal with handmade paper pages.",
    "color": "Brown",
    "discountedPrice": 19.99,
    "price": 24.99,
    "discountPercent": 20,
  },
  {
    "imageUrl": "https://images.unsplash.com/photo-1574291814206-363acdf2aa79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhhbmQlMjBtYWRlJTIwY3JhZnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "title": "Handcrafted Wooden Serving Tray",
    "description": "Elegant wooden serving tray with intricate inlays.",
    "color": "Walnut",
    "discountedPrice": 69.99,
    "price": 89.99,
    "discountPercent": 22,
  },
  {
    "imageUrl": "https://plus.unsplash.com/premium_photo-1673958391148-deba7b5b57bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFuZCUyMG1hZGUlMjBjcmFmdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "title": "Hand-Embroidered Pillow Covers",
    "description": "Set of two decorative pillow covers with intricate hand embroidery.",
    "color": "Blue",
    "discountedPrice": 29.99,
    "price": 39.99,
    "discountPercent": 25,
  },
  {
    "imageUrl": "https://images.unsplash.com/photo-1574291814206-363acdf2aa79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhhbmQlMjBtYWRlJTIwY3JhZnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "title": "Handmade Beaded Earrings",
    "description": "Elegant beaded earrings with a unique design.",
    "color": "Gold",
    "discountedPrice": 14.99,
    "price": 19.99,
    "discountPercent": 25,
  },
  {
    "imageUrl": "https://plus.unsplash.com/premium_photo-1673958391148-deba7b5b57bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFuZCUyMG1hZGUlMjBjcmFmdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "title": "Handwoven Basket",
    "description": "Versatile handwoven basket made from natural materials.",
    "color": "Natural",
    "discountedPrice": 34.99,
    "price": 44.99,
    "discountPercent": 22,
  },
  {
    "imageUrl": "https://images.unsplash.com/photo-1574291814206-363acdf2aa79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhhbmQlMjBtYWRlJTIwY3JhZnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "title": "Hand-painted Ceramic Plant Pot",
    "description": "Artistic ceramic plant pot with colorful hand-painted designs.",
    "color": "Green",
    "discountedPrice": 19.99,
    "price": 24.99,
    "discountPercent": 20,
  },
  {
    "imageUrl": "https://plus.unsplash.com/premium_photo-1673958391148-deba7b5b57bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFuZCUyMG1hZGUlMjBjcmFmdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "title": "Handmade Soap Set",
    "description": "A set of natural handmade soaps with various scents.",
    "color": "Assorted",
    "discountedPrice": 12.99,
    "price": 16.99,
    "discountPercent": 23,
  },
];

const ProductCard = () => {
  return (
    <div className='productCardContainer'>
      {sampleProducts.map((product, index) => (
        <div className='productCard' key={index}>
          <div className='productImage'>
            <img src={product.imageUrl} alt='' />
          </div>
          <div className='textPart'>
            <div>
              <p className='productBrand'>{product.brand}</p>
              <p className='productTitle'>{product.title}</p>
            </div>
            <div className='priceInfo'>
              <p className='discountedPrice'>₹{product.discountedPrice}</p>
              <p className='originalPrice'>₹{product.price}</p>
              <p className='discountPercentage'>{product.discountPercent}% off</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;