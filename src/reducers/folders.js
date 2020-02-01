const folders  = (folders, action) => {
    switch(action.type) {
        case "ADD_FOLDER":
            return [
                ...JSON.parse(JSON.stringify(folders)),
                {
                    folderId: action.folderId,
                    name: action.name
                }
            ]
        case "DELETE_FOLDER": 
            return folders.filter( folder => folder.folderId !==  action.folderId);
        default: return folders;
    }
}

export default folders;