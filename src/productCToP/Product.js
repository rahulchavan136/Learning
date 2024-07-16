import React from 'react';
import ProductList from './ProductList';

const products = [
  { productId: 1, productName: 'Product A', releaseType: 'New', discount: 70 },
  { productId: 2, productName: 'Product B', releaseType: 'Old', discount: 50 },
  { productId: 3, productName: 'Product C', releaseType: 'New', discount: 80 },
];

const Product = ({ onProductSelect }) => {
  return (
    <div>
      <h2>All Products</h2>
      <ProductList products={products} onProductSelect={onProductSelect} />
    </div>
  );
};

export default Product;
