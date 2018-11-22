// Core
import React, { PureComponent } from 'react';
// Instruments
//Styles
import Styles from './styles.m.css';
import cx from 'classnames';
// Components
import Checkbox from '../../theme/assets/Checkbox';
import Remove from '../../theme/assets/Remove';

export default class Task extends PureComponent {

    _removeTask = () => {
        const { id, actions } = this.props;

        actions.removeTaskAsync(id);
    };

    _completeTask = () => {
        const { id, message, completed, actions } = this.props;

        actions.completeTaskAsync({ id, message, completed });
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
        const { message, completed } = this.props;

        const styles = cx(Styles.task, {
            [Styles.completed]: completed,
        });

        return (
            <li className = { styles }>
                <div className = { Styles.content }>
                    <Checkbox
                        checked = { completed }
                        className = { Styles.toggleTaskCompletedState }
                        color1 = '#3B8EF3'
                        color2 = '#fff'
                        title = { completed ? 'Отменить завершение задачи': 'Заверить задачу' }
                        onClick = { this._completeTask }
                    />
                    <div>
                        <div>
                            { message }
                        </div>
                    </div>
                    <Remove
                        inlineBlock
                        className = { Styles.removeTask }
                        color1 = '#0000FF'
                        color2 = '#3B8EF3'
                        title = 'Удалить задачу.'
                        onClick = { this._removeTask }
                    />

                </div>
            </li>
        );
    }
}
