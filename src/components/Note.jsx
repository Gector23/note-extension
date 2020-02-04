import React from 'react';

const Note = props => {
    return (
        <div>
            <div>{props.name}</div>
            <div onClick={ () => props.onNoteDelete(props.noteId) }>X</div>
        </div>
    );
}

export default Note;