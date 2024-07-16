import React from 'react';

const ProductList = ({ products, onProductSelect }) => {
  const handleSelect = (product) => {
    onProductSelect(product);
  };

  return (
    <div>
      <h3>Discounted Products</h3>
      <ul>
        {products.filter(product => product.discount > 60).map(product => (
          <li key={product.productId} onClick={() => handleSelect(product)}>
            {product.productName}
          </li>
        ))}
      </ul>

      <h3>New Releases</h3>
      <ul>
        {products.filter(product => product.releaseType === 'New').map(product => (
          <li key={product.productId} onClick={() => handleSelect(product)}>
            {product.productName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
