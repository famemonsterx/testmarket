import React, {Component} from 'react'

class Price extends Component  {
    constructor (props) {
        super(props)
        const defaultPrice = [props.post.priceGoldAlt, props.post.priceRetailAlt]
        const origPrice = [props.post.priceGold, props.post.priceRetail]
        this.changePrice = this.changePrice.bind(this)
        this.changeOrigPrice = this.changeOrigPrice.bind(this)
        this.state = {
            price: defaultPrice
        }
    }
    changePrice(e) {
        e.preventDefault()
        const {origPrice} = this.state
        this.setState({
            price: origPrice
        })
    }
    changeOrigPrice(e) {
        e.preventDefault()
        const {defaultPrice} = this.state
        this.setState({
            price: defaultPrice
        })
    }
    render () {
        const {price} = this.state
        return (
            <div className="prices">
                <a className="priceText" onClick={this.changePrice}>За м.кв</a>
                <a className="priceText" onClick={this.changeOrigPrice}>За упаковку</a>
                <span className="priceNum">{ price }</span>
                <span className="priceNum">{ price }</span>
            </div>
        )
    }
}

export default Price