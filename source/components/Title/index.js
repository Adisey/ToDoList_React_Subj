// Core
import React, { Component } from 'react';
// Instruments
// import moment from 'moment';
// Styles
import Styles from './styles.m.css';
// Components

export default class Title extends Component {

    render () {
        return (
            <section className = { Styles.mainTitle }>
                <h1>ToDo List - <span>Subj.com</span></h1>
            </section>
        );
    }
}
