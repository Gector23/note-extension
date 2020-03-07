import React from 'react';
import {connect} from 'react-redux';
import {deleteNote, startNoteEdit} from '../actions/index';
import Note from '../components/Note';
import styles from '../styles/Notes.module.scss';

let NotesContainer = props => {

    let noteList =  props.notes.map( note => (
        <Note key={note.noteId} noteId={note.noteId} text={note.text} onStartNoteEdit={props.onStartNoteEdit} onNoteDelete={props.onNoteDelete}></Note>
    ));

    return Boolean(noteList.length) && <div className={styles.container}> {noteList} </div>;
}

const mapStateToProps = (state, ownProps) => {
    let notes = state.notes.filter( note => note.folderId === ownProps.folderId);

    return {notes};
}

const mapDispatchToProps = dispatch => {
    return {
        onNoteDelete: (folderId, noteId) => dispatch(deleteNote(folderId, noteId)),
        onStartNoteEdit: noteId => dispatch(startNoteEdit(noteId))
    };
}

NotesContainer = connect(mapStateToProps, mapDispatchToProps)(NotesContainer);

export default NotesContainer;