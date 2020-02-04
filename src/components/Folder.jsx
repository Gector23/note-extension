import React from 'react';
import NotesContainer from '../containers/NotesContainer';

class Folder extends React.Component {
    constructor(props) {
        super(props);

        this.state = {isOpen: false};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState( state => ({
            isOpen: !state.isOpen
        }))
    }

    render() {
        return(
            <div>
                <div onClick={this.handleClick}>
                    <div>{this.props.name}</div>
                    <div onClick={() => this.props.onFolderDelete(this.props.folderId)}>X</div>
                </div>
                {this.state.isOpen && <NotesContainer folderId={this.props.folderId} />}
            </div>
        );
    }
}

export default Folder;