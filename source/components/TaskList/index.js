// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Instruments
// Components
import { Title } from '../../components';
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

        console.log(` -> "newTask" -> `, newTask);
        const tasksList = tasks
            .get('tasksList')
            .map((task) => (
                <Task
                    actions = { actions }
                    completed = { task.get('completed') }
                    id = { task.get('id') }
                    key = { task.get('id') }
                    message = { task.get('message') }
                />
            ));

        return (
            <section className = { Styles.tasksList }>
                <main>
                    <div className = { Styles.tasksListTitle }>
                        <Add
                            inlineBlock
                            color1 = { newTask ? '#FF0000' : '#0000FF' }
                            color2 = { newTask ? '#ff4f3f' : '#3B8EF3'}
                            title = { newTask ?  'Отменить создание.' :'Создать новую задачу.'}
                            onClick = { newTask ? this._cancelNewTask : this._newTask }
                        />
                        <Title />
                    </div>
                    <section>
                        <ul>
                            {newTask ? <NewTask /> : null}
                            {tasksList}
                        </ul>
                    </section>
                </main>
            </section>
        );
    }
}
