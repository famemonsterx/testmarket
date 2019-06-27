import React from 'react'

const Button = (props) => {
    return (
        <button className="btn-orange" data-product-id={props.post.productId}>в корзину</button>
    )
}

export default Button