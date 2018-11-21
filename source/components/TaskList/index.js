// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Instruments
// Components
import { Title } from '../../components';

//import NewTask from '../NewTask';
import Task from '../Task';
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

    render () {
        const { actions, tasks } = this.props;

        console.log(`TaskList Render -> "tasks" -> `, tasks);
        const tasksList = tasks
            .get('tasksList')
            .map((task) => (
                <Task
                    actions = { actions }
                    completed = { task.get('completed') }
                    id = { task.get('id') }
                    key = { task.get('id') }
                    name = { task.get('name') }
                />
            ));

        return (
            <section className = { Styles.tasksList }>
                <main>
                    <Title />

                    <section>
                        <ul>
                            {tasksList}
                        </ul>
                    </section>
                </main>
            </section>
        );
    }
}
