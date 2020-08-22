import React, { Component } from 'react';
import Products from '../../components/products/products';
import Cart from '../../components/Cart/Cart';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../../hoc/Aux/Aux'
import blackbag from '../../assets/blackbag.jpg'
import brownbag from '../../assets/brownbag.jpg'
import redbag from '../../assets/redbag.jpg'
import anotherbag from '../../assets/anotherbag.jpg'

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
			totalCartPrice: 0
		},
		quantity: 1,
		totalPriceItem: 0
	}

	backdropClicked = (modalState) => {
		this.setState({modalShow: modalState, quantity: 0, totalCartPrice: 0});
	}

	// createNewProd = (product) => {
	// 	let newProd = {
	// 		id: product.id,
	// 		price: product.price,
	// 		quantity: 1
	// 	}
	// 	return newProd;
	// }

	addQuantityHandler = (newQuantity, newPrice) => {
		this.setState({quantity: newQuantity, price: newPrice})
	}

	removeQuantityHandler = (newQuantity, newPrice) => {
		this.setState({quantity: newQuantity, price: newPrice})
	}

	displayDetailsHandler = (modalState, curprod) => {
		this.setState({modalShow: modalState, currentProduct: curprod})
	}

	addtocartHandler = (curprod, quantity) => {
		curprod.quantity = quantity;
		if (this.state.modalShow === true) {
			let modalState = this.state.modalShow;
			modalState = !modalState;
			this.setState({modalShow: modalState,
					currentProduct: curprod})
		}
		this.setState(prevState => ({
			cart: {
				...prevState.cart,
				products: [...prevState.cart.products, curprod],
				totalPriceItem: (curprod.price * quantity)
			},
			quantity: 0,
			totalPriceItem: 0
			}))
	}

	render () {
		const modshow = this.state.modalShow;
		const currentprod = this.state.currentProduct;
		return (
			<Aux>
				<Products
					modal = {modshow}
					curprod = {currentprod}
					backdropClicked = { this.backdropClicked }
					addtocart = { this.addtocartHandler }
					displayDetailsHandler = { this.displayDetailsHandler }
					addQuantityHandler = { this.addQuantityHandler }
					removeQuantityHandler = { this.removeQuantityHandler }
				/>
				{/* <Modal><Cart /></Modal> */}
			</Aux>
		)
	}
}

export default ProdManagement;