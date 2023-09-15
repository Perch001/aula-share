const initialState = {
    application: []
}

const applicationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_APPLICATION":
            return {
                ...state,
                application: [...state.application, action.payload]
            }
        default:
            return state;
    }
}
export default applicationReducer