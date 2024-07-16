import React from 'react'
import { Container } from 'react-bootstrap';

export const ProductList = ({ products }) => {
    console.log(products, "products");

    const filterDiscountProduct = products.filter((product) => product.discount >= 60)
    console.log(filterDiscountProduct);
    const filterReleasedType = products.filter((product) => product.releaseType === "New")
    console.log(filterReleasedType);

    return (
        <>
            <Container>
                <div>
                    <h3>Discounted Products</h3>
                    <ul>
                        {filterDiscountProduct.map((product) => <li>{product.productName}</li>)}
                    </ul>
                </div>
                <div>
                    <h3>Released Products</h3>
                    <ul>
                        {filterReleasedType.map((product) => <li>{product.releaseType}</li>)}
                    </ul>
                </div>
            </Container>
        </>
    )
}
