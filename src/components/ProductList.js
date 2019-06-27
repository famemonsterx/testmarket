import React from 'react'
import ProductData from '../data/products'

const ProductList = () => {
    return (
        <div>
            {ProductData.map((postDetail, index)=>{
                return (
                    <div>
                        <h1>{postDetail.title}</h1>
                        <img width="200px" height="200px" src={postDetail.primaryImageUrl} />
                        <button data-product-id={postDetail.productId}></button>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList