import React from 'react';
import { connect } from 'react-redux';
import {deleteNote} from '../actions/index';
import Note from '../components/Note';
import styles from '../styles/NotesContainer.module.scss';

let NotesContainer = props => {

    let ownNotes = props.notes.filter( note => note.folderId === props.folderId);

    return (
        <div className={ownNotes.length ? styles.container : styles.empty}>
            {
                ownNotes.map( note => (
                    <Note key={note.noteId} noteId={note.noteId} text={note.text} onNoteDelete={props.onNoteDelete}></Note>
                ))
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {notes: state.notes};
}

const mapDispatchToProps = dispatch => {
    return {
        onNoteDelete: (folderId, noteId) => dispatch( deleteNote(folderId, noteId) )
    }
}

NotesContainer = connect(mapStateToProps, mapDispatchToProps)(NotesContainer);

export default NotesContainer;