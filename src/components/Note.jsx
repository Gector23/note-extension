import React from 'react';

const Note = props => {
    return (
        <div>
            <div>{props.text}</div>
            <div onClick={ () => props.onNoteDelete(props.noteId) }>X</div>
        </div>
    );
}

export default Note;