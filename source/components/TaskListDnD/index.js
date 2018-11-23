// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Instruments
import { SortablePane, Pane } from 'react-sortable-pane';
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
export default class TaskListDnD extends Component {
    state = {
        order: false,
    };

    componentDidMount () {
        const { actions, tasks } = this.props;
        actions.makeOrderList();
    }

    _newTask = () => {
        const { actions } = this.props;

        actions.newTask();
    };

    _cancelNewTask = () => {
        const { actions } = this.props;

        actions.cancelNewTask();
    };
    _onDragStop () {
        const { actions } = this.props;

        if (this.state.order) {
            actions.newOrderList(this.state.order);
        }
    }

    render () {
        const { actions, tasks } = this.props;
        const newTask = tasks.get('newTask');
        const runningTask = tasks.get('runningTask')? tasks.get('runningTask').toJS() : undefined;
        const orderList =  tasks.get('orderList')? tasks.get('orderList').toJS(): [];
        const tasksList = {};
        const taskJSarr = tasks.get('tasksList').toJS();

        taskJSarr.map((task) => {
            tasksList[task.id] = task;
        });

        const tasksListJSX = orderList
            .map((id) => (
                <Pane key = { id } size = { { width: '100%' } } >
                    <Task
                        actions = { actions }
                        completed = { tasksList[id].completed }
                        executionTime = { tasksList[id].executionTime ? tasksList[id].executionTime: 0 }
                        id = { id }
                        key = { id }
                        message = { tasksList[id].message }
                        runningTask = { runningTask }
                    />
                </Pane>
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
                        {newTask ? <NewTask /> : null}
                        <SortablePane
                            className = { Styles.tasksListBody }
                            direction = 'vertical'
                            onDragStop = { () => {
                                this._onDragStop();
                            } }
                            onOrderChange = { (order) => {
                                this.setState({ order });
                            } }
                            style = { { height: '700px' } }>
                            {tasksListJSX}
                        </SortablePane>
                    </section>
                </main>
            </section>
        );
    }
}
