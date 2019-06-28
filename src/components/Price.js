import React, {Component} from 'react'

class Price extends Component  {
    constructor (props) {
        super(props)
        const defaultPrice = [props.post.priceGoldAlt, props.post.priceRetailAlt]
        const origPrice = [props.post.priceGold, props.post.priceRetail]
        this.changePrice = this.changePrice.bind(this)
        this.changeOrigPrice = this.changeOrigPrice.bind(this)
        this.state = {
            price: defaultPrice,
            price1: defaultPrice,
            price2: origPrice
        }
    }
    changePrice(e) {
        e.preventDefault()
        const { price1 } = this.state
        this.setState({
            price: price1
        })
    }
    changeOrigPrice(e) {
        e.preventDefault()
        const { price2 } = this.state
        this.setState({
            price: price2
        })
    }
    render () {
        const {price} = this.state
        return (
            <div className="prices">
                <p className="priceText" onClick={this.changePrice} >За м.кв</p>
                <p className="priceText" onClick={this.changeOrigPrice}>За упаковку</p>
                <p className="priceNum">{ price }</p>
                <p className="priceNum">{ price }</p>
            </div>
        )
    }
}

export default Price