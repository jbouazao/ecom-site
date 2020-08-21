import React, { Component } from 'react';
import Products from '../../components/products/products';
import Cart from '../../components/Cart/Cart';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../../hoc/Aux/Aux'

class ProdManagement extends Component {
	prods = [
		{id: 1, product: blackbag, price: 90},
		{id: 2, product: brownbag, price: 100},
		{id: 3, product: redbag, price: 110},
		{id: 4, product: anotherbag, price: 120},
]
	state = {
		modalShow: false,
		currentProduct: null,
		cart: {
			products: [],
			totalPrice: 0
		},
	}

	modalHandler = (modalState) => {
		this.setState({modalShow: modalState})
	}

	createNewProd = (product) => {
		let newProd = {
			id: product.id,
			price: product.price,
		}
	}

	addtocartHandler = (modalState, curprod) => {
		this.setState({modalShow: modalState, currentProduct: curprod})
	}

	render () {
		const modshow = this.state.modalShow;
		const currentprod = this.state.currentProduct;
		return (
			<Aux>
				<Products
					modal = {modshow}
					curprod = {currentprod}
					modalHandler = { this.modalHandler }
					addtocart = { this.addtocartHandler }
				/>
				{/* <Modal><Cart /></Modal> */}
			</Aux>
		)
	}
}

export default ProdManagement;