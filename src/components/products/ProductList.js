import React, { useEffect, useState } from "react"

export const ProductList = () => {
    const [products, changeProduct] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/Products")
                .then(res => res.json())
                .then ((productData) => {
                    changeProduct(productData)
                })
        },
        []
    )

    return (
        <>
            {
                products.map(
                    (product) => {
                        return <p key={`product--${product.id}`}>The ID of {product.name} is {product.id} and type is {product.productTypeId}. It costs {product.price}.</p>
                    }
                )
            }
        </> 
    )

}