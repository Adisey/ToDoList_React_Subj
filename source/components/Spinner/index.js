// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Styles
import Styles from './styles.m.css';

const mapStateToProps = (state) => {
    return {
        isSpinning: state.ui.get('isSpinning'),
    };
};

@connect(mapStateToProps)
export default class Spinner extends Component {
    render () {
        const { isSpinning } = this.props;
        return isSpinning ? <div className = { Styles.spinner } /> : null;
    }
}
