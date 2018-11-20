// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Components
import { Title, Spinner } from '../components';
// Actions
import { uiActions } from '../bus/ui/actions';

const mapStateToProps = (state) => {
    return {
        ui:   state.ui,
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
        const { actions } = this.props;
        actions.startSpinning();
        setTimeout(actions.stopSpinning, 5000);
    }
    render() {
        return (
            <div>
                <Spinner />
                <Title />
            </div>
        );
    }
}
