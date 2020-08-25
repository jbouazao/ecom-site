import React from 'react';
import classes from './Cart.module.css';
import blackbag from '../../assets/blackbag.jpg'
import brownbag from '../../assets/brownbag.jpg'
import redbag from '../../assets/redbag.jpg'
import anotherbag from '../../assets/anotherbag.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMinus} from '@fortawesome/free-solid-svg-icons'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

const prods = [
	{id: 1, product: blackbag, prodDesc: 'Awesome Bag', price: 90},
	{id: 2, product: brownbag, prodDesc: 'Awesome Bag', price: 100},
	{id: 3, product: redbag, prodDesc: 'Awesome Bag', price: 110},
	{id: 4, product: anotherbag, prodDesc: 'Awesome Bag', price: 120},
]

const cart = (props) => {
		return (
				<div className = {classes.product}>
					<img style = {{height: '100%'}} src = {prods[props.id].product} alt = ''/>
					<div className = {classes.prodDetails}>
						<h2 className = {classes.prodDesc}>{prods[props.id].prodDesc}</h2>
						<div className = {classes.quantContainer}>
							<div className = {classes.minusContainer} onClick = {props.removeQuantityCartHandler}>
								<FontAwesomeIcon icon = {faMinus} />
							</div>
							<div className = {classes.quantity}>need to fill this</div>
							<div className = {classes.plusContainer} onClick = {props.addQuantityCartHandler}>
								<FontAwesomeIcon icon = {faPlus} />
							</div>
						</div>
						<p className = {classes.totalItemPrice}>{props.totalItemPrice}.00 DH</p>
						{/* {console.log(props.totalItemPrice)} */}
					</div>
				</div>
		)
	}

export default cart;