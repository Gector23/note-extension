import React from 'react';
import AddFolder from '../containers/AddFolder';
import FoldersContainer from '../containers/FoldersContainer';
import styles from '../styles/App.module.scss';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1 className={styles.heading}>SimpleNote</h1>
                <AddFolder />
                <FoldersContainer />
            </React.Fragment>
        );
    }
}

export default App;