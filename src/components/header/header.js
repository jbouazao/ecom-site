import React from 'react';
import classes from './header.module.css'
import Image from '../../assets/warehouse_logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {faUserCircle} from '@fortawesome/free-solid-svg-icons'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
    return (
        <div className = {classes.headerContainer}>
            <div className = {classes.logo}>
                <img src = {Image} alt = ''/>
            </div>
            <nav className = {classes.nav}>
                <a href = '' className = {classes.navLinks}>TEST</a>
                <a href = '' className = {classes.navLinks}>TEST</a>
                <a href = '' className = {classes.navLinks}>TEST</a>
                <a href = '' className = {classes.navLinks}>TEST</a>
                <a href = '' className = {classes.navLinks}>TEST</a>
                <a href = '' className = {classes.navLinks}>TEST</a>
                <a href = '' className = {classes.navLinks}>TEST</a>
                <a href = '' className = {classes.navLinks}>TEST</a>
            </nav>
            <nav className = {classes.nav1}>
                <div className = {classes.navIconsContainer}>
                    <FontAwesomeIcon icon = {faSearch} className = {classes.navIcons}/>
                    <p className = {classes.nav1text}>Search</p>
                </div>
                <div className = {classes.navIconsContainer}>
                    <FontAwesomeIcon icon = {faUserCircle} className = {classes.navIcons}/>
                    <p className = {classes.nav1text}>Sign in</p>
                </div>
                <div className = {classes.navIconsContainer}>
                    <FontAwesomeIcon icon = {faShoppingCart} className = {classes.navIcons}/>
                    <p className = {classes.nav1text}>Cart</p>
                </div>
            </nav>
        </div>
    )
}

export default Header;