import React from 'react';
import AddForm from '../containers/AddForm';
import FoldersContainer from '../containers/FoldersContainer';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <AddForm />
                <FoldersContainer />
            </React.Fragment>
        );
    }
}

export default App;