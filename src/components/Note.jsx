import React from 'react';
import SortableHandle from '../sortable-containers/SortableHandle';
import styles from '../styles/Note.module.scss';

class Note extends React.Component {

    editIconSrc = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAhUlEQVRIie3TsQnAIBCF4X/JkCJZwB2EuE/GcZCkVzBFThSxy9kEDw7U
    4nsqHMx6ywI3sI7AHZCkI7CPwANwVmuVl2Q8AUbOcsiliSfAS0iQvdXAg6C+CXNaeP5no41HYJOzhfItx8Qn/gMcysDkIVor3H3F6wBQvnkbULca3gtQxWd16wFWK2WxLn2fzAAAAABJRU5ErkJggg==`;
    deleteIconSrc = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAWklEQVRIiWNgGCmggYGB4T8a7iDXsKNYDCMWH0Y3jAmLBf/IdRnUkm
    EGGHGIk+tVDPOwxQFVwagFoxaMWjBqAQUWPCHDrMekKPaEaiC2JnvEwMDgQYajhgAAAHQzJawIGW+JAAAAAElFTkSuQmCC`;

    render() {
        return (
            <div className={styles.container}>
                <SortableHandle>
                    <p className={styles.text}>{this.props.text}</p>
                </SortableHandle>
                <div className={styles.controls}>
                    <div className={styles["note-icon"]} onClick={ () => this.props.onStartNoteEdit(this.props.noteId) }>
                        <img src={this.editIconSrc} alt="edit icon"/>
                    </div>
                    <div className={styles["note-icon"]} onClick={ () => this.props.onNoteDelete(this.props.noteId) }>
                        <img src={this.deleteIconSrc} alt="delete icon"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Note;