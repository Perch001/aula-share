const initialState = {
    username: '',
    password: '',
    auth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case "AUTH_USER":
            return {
                ...state,
                username: action.payload.username,
                password: action.payload.password,
                auth: action.payload.auth,
            }
        default:
            return state
    }
}

export default authReducer