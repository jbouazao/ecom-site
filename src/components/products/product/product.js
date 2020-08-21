import React from 'react';
import classes from './product.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons'

const product = (props) => {
	return (
		<div className = {classes.Product}>
			<div style = {{backgroundImage: `url(${props.img})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', width: '100%', height: '81%', borderRadius: '5px'}}></div>
			<div>Leather bag</div>
			<div style = {{margin: '5px 0px'}}>${props.price}.00</div>
			<button className = {classes.addtocart} onClick = {props.addtocart}>
				<FontAwesomeIcon icon = {faShoppingBag} className = {classes.addtocarticon}/>
				Add to cart
			</button>
		</div>
	)
}

export default product;