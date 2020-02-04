import React from 'react';
import { connect } from 'react-redux';
import {deleteNote} from '../actions/index';
import Note from '../components/Note';

let NotesContainer = props => {

    let ownNotes = props.notes.filter( note => note.folderId === props.folderId);

    return (
        ownNotes.map( note => (
            <Note key={note.noteId} noteId={note.noteId} name={note.name} onNoteDelete={props.onNoteDelete}></Note>
        ))
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