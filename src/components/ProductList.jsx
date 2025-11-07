import React from 'react';
import ProductCard from './ProductCard';
import styles from '../styles/ProductList.module.css';

const ProductList = ({ products }) => {
  // Check if any products are in stock
  const inStockProducts = products.filter((product) => product.inStock);

  return (
    <>
      {inStockProducts.length > 0 ? (
        <div className={styles.list}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className={styles.noStock}>No products are currently in stock 😔</p>
      )}
    </>
  );
};

export default ProductList;
