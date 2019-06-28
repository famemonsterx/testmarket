import React from 'react'
import ProductData from '../data/products'
import Button from './Button'
import Title from './Title'
import Image from './Image'
import Price from './Price'

const ProductList = () => {
    return (
        <div>
            {ProductData.map((item, index)=>{
                return (
                    <div className="product-list">
                        <Title post={item} />
                        <Button post={item} key={`post-list-key ${index}`} />
                        <Image post={item} />
                        <Price post={item} />
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList