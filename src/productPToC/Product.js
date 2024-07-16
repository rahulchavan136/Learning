import React from 'react'
import { ProductList } from './ProductList'
import { Container } from 'react-bootstrap'

export const Product = ({ products }) => {
    return (
        <Container className='mt-t text-center'><h1>Product Details</h1>
            <ProductList products={products} />
        </Container>
    )
}
