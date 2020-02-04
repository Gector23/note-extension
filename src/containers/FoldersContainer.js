import React from 'react';
import { connect } from 'react-redux';
import { deleteFolder } from '../actions/index';
import Folder from '../components/Folder';

let FoldersContainer = (props) => {
    let foldersList = props.folders.map(folder => (
        <Folder key={folder.folderId} folderId={folder.folderId} name={folder.name} onFolderDelete={props.onFolderDelete}></Folder>
    ));

    return (
        <div>
            {foldersList}
        </div>
    );
}

const mapStateToProps = state => {
    return {folders: state.folders}
}

const mapDispatchToProps = dispatch => {
    return {
        onFolderDelete: folderId => dispatch( deleteFolder(folderId) )
    }
}

FoldersContainer = connect(mapStateToProps, mapDispatchToProps)(FoldersContainer);

export default FoldersContainer;