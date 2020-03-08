import React from 'react';
import {connect} from 'react-redux';
import {deleteFolder, deleteAllNoteIn, folderMove} from '../actions/index';
import SortableContainer from '../sortable-containers/SortableContainer';
import SortableElement from '../sortable-containers/SortableElement';
import Folder from '../components/Folder';
import styles from '../styles/Folders.module.scss';

class Folders extends React.Component {
    constructor(props) {
        super(props);

        this.handleSortEnd = this.handleSortEnd.bind(this);
    }

    handleSortEnd({oldIndex, newIndex}) {
        this.props.onFolderMove(oldIndex, newIndex);
    }

    render() {
        let foldersList = this.props.folders.map((folder, index) => (
            <SortableElement key={folder.folderId} index={index}>
                <Folder folderId={folder.folderId} name={folder.name} onAllNoteDelete={this.props.onAllNoteDelete} onFolderDelete={this.props.onFolderDelete}></Folder>
            </SortableElement>
        ));

        return Boolean(foldersList.length) && <SortableContainer onSortEnd={this.handleSortEnd} useDragHandle><div className={styles.container}>{foldersList}</div></SortableContainer>;
    }
}

const mapStateToProps = state => {
    return {folders: state.folders}
}

const mapDispatchToProps = dispatch => {
    return {
        onAllNoteDelete: folderId => dispatch(deleteAllNoteIn(folderId)),
        onFolderDelete: folderId => dispatch(deleteFolder(folderId)),
        onFolderMove: (oldIndex, newIndex) => dispatch(folderMove(oldIndex, newIndex))
    };
}

Folders = connect(mapStateToProps, mapDispatchToProps)(Folders);

export default Folders;