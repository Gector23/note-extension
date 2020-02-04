export const addFolder = (folderId, name) => ({
    type: 'ADD_FOLDER',
    folderId,
    name
})

export const deleteFolder = folderId => ({
    type: 'DELETE_FOLDER',
    folderId
})

export const addNote = (folderId, noteId, name) => ({
    type: 'ADD_NOTE',
    folderId,
    noteId,
    name
})

export const deleteNote = noteId => ({
    type: 'DELETE_NOTE',
    noteId
})