import React, { Component } from 'react'
import Aux from '../../hoc/Aux/Aux'
import classes from './Layout.module.css';
import Header from '../../components/header/header'
import CoverWrapper from '../../components/cover/coverWrapper'
import ProdManagement from '../ProdManagement/ProdManagement';

class Layout extends Component {
	state = {
		cartShow: false
	}

	backdropClicked = () => {
		this.setState({cartShow: false})
	}

	openCartHandler = () => {
		let updateCartShow = this.state.cartShow;
		updateCartShow = !updateCartShow;
		this.setState({cartShow: updateCartShow})
	}

  render () {
    return (
      <Aux>
        <Header openCartHandler = { this.openCartHandler }/>
        <CoverWrapper />
        <ProdManagement modal = {this.state.cartShow} backdropClicked = { this.backdropClicked }/>
      </Aux>
    )
  }
}

export default Layout;