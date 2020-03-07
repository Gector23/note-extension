import React from 'react';
import AddFolder from '../containers/AddFolder';
import Folders from '../containers/Folders';
import Alerts from '../containers/Alerts';
import styles from '../styles/App.module.scss';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1 className={styles.heading}>SimpleNote</h1>
                <AddFolder />
                <Folders />
                <Alerts />
            </React.Fragment>
        );
    }
}

export default App;