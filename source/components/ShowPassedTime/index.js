// Core
import React, { Component } from 'react';
import { number, bool } from "prop-types";

export default class ShowPassedTime extends Component {
    static propTypes = {
        interval:      number.isRequired,
        oldPassedTime: number.isRequired,
        startTime:     number.isRequired,
        showMs:        bool.isRequired,
    };

    static defaultProps = {
        interval:      1,
        oldPassedTime: 0,
        startTime:     new Date(),
        showMs:        false,
    };

    state = {
        passedTime: this.props.oldPassedTime + Number(new Date()) - this.props.startTime,
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
        const { startTime, oldPassedTime } = this.props;

        this.setState({
            passedTime: oldPassedTime + Number(new Date()) - startTime,
        });
    }

    msToHMS = (ms, showMs = false) => {
        let seconds = showMs ? ms / 1000 : Math.round(ms/ 1000);
        const hours = parseInt(seconds / 3600);

        seconds %= 3600;
        const minutes = parseInt(seconds / 60);

        seconds %= 60;

        return `${hours}:${this.num2string(minutes)}:${this.num2string(seconds)}`;
    };

    num2string = (num, size=2) => {
        let outString = String(num);

        while (outString.length < size) {
            outString = `0${outString}`;
        }

        return outString;
    };

    render () {
        const { passedTime } = this.state;
        const { showMs } = this.props;
        const passedTimeString = this.msToHMS(passedTime, showMs);

        return passedTimeString;
    }
}
