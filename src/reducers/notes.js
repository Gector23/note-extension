const notes = (state = [], action) => {
    let newState;

    switch (action.type) {
        case "ADD_NOTE": 
            newState = [
                ...JSON.parse(JSON.stringify(state)),
                {
                    noteId: action.noteId,
                    name: action.name,
                    folderId: action.folderId
                }
            ];
            break;
        case "DELETE_NOTE": 
            newState = state.filter( note => note.noteId !== action.noteId );
            break;
        default: return state;
    }

    let localStorageStore = JSON.parse(localStorage.getItem("store"));
    localStorageStore.notes = newState;
    localStorage.setItem("store", JSON.stringify(localStorageStore));

    return newState;
}

export default notes;