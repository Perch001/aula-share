import {combineReducers} from "redux";
import authReducer from "./authReducer";
import applicationReducer from "./applicationReducer";
import assignReducer from "./assignReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    appl: applicationReducer,
    assign: assignReducer
})


export default rootReducer;