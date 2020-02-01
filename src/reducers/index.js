import folders from './folders';
import notes from './notes';

const noteApp = (state, action) => {
    let actionType = action.type.split("_")[1];

    let newState;

    switch (actionType) {
        case "FOLDER":
            newState = {folders: folders(state.folders, action)};
            break;
        case "NOTE": 
            newState = JSON.parse(JSON.stringify(state));
            newState.folders.forEach(folder => {
                if (folder.folderId === action.folderId) folder.notes = notes(folder.notes, action);
            });
            break;
        default: return state;
    }

    localStorage.setItem("state", JSON.stringify(newState));
    return newState;
}

export default noteApp;