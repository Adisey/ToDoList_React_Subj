// Core
import React, { PureComponent } from 'react';
// Instruments
//Styles
import Styles from './styles.m.css';
import cx from 'classnames';
// Components

export default class Task extends PureComponent {

    _removeTask = () => {
        const { id, actions } = this.props;

        actions.removeTaskAsync(id);
    };

    _completeTask = () => {
        const { id, message, completed, favorite, actions } = this.props;

        actions.completeTaskAsync({ id, message, completed, favorite });
    };
    _startRunTask = () => {
        const { id, actions } = this.props;

        actions.startRunTask(id);
    };
    _endRunTask = () => {
        const { id, actions } = this.props;

        actions.endRunTask(id);
    };

    render () {
        const { name, completed } = this.props;

        const styles = cx(Styles.task, {
            [Styles.completed]: completed,
        });

        return (
            <li className = { styles }>
                <div className = { Styles.content }>
                    { name }
                </div>
            </li>
        );
    }
}
