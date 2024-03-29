// Core
import React, { PureComponent } from 'react';
// Instruments
import { msToHMS } from '../../instruments/tools';
//Styles
import Styles from './styles.m.css';
import cx from 'classnames';
// Components
import { ShowPassedTime } from '../';
import Checkbox from '../../theme/assets/Checkbox';
import Remove from '../../theme/assets/Remove';
import TimerIcon from '../../theme/assets/Timer';

export default class Task extends PureComponent {

    _removeTask = () => {
        const { id, runningTask, actions } = this.props;

        if (runningTask && runningTask.id === id) {
            actions.endRunTask();
        }
        actions.removeTaskAsync(id);
    };

    _completeTask = () => {
        const { id, completed, runningTask, actions } = this.props;

        if (!completed && runningTask && runningTask.id === id) {
            actions.endRunTask();
        }
        actions.completeTaskAsync({ id, completed });
    };
    _startRunTask = () => {
        const { id, actions } = this.props;

        actions.startRunTask(id);
    };
    _endRunTask = () => {
        const { actions } = this.props;

        actions.endRunTask();
    };

    render () {
        const { id, message, completed, executionTime, runningTask } = this.props;
        const notAvailableTimer = completed || runningTask && runningTask.id !== id;
        // изменение таймер НЕ доступно если: Задача завершена ||(или) есть зпущенные задачи &&(и) зпущенная залачи с другим ID.

        const abilityTimerStopOrStart  = runningTask && runningTask.id === id;
        // Возможно остановить(true) таймер если: есть запущенные задачи, и это задача с этми ID.
        // Или запустить (false) если: нет зарущенных.

        const stylesTask = cx(Styles.task, {
            [Styles.completed]: completed,
        });

        const stylesRun = cx({ [Styles.runTimer]: !notAvailableTimer && abilityTimerStopOrStart });

        return (
            <div className = { stylesTask }>
                <div className = { Styles.content }>
                    <div
                        className = { Styles.buttonPlase }
                        onClick = { this._completeTask }>
                        <Checkbox
                            checked = { completed }
                            className = { Styles.toggleTaskIcon }
                            color1 = '#3B8EF3'
                            color2 = '#fff'
                            title = { completed ? 'Отменить завершение задачи': 'Заверить задачу' }

                        />
                    </div>
                    <div className = { Styles.taskMessage }>
                        { message }
                    </div>
                    <div
                        className = { Styles.buttonPlase }
                        onClick = { notAvailableTimer? null : abilityTimerStopOrStart? this._endRunTask : this._startRunTask }>
                        <p className = { stylesRun } title = { `Время выполнения` }>
                            {!notAvailableTimer && abilityTimerStopOrStart
                                ? <ShowPassedTime
                                    interval = { 1 }
                                    oldPassedTime = { executionTime }
                                    startTime = { runningTask.startRunning }
                                /> : msToHMS(executionTime)
                            }
                        </p>
                    </div>
                    <div
                        className = { Styles.buttonPlase }
                        onClick = { notAvailableTimer? null : abilityTimerStopOrStart? this._endRunTask : this._startRunTask }>
                        <TimerIcon
                            inlineBlock
                            className = { Styles.toggleTaskIcon }
                            color1 = { notAvailableTimer? '#777777' : abilityTimerStopOrStart? '#FF0000' : '#0000FF' }
                            color2 = { notAvailableTimer? '#777777' : abilityTimerStopOrStart? '#FF0000' : '#3B8EF3' }
                            title = { notAvailableTimer? 'нет возможности запустить' : abilityTimerStopOrStart? 'Стоп' : 'Старт' }
                            onClick = { notAvailableTimer? null : abilityTimerStopOrStart? this._endRunTask : this._startRunTask }
                        />
                    </div>
                    <div
                        className = { Styles.buttonPlase }
                        onClick = { this._removeTask }>
                        <Remove
                            inlineBlock
                            className = { Styles.toggleTaskIcon }
                            color1 = '#0000FF'
                            color2 = '#3B8EF3'
                            title = 'Удалить задачу.'
                        />
                    </div>
                </div>
            </div>
        );
    }
}
