import React, { useEffect, useState } from "react"

export const ProductList = () => {
    const [products, changeProduct] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/Products?_expand=productType")
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
                        return <p key={`product--${product.id}`}>{product.name} is a {product.productType.category} and costs $ {product.price}.</p>
                    }
                )
            }
        </> 
    )

}