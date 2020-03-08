import React from 'react';
import {connect} from 'react-redux';
import {deleteFirstAlert} from '../actions/index';
import styles from '../styles/Alerts.module.scss';

let Alerts = props => {
    return Boolean(props.alert) && (
        <div className={styles.container}>
            <div className={styles.alert + " " + styles[props.alert.alertType]} onAnimationIteration={props.onIterationEnd}> {props.alert.text} </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {alert: state.alerts[0]};
}

const mapDispatchToProps = dispatch => {
    return {
        onIterationEnd: () => dispatch(deleteFirstAlert())
    }
}

Alerts = connect(mapStateToProps, mapDispatchToProps)(Alerts);

export default Alerts;