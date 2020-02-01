export const addFolder = (folderId, name) => ({
    type: 'ADD_FOLDER',
    folderId,
    name
})

export const deleteFolder = folderId => ({
    type: 'DELETE_FOLDER',
    folderId
})

export const addNote = (noteId, name, folderId) => ({
    type: 'ADD_NOTE',
    noteId,
    name, 
    folderId
})

export const deleteNote = (noteId, folderId) => ({
    type: 'DELETE_NOTE',
    noteId,
    folderId
})