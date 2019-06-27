import React from 'react'
import ProductData from '../data/products'
import Button from './Button'
import Title from './Title'

const ProductList = () => {
    return (
        <div>
            {ProductData.map((item, index)=>{
                return (
                    <div>
                        <Title post={item} />
                      <Button post={item} key={`post-list-key ${index}`} />
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList