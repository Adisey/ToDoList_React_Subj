// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Styles
import Styles from './styles.m.css';

// Components
import { Spinner, TaskListDnD } from '../components';
// Actions
import { uiActions } from '../bus/ui/actions';

const mapStateToProps = (state) => {
    return {
        ui: state.ui,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...uiActions }, dispatch),
    };
};

@connect(
    mapStateToProps,
    mapDispatchToProps
)
export default class Main extends Component {
    componentDidMount () {
        //const { actions } = this.props;
        // Делаем вид что обращаемя к серверу :)
        //actions.startSpinning();
        //setTimeout(actions.stopSpinning, 1000);
    }
    render () {
        return (
            <div className = { Styles.main }>
                <Spinner />
                <TaskListDnD />
            </div>
        );
    }
}
