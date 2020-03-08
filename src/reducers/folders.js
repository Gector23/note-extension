const folders  = (state = [], action) => {
    let newState;

    switch(action.type) {
        case "ADD_FOLDER":
            newState = [
                ...JSON.parse(JSON.stringify(state)),
                {
                    folderId: action.folderId,
                    name: action.name
                }
            ];
            break;
        case "DELETE_FOLDER": 
            newState = state.filter( folder => folder.folderId !==  action.folderId);
            break;
        case "FOLDER_MOVE": 
            newState = JSON.parse(JSON.stringify(state));

            let moveFolder = newState[action.oldIndex];
            newState.splice(action.oldIndex, 1);
            newState.splice(action.newIndex, 0, moveFolder);
            break;
        default: return state;
    }

    let localStorageStore = JSON.parse(localStorage.getItem("store"));
    localStorageStore.folders = newState;
    localStorage.setItem("store", JSON.stringify(localStorageStore));

    return newState;
}

export default folders;