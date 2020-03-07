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
    text,
    edit: false
})

export const startNoteEdit = noteId => ({
    type: 'START_NOTE_EDIT',
    noteId,
})

export const endNoteEdit = noteId => ({
    type: 'END_NOTE_EDIT',
    noteId
})

export const saveNoteEdit = (noteId, text) => ({
    type: 'SAVE_NOTE_EDIT',
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

export const addAlert = (alertType, text) => ({
    type: 'ADD_ALERT',
    alertType,
    text
})

export const deleteFirstAlert = () => ({
    type: 'DELETE_FIRST_ALERT'
})