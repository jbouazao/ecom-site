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
		this.setState({modalShow: modalState, quantity: 1, totalCartPrice: 0});
	}

	addQuantityHandler = () => {
		let newQuantity = this.state.quantity + 1;
		let newPrice = this.state.totalPriceItem + this.state.currentProduct.price;

		this.setState({quantity: newQuantity, totalPriceItem: newPrice})
	}

	removeQuantityHandler = () => {
		if (this.state.quantity > 1) {
			let newQuantity = this.state.quantity - 1;
			let newPrice = this.state.totalPriceItem - this.state.currentProduct.price;
			this.setState({quantity: newQuantity, totalPriceItem: newPrice})
		}
	}

	displayDetailsHandler = (modalState, curprod) => {
		this.setState({modalShow: modalState, currentProduct: curprod, totalPriceItem: curprod.price})
	}

	addtocartHandler = (curprod, quantity) => {
		curprod.quantity = quantity;
		if (this.state.modalShow === true) {
			let modalState = this.state.modalShow;
			modalState = !modalState;
			this.setState({modalShow: modalState,
					currentProduct: curprod})
		}
		// this.setState(prevState => ({
		// 	cart: {
		// 		...prevState.cart,
		// 		products: [...prevState.cart.products, curprod],
		// 		totalPriceItem: (curprod.price * quantity)
		// 	},
		// 	quantity: 1,
		// 	totalPriceItem: 0
		// 	}))
		let updatedProducts = [...this.state.cart.products, curprod]
		let updatedCart = {...this.state.cart, products: updatedProducts, totalCartPrice: this.state.cart.totalCartPrice + (curprod.price * this.state.quantity)};
		// console.log('what\'s up', curprod.price, this.state.quantity, this.state.)
		this.setState({cart: updatedCart, quantity: 1, totalPriceItem: curprod.price})
	}

	render () {
		const modshow = this.state.modalShow;
		const currentprod = this.state.currentProduct;
		return (
			<Aux>
				<Products
					modal = {modshow}
					curprod = {currentprod}
					quantity = { this.state.quantity }
					totalPriceItem = { this.state.totalPriceItem }
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