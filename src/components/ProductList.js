import React from 'react'
import ProductData from '../data/products'

const ProductList = () => {
    return (
        <div>
            {ProductData.map((postDetail, index)=>{
                return <h1>{postDetail.title}</h1>
            })}
        </div>
    )
}

export default ProductList