import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ product }) {

    return (
        <Link to={`/products/${product._id}`}>
            <img src={product.images?.[0]} alt="Sneaker image" />
            <h2>{product.name}</h2>
            <h2>{product.price}</h2>
        </Link>
    )
}

export default ProductCard

