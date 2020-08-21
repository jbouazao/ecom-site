import React, { Component } from 'react';
import classes from './coverWrapper.module.css';
import store1 from '../../assets/store1.jpg';
import store2 from '../../assets/store2.jpg';
import store3 from '../../assets/store3.jpg';
import { darkblue } from 'color-name';

const styles = [
    classes.CoverWrapper1,
    classes.CoverWrapper2,
    classes.CoverWrapper3,
]

class CoverWrapper extends Component {
    state = {
        covers: [
            {cover: store1},
            {cover: store2},
            {cover: store3},
        ],
        currentCover: 0,
        covertexts: [
            {covertext1: <p>test</p>},
        ]
    }

    coverHandler = (dir) => {
        let currentUpdated = this.state.currentCover;
        if (dir === 1) {
            currentUpdated = (currentUpdated + 1) % this.state.covers.length;
        }
        else if (dir === 0) {
            currentUpdated = (currentUpdated - 1);
            if (currentUpdated === -1)
                currentUpdated = this.state.covers.length - 1;
        }
        this.setState({currentCover: currentUpdated})
    }

    render () {
        const current = this.state.currentCover;
        return (
            <div
            style = {{backgroundImage: `url(${this.state.covers[current].cover})`}}
            className = {classes.CoverWrapper}>
                <button className = {classes.coverButtons} onClick = {() => this.coverHandler(0)}>prev</button>
                <button className = {classes.coverButtons} onClick = {() => this.coverHandler(1)}>next</button>
            </div>
        )
    }
}

export default CoverWrapper;