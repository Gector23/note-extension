import React from 'react';
import {connect} from 'react-redux';
import {deleteNote, startNoteEdit, noteMove} from '../actions/index';
import SortableContainer from '../sortable-containers/SortableContainer';
import SortableElement from '../sortable-containers/SortableElement';
import Note from '../components/Note';
import styles from '../styles/Notes.module.scss';

class Notes extends React.Component {
    constructor(props) {
        super(props);

        this.handleSortEnd = this.handleSortEnd.bind(this);
    }

    handleSortEnd({oldIndex, newIndex}) {
        this.props.onNoteMove(this.props.folderId, oldIndex, newIndex);
    }

    render() {
        let noteList =  this.props.notes.map( (note, index) => (
            <SortableElement key={note.noteId} index={index}>
                <Note noteId={note.noteId} text={note.text} onStartNoteEdit={this.props.onStartNoteEdit} onNoteDelete={this.props.onNoteDelete}></Note>
            </SortableElement>
        ));

        return Boolean(noteList.length) && <SortableContainer onSortEnd={this.handleSortEnd} useDragHandle><div className={styles.container}>{noteList}</div></SortableContainer>;
    }
}

const mapStateToProps = (state, ownProps) => {
    let notes = state.notes.filter( note => note.folderId === ownProps.folderId);

    return {notes};
}

const mapDispatchToProps = dispatch => {
    return {
        onNoteDelete: (folderId, noteId) => dispatch(deleteNote(folderId, noteId)),
        onStartNoteEdit: noteId => dispatch(startNoteEdit(noteId)),
        onNoteMove: (folderId, oldIndex, newIndex) => dispatch(noteMove(folderId, oldIndex, newIndex))
    };
}

Notes = connect(mapStateToProps, mapDispatchToProps)(Notes);

export default Notes;