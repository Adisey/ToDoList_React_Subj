// Core
import React, { Component, createRef } from 'react';
import { Formik, Form, Field } from 'formik';
// Instruments
import { newTask } from '../forms/shapes';
import cx from 'classnames';
//Styles
import Styles from './styles.m.css';

export default class NewTask extends Component {
    formikForm = createRef();

    _submitForm = (formData, actions) => {
        this._createTask(formData);
        actions.resetForm();
    };

    _createTask = ({ message }) => {
        if (!message) {
            return null;
        }
        this.props.actions.createTaskAsync(message);
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
                        <div>
                            <Form>
                                <Field
                                    className = { messageStyle }
                                    name = 'message'
                                    placeholder = 'Описание новой задачи'
                                    type = 'text'
                                    onKeyPress = { this._submitFormOnEnter }
                                />
                                <button type = 'submit'>Добавить задачу</button>
                            </Form>
                            <div className = { Styles.hintError }>
                                {errors.message}
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
