import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop'
import classes from './Modal.module.css'

class Modal extends Component {
	render () {
		return (
			<Aux>
				<Backdrop clicked = {this.props.backdropClicked}/>
				<div className = {classes.modal}>
					{this.props.children}
				</div>
			</Aux>
		)
	}
}

export default Modal;