// src/App.js (or src/App.jsx)

import React from 'react';
import ProductList from './components/ProductList'; // adjust path if needed

function App() {
  // Example data
  const products = [
    { id: 1, name: 'Laptop', price: 999.99, inStock: true },
    { id: 2, name: 'Headphones', price: 199.99, inStock: false },
    { id: 3, name: 'Keyboard', price: 89.99, inStock: true },
  ];

  return (
    <div>
      <h1>Product Store</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;
