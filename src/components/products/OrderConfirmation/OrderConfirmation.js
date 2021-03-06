import React, { Component } from 'react';
import classes from './OrderConfirmation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMinus} from '@fortawesome/free-solid-svg-icons';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

const orderConfirmation = (props) => {
		let quantity = props.product.quantity;
		let price = props.product.price

		const addQuantityHandler = () => {
			props.addQuantityHandler()
		}

		const removeQuantityHandler = () => {
			props.removeQuantityHandler()
		}

		// const addtocartHandler = (product) => {
		// 	let fillCart = this.state.cart;
		// 	fillCart = {
		// 		id: product.id,
		// 		totalPrice: this.state.totalPrice,
		// 		quantity: this.state.quantity
		// 	}
		// 	this.setState({cart: fillCart}, () => {console.log(this.state.cart)})
		// }

		const addtocartHandler = (product, quantity) => {
			props.addtocartHandler(product, quantity)
		}

		return (
			<div className = {classes.modalContainer}>
				<img className = {classes.image} src = {props.product.product} alt = ''/>
				<div className = {classes.detailsContainer}>
					<div className = {classes.description}>
						<ul>
							<li style = {{marginLeft: '30px',}}>product detail 1</li>
							<li style = {{marginLeft: '30px',}}>product detail 2</li>
							<li style = {{marginLeft: '30px',}}>product detail 3</li>
						</ul>
					</div>
					<div className = {classes.quantContainer}>
						<div className = {classes.minusContainer} onClick = {() => removeQuantityHandler(quantity, price)}>
							<FontAwesomeIcon icon = {faMinus} />
						</div>
						<div className = {classes.quantity}>{props.quantity}</div>
						<div className = {classes.plusContainer} onClick = {() => addQuantityHandler(quantity, price)}>
							<FontAwesomeIcon icon = {faPlus} />
						</div>
					</div>
					<div>price: {props.totalPriceItem} DH</div>
					<div className = {classes.addtocart} onClick = { () => addtocartHandler(props.product, props.quantity)}>Add To Cart</div>
				</div>
			</div>
		)
	}

export default orderConfirmation;