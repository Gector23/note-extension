const alerts = (state = [], action) => {
    let newState;

    switch (action.type) {
        case "ADD_ALERT": 
            newState = [
                ...JSON.parse(JSON.stringify(state)),
                {
                    alertType: action.alertType,
                    text: action.text
                }
            ];
            break;
        case "DELETE_FIRST_ALERT": 
            newState = JSON.parse(JSON.stringify(state));
            newState.shift();
            break;
        default: return state;
    }
    return newState;
}

export default alerts;