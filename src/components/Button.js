import React, {Component} from 'react'

class Button extends Component {
    constructor (props) {
        super(props)
        this.plusValue = this.plusValue.bind(this)
        this.minusValue = this.minusValue.bind(this)
        this.state = {
            value: 1
        }
    }
    plusValue (event) {
        event.preventDefault()
        const {value} = this.state
        this.setState({
            value: value+1
        })
    }
    minusValue(event) {
        event.preventDefault()
        const {value} = this.state
        this.setState({
            value: value === 1 ? value : value-1
        })
    }
    render () {
        const {post} = this.props
        const {value} = this.state
        return (
            <div className="buttonsGroup">
                <span className="default-counter">{ value }</span>
                <button className="add-button" onClick={this.plusValue} >+</button>
                <button className="remove-button" onClick={this.minusValue}>-</button>
                <button className="btn-orange" data-product-id={post.productId}>в корзину</button>
            </div>

        )
    }
}

export default Button