import React from 'react';
import styles from '../styles/Note.module.scss';

const Note = props => {
    const deleteIconSrc = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAWklEQVRIiWNgGCmggYGB4T8a7iDXsKNYDCMWH0Y3jAmL
        Bf/IdRnUkmEGGHGIk+tVDPOwxQFVwagFoxaMWjBqAQUWPCHDrMekKPaEaiC2JnvEwMDgQYajhgAAAHQzJawIGW+JAAAAAElFTkSuQmCC`;

    return (
        <div className={styles.container}>
            <p className={styles.text}>{props.text}</p>
            <div className={styles.delete} onClick={ () => props.onNoteDelete(props.noteId) }>
                <img src={deleteIconSrc} alt="delete icon"/>
            </div>
        </div>
    );
}

export default Note;