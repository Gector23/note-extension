import React from 'react';
import AddForm from '../containers/AddForm';
import NotesContainer from '../containers/NotesContainer';

class Folder extends React.Component {
    constructor(props) {
        super(props);

        this.state = {isOpen: false};

        this.handleFolderClick = this.handleFolderClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    handleFolderClick() {
        this.setState( state => ({
            isOpen: !state.isOpen
        }))
    }

    handleDeleteClick() {
        this.props.onAllNoteDelete(this.props.folderId);
        this.props.onFolderDelete(this.props.folderId);
    }

    render() {
        const folderContent = (
            <React.Fragment>
                <AddForm folderId={this.props.folderId} />
                <NotesContainer folderId={this.props.folderId} />
            </React.Fragment>
        );

        return(
            <div>
                <div onClick={this.handleFolderClick}>
                    <div>{this.props.name}</div>
                    <div onClick={this.handleDeleteClick}>X</div>
                </div>
                {this.state.isOpen && folderContent}
            </div>
        );
    }
}

export default Folder;