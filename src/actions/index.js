export const addFolder = (folderId, name) => ({
    type: 'ADD_FOLDER',
    folderId,
    name
})

export const deleteFolder = folderId => ({
    type: 'DELETE_FOLDER',
    folderId
})

export const addNote = (folderId, noteId, text) => ({
    type: 'ADD_NOTE',
    folderId,
    noteId,
    text
})

export const deleteNote = noteId => ({
    type: 'DELETE_NOTE',
    noteId
})

export const deleteAllNoteIn = folderId => ({
    type: 'DELETE_ALL_NOTE_IN',
    folderId
})