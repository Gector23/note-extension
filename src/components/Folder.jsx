import React from 'react';
import AddNote from '../containers/AddNote';
import NotesContainer from '../containers/NotesContainer';
import styles from '../styles/Folder.module.scss';

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
            <div className={styles.body}>
                <AddNote folderId={this.props.folderId} />
                <NotesContainer folderId={this.props.folderId} />
            </div>
        );

        const folderCloseIconSrc = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAZElEQVRIie2UOwqAMBAFJ57OeBtv4Flda68QCxH
        8RBT2CRY78JoUM6kWgj/RAQaUymag9wbu5PsNnsCT/O0MyF8GCjBu0nQKKEkAjVh6IQIRiMAxMAm9VnvMrDdEcYda4WcDJwsev0ztX1aulQAAAABJRU5ErkJggg==`;
        const folderOpenIconSrc = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAZUlEQVRIie2UMQqAMBAEB19n/I0/8K0mtV+IRSwM
        mijsCRY3sFy3wzULzp+YgAjkm2zArApa5ecsiuCp/G0iEL4UZGDtCVSqnsGgsIsLXOCCWpCOq84ElD26ECgbYrFDo/C0Y8wOlzVf2FU95GAAAAAASUVORK5CYII=`;
        const deleteIconSrc = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAWklEQVRIiWNgGCmggYGB4T8a7iDXsKNYDCMWH0Y3jAmL
        Bf/IdRnUkmEGGHGIk+tVDPOwxQFVwagFoxaMWjBqAQUWPCHDrMekKPaEaiC2JnvEwMDgQYajhgAAAHQzJawIGW+JAAAAAElFTkSuQmCC`;

        return(
            <div className={styles.container}>
                <div className={styles.header} onClick={this.handleFolderClick}>
                    <div className={styles["folder-icon"]}>
                        <img src={this.state.isOpen ? folderOpenIconSrc : folderCloseIconSrc} alt="folder icon"/>
                    </div>
                    <div className={styles.name}>{this.props.name}</div>
                    <div className={styles.delete} onClick={this.handleDeleteClick}>
                        <img src={deleteIconSrc} alt="delete icon"/>
                    </div>
                </div>
                {this.state.isOpen && folderContent}
            </div>
        );
    }
}

export default Folder;