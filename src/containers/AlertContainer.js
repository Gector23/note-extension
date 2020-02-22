import React from 'react';
import { connect } from 'react-redux';
import { deleteFirstAlert } from '../actions/index';
import styles from '../styles/AlertContainer.module.scss';

let AlertConatiner = props => {
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

AlertConatiner = connect(mapStateToProps, mapDispatchToProps)(AlertConatiner);

export default AlertConatiner;