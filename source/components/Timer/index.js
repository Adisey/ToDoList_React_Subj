// Core
import React, { Component } from 'react';
import { bool, number } from "prop-types";

export default class Timer extends Component {
    static propTypes = {
        interval:  number.isRequired,
        showTimer: bool.isRequired,
    };

    static defaultProps = {
        interval:  1,
        showTimer: false,
    };

    state = {
        today: new Date(),
    };

    componentDidMount () {
        const { interval } = this.props;

        this.timerId = setInterval(
            () => this.tick(),
            interval * 1000
        );
    }

    componentWillUnmount () {
        clearInterval(this.timerId);
    }

    tick () {
        this.setState({
            today: new Date(),
        });
    }

    render () {
        const { showTimer } = this.props;
        const { today } = this.state;

        return  showTimer ? today.toLocaleTimeString(): null
    }
}
