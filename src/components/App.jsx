import React from 'react';
import AddFolder from '../containers/AddFolder';
import FoldersContainer from '../containers/FoldersContainer';
import AlertContainer from '../containers/AlertContainer';
import styles from '../styles/App.module.scss';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1 className={styles.heading}>SimpleNote</h1>
                <AddFolder />
                <FoldersContainer />
                <AlertContainer />
            </React.Fragment>
        );
    }
}

export default App;