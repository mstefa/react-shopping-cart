import React, { Component } from 'react'

export default class Products extends Component {
    render() {
        return (
            <div>
                <ul className='products'>
                    {this.props.products.map(product =>(
                        <li key={product._id}>
                            <a href={'#' + product.id}>
                                <img src={product.image} alt = {product.title}></img>
                                <p>
                                    {product.title}
                                </p>
                            </a>
                            <div>
                                {product.price}
                            </div>
                            <button className='button primary'>Add To Cart</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
