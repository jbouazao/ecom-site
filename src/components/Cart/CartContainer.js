import React, { Component } from 'react';
import Cart from './Cart';
import classes from './CartContainer.module.css'

class CartContainer extends Component {
	cartItems = this.props.cart.products

	render () {
		return (
			<div className = {classes.cartContainer}>
				{/* {console.log(this.cartItems)} */}
				{this.cartItems.map(item => {
					return <Cart id = {item.id}
						totalItemPrice = { item.price * item.quantity }
						quantity = {item.quantity}
						addQuantityCartHandler = { () => this.props.addQuantityCartHandler(item.id) }
						removeQuantityCartHandler = { () => this.props.removeQuantityCartHandler(item.id) }
						/>
				})
				}
				<p className = {classes.totalPrice}>{this.props.cart.totalCartPrice}.00 Dh</p>
			</div>
		)
	}
}

export default CartContainer;