import React, { Component } from 'react';
import classes from './OrderConfirmation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMinus} from '@fortawesome/free-solid-svg-icons';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

const orderConfirmation = () => {
		// state = {
		// 	quantity: 1,
		// 	totalPrice: this.props.product.price,
		// 	cart: null
		// }

		// const addQuantityHandler = () => {
		// 	let newQuantity = this.state.quantity;
		// 	let newPrice = this.state.totalPrice;
		// 	newQuantity += 1;
		// 	newPrice += this.props.product.price;
		// 	this.setState({quantity: newQuantity, totalPrice: newPrice})
		// }
		
		const addQuantityHandler = (prodId) => {
			// create prod if non existant
		}

		const removeQuantityHandler = () => {
			let newQuantity = this.state.quantity;
			let newPrice = this.state.totalPrice;
			if (this.state.quantity > 1) {
				newQuantity -= 1;
				newPrice -= this.props.product.price;
				this.setState({quantity: newQuantity, totalPrice: newPrice})
			}
		}

		const addtocartHandler = (product) => {
			let fillCart = this.state.cart;
			fillCart = {
				id: product.id,
				totalPrice: this.state.totalPrice,
				quantity: this.state.quantity
			}
			this.setState({cart: fillCart}, () => {console.log(this.state.cart)})
		}

		return (
			<div className = {classes.modalContainer}>
				<img className = {classes.image} src = {this.props.product.product} alt = ''/>
				<div className = {classes.detailsContainer}>
					<div className = {classes.description}>
						<ul >
							<li style = {{marginLeft: '30px',}}>product detail 1</li>
							<li style = {{marginLeft: '30px',}}>product detail 2</li>
							<li style = {{marginLeft: '30px',}}>product detail 3</li>
						</ul>
					</div>
					<div className = {classes.quantContainer}>
						<div className = {classes.minusContainer} onClick = {removeQuantityHandler}>
							<FontAwesomeIcon icon = {faMinus} />
						</div>
						<div className = {classes.quantity}>{this.state.quantity}</div>
						<div className = {classes.plusContainer} onClick = {addQuantityHandler}>
							<FontAwesomeIcon icon = {faPlus} />
						</div>
					</div>
					<div>price: {this.state.totalPrice} DH</div>
					<div className = {classes.addtocart} onClick = { () => addtocartHandler(this.props.product)}>Add To Cart</div>
				</div>
			</div>
		)
	}

export default orderConfirmation;