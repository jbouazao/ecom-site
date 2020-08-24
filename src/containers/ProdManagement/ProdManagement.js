import React, { Component } from 'react';
import Products from '../../components/products/products';
import CartContainer from '../../components/Cart/CartContainer';
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
		displayDetailsModal: false,
		currentProduct: null,
		cart: {
			products: [],
			totalCartPrice: 0
		},
		quantity: 1,
		totalPriceItem: 0
	}

	backdropClicked = (modalState) => {
		this.setState({displayDetailsModal: modalState, quantity: 1, totalCartPrice: 0});
	}

	cartBackdropClicked = () => {
		this.props.backdropClicked()
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

	addQuantityCartHandler = (id) => {
		// let updatedCart = this.state.cart
		// let updatedproducts = this.state.cart.products
		// updatedproducts = [...updatedproducts, updatedproducts[id]]
		// updatedCart = {...updatedCart, products}
		console.log(this.state.cart)
	}

	removeQuantityCartHandler = (id) => {
		console.log(id)
	}

	displayDetailsHandler = (modalState, curprod) => {
		this.setState({displayDetailsModal: modalState, currentProduct: curprod, totalPriceItem: curprod.price})
	}

	openCartHandler = () => {
		if (this.state.displayCartModal === false) {
			let updateModal = this.state.displayCartModal;
			updateModal = !updateModal;
			this.setState({displayCartModal: updateModal})
		}
	}

	addtocartHandler = (curprod, quantity) => {
		curprod.quantity = quantity;
		if (this.state.displayDetailsModal === true) {
			let modalState = this.state.displayDetailsModal;
			modalState = !modalState;
			this.setState({displayDetailsModal: modalState,
					currentProduct: curprod})
		}
		let updatedProducts
		if (!this.state.cart.products.length)
			updatedProducts = Array(this.prods.length)
		// console.log(updatedProducts.length)
		updatedProducts = [...this.state.cart.products]
		updatedProducts[curprod.id] = curprod
		let updatedCart = {...this.state.cart, products: updatedProducts, totalCartPrice: this.state.cart.totalCartPrice + (curprod.price * this.state.quantity)};
		this.setState({cart: updatedCart, quantity: 1, totalPriceItem: curprod.price})
	}

	render () {
		const modshow = this.state.displayDetailsModal;
		const currentprod = this.state.currentProduct;
		return (
			<Aux>
				<Products
					displayDetailsModal = {modshow}
					curprod = {currentprod}
					quantity = { this.state.quantity }
					totalPriceItem = { this.state.totalPriceItem }
					backdropClicked = { this.backdropClicked }
					addtocart = { this.addtocartHandler }
					displayDetailsHandler = { this.displayDetailsHandler }
					addQuantityHandler = { this.addQuantityHandler }
					removeQuantityHandler = { this.removeQuantityHandler }
				/>
				{
					this.props.modal ?
					<Modal backdropClicked = { this.cartBackdropClicked }>
						<CartContainer
							cart = { this.state.cart }
							addQuantityCartHandler = { this.addQuantityCartHandler }
							removeQuantityCartHandler = { this.removeQuantityCartHandler }
							/>
					</Modal> : null
				}
			</Aux>
		)
	}
}

export default ProdManagement;