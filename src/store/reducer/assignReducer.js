const initialState = {
    assign: []
}

const assignReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ASSIGN":
            return {
                ...state,
                assign: [...state.assign, action.payload]
            }
        default:
            return state
    }
}
export default assignReducer;