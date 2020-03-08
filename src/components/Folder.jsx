import React from 'react';
import SortableHandle from '../sortable-containers/SortableHandle';
import AddNote from '../containers/AddNote';
import Notes from '../containers/Notes';
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

    sortIconSrc = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAd0lEQVRIiWNgGM6ggYGBoYOWhv+HYkKWwNSRZTgxlpBkATbDifUJRYZT
    zRJkQKzX8apjoppzcAAWKpjBiE+S5j6ghgWDNw7whi2xYEDjgOQyhlQLBgyUMxAuUuppaQnRhhOKA2yWkORyYiIZ2RKKgwUXaIDiYQoApwpB4eXEcEwAAAAASUVORK5CYII=`;
    deleteIconSrc = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAWklEQVRIiWNgGCmggYGB4T8a7iDXsKNYDCMWH0Y3jAmLBf/IdRnUkm
    EGGHGIk+tVDPOwxQFVwagFoxaMWjBqAQUWPCHDrMekKPaEaiC2JnvEwMDgQYajhgAAAHQzJawIGW+JAAAAAElFTkSuQmCC`;

    render() {
        const folderBody = (
            <div className={styles.body}>
                <AddNote folderId={this.props.folderId} />
                <Notes folderId={this.props.folderId} />
            </div>
        );

        return(
            <div className={styles.container}>
                <div className={styles.header} onClick={this.handleFolderClick}>
                    <SortableHandle>
                        <div className={styles["folder-icon"]}>
                            <img src={this.sortIconSrc} alt="sort icon"/>
                        </div>
                    </SortableHandle>
                    <div className={styles.name}>{this.props.name}</div>
                    <div className={styles["folder-icon"] + " " + styles["active-icon"]} onClick={this.handleDeleteClick}>
                        <img src={this.deleteIconSrc} alt="delete icon"/>
                    </div>
                </div>
                {this.state.isOpen && folderBody}
            </div>
        );
    }
}

export default Folder;