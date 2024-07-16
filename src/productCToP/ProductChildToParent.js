import React, { useState } from 'react';
import Product from './Product';
import { Container } from 'react-bootstrap';

const ProductChildToParent = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };
  return (
    <Container className='mt-5'>
      <h1>Product List</h1>
      <Product onProductSelect={handleProductSelect} />
    </Container>  
  );
};

export default ProductChildToParent;
