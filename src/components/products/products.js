import React, { Component } from 'react';
import classes from './products.module.css';
import blackbag from '../../assets/blackbag.jpg'
import brownbag from '../../assets/brownbag.jpg'
import redbag from '../../assets/redbag.jpg'
import anotherbag from '../../assets/anotherbag.jpg'
import Product from './product/product'
import Modal from '../UI/Modal/Modal'
import OrderConfirmation from './OrderConfirmation/OrderConfirmation';

const prods = [
	{id: 0, product: blackbag, price: 90},
	{id: 1, product: brownbag, price: 100},
	{id: 2, product: redbag, price: 110},
	{id: 3, product: anotherbag, price: 120},
]

const Products = (props) => {
		let modalShow = props.modal;
		let curprod = props.curprod;

		const backdropClicked = () => {
			let tempModal = modalShow;
			if (tempModal === true) {
				tempModal = !tempModal;
				props.backdropClicked(tempModal);
		}}

		const displayDetailsHandler = (curprod) => {
			if (modalShow === false) {
				let tempModal = modalShow;
				tempModal = !tempModal;
				props.displayDetailsHandler(tempModal, curprod)
			}
		}

		return (
			<div className = {classes.productsWrapper}>
				{
					prods.map((i) => {
						return <Product
										img = {i.product}
										price = {i.price}
										addtocart = {() => displayDetailsHandler(i)}/>
					})
				}
				{ modalShow ? <Modal backdropClicked = {backdropClicked}>
					<OrderConfirmation product = {curprod}
						addQuantityHandler = { props.addQuantityHandler }
						removeQuantityHandler = { props.removeQuantityHandler }
						addtocartHandler = { props.addtocart }
						quantity = { props.quantity }
						totalPriceItem = { props.totalPriceItem }
						/>
					</Modal> :
					null }
			</div>
		)}

export default Products;