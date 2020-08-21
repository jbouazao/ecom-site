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

		const backdropHandler = () => {
			let tempModal = modalShow;
			if (tempModal === true) {
				tempModal = !tempModal;
				// this.setState({modalShow: tempModal})
				props.modalHandler(tempModal);
			}}

		const addtocartHandler = (currentProd) => {
			if (modalShow === false) {
				let tempModal = modalShow;
				tempModal = !tempModal;
				console.log(tempModal)
				// this.setState({modalShow: tempModal, currentProduct: currentProd})
				props.addtocart(tempModal, currentProd)
			}
		}

		return (
			<div className = {classes.productsWrapper}>
				{
					prods.map((i) => {
						return <Product
										img = {i.product}
										price = {i.price}
										addtocart = {() => addtocartHandler(i)}/>
					})
				}
				{ modalShow ? <Modal backdropClicked = {backdropHandler}>
					<OrderConfirmation product = {curprod}/>
					</Modal> :
					null }
			</div>
		)}

export default Products;