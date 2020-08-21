import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = (props) => {
	return (
		<div className = {classes.backdrop} onClick = {props.clicked}></div>
	)
}

export default backdrop;