const notes = (notes = [], action) => {
    switch (action.type) {
        case "ADD_NOTE": 
            return [
                ...notes,
                {
                    noteId: action.noteId,
                    name: action.name,
                    folderId: action.folderId
                }
            ];
        case "DELETE_NOTE": 
            return notes.filter( note => note.noteId !== action.noteId );
        default: return notes;
    }
}

export default notes;