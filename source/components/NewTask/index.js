// Core
import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Instruments
import { Formik, Form, Field } from 'formik';
import { newTask } from './shapes';
import cx from 'classnames';
//Styles
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
export default class NewTask extends Component {
    formikForm = createRef();

    _cancelNewTask = () => {
        const { actions } = this.props;

        actions.cancelNewTask();
    };

    _submitForm = (formData, actions) => {
        this._createTask(formData);
        actions.resetForm();
    };

    _createTask = ({ message }) => {
        if (!message) {
            return null;
        }
        const { actions } = this.props;

        actions.createTaskAsync(message);
        actions.cancelNewTask();
    };

    _submitFormOnEnter = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();

            this.formikForm.current.submitForm();
        }
    };

    render () {

        return (
            <Formik
                initialValues = { newTask.shape }
                ref = { this.formikForm }
                render = { (props) => {
                    const { isValid, touched, errors } = props;
                    const messageStyle = cx({ [Styles.invalidInput]: !isValid && touched.message && errors.message });

                    return (
                        <div className = { Styles.main }>
                            <Form >
                                <Field
                                    className = { messageStyle }
                                    name = 'message'
                                    placeholder = 'Описание новой задачи'
                                    type = 'text'
                                    onKeyPress = { this._submitFormOnEnter }
                                />
                                <button
                                    type = 'submit'>Создать</button>
                                <button
                                    type = 'button'
                                    onClick = { this._cancelNewTask }
                                    className = { Styles.cancelButton }>Отмена</button>
                            </Form>
                            <div className = { Styles.hintError }>
                                <div>{errors.message}</div>
                            </div>
                        </div>
                    );
                } }
                validateOnBlur = { false }
                validationSchema = { newTask.schema }
                onSubmit = { this._submitForm }
            />
        );
    }
}
