// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Instruments
// Components
import { Title } from '../';
import NewTask from '../NewTask';
import Task from '../Task';
import Add from '../../theme/assets/Add';

// Styles
import Styles from './styles.m.css';
// Actions
import { tasksActions } from '../../bus/tasks/actions';

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...tasksActions }, dispatch),
    };
};

@connect(
    mapStateToProps,
    mapDispatchToProps
)
export default class TaskList extends Component {

    componentDidMount () {
        // ToDo: когда будет сервер
        // const { actions } = this.props;
        // actions.fetchTasksAsync();
    }
    _newTask = () => {
        const { actions } = this.props;

        actions.newTask();
    };

    _cancelNewTask = () => {
        const { actions } = this.props;

        actions.cancelNewTask();
    };

    render () {
        const { actions, tasks } = this.props;
        const newTask = tasks.get('newTask');
        const runningTask = tasks.get('runningTask')? tasks.get('runningTask').toJS() : undefined;
        const taskJSarr = tasks.get('tasksList').toJS();
        const tasksList = {};
        const orderList = [];

        taskJSarr.map((task) => {
            tasksList[task.id] = task;
        });

        taskJSarr
            .sort((a, b) => {
                if (a.order > b.order) {
                    return 1;
                }
                if (a.order < b.order) {
                    return -1;
                }
            })
            .map((task) => {
                orderList.push(task.id);
            })
        ;
        const tasksListJSX = orderList
            .map((id) => (
                <Task
                    actions = { actions }
                    completed = { tasksList[id].completed }
                    executionTime = { tasksList[id].executionTime ? tasksList[id].executionTime: 0 }
                    id = { id }
                    key = { id }
                    message = { tasksList[id].message }
                    runningTask = { runningTask }
                />
            ));

        return (
            <section className = { Styles.tasksList }>
                <main>
                    <div className = { Styles.tasksListTitle }>
                        <Add
                            inlineBlock
                            color1 = { newTask ? '#FF0000' : '#0000FF' }
                            color2 = { newTask ? '#ff4f3f' : '#3B8EF3' }
                            title = { newTask ? 'Отменить создание.' :'Создать новую задачу.' }
                            onClick = { newTask ? this._cancelNewTask : this._newTask }
                        />
                        <Title />
                    </div>
                    <section>
                        <ul>
                            {newTask ? <NewTask /> : null}
                            {tasksListJSX}
                        </ul>
                    </section>
                </main>
            </section>
        );
    }
}
