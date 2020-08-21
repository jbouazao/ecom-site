import React, { Component } from 'react'
import Aux from '../../hoc/Aux/Aux'
import classes from './Layout.module.css';
import Header from '../../components/header/header'
import CoverWrapper from '../../components/cover/coverWrapper'
import ProdManagement from '../ProdManagement/ProdManagement';

class Layout extends Component {
  render () {
    return (
      <Aux>
        <Header />
        <CoverWrapper />
        <ProdManagement />
      </Aux>
    )
  }
}

export default Layout;