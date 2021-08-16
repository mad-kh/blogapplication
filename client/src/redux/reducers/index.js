import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import postReducer from "./postReducer";
import categoriesReducer from "./categoriesReducer";
//import usersReducer from "./usersReducer"
const rootReducer = combineReducers({
    usersReducer,
    postReducer,
    categoriesReducer,
});
export default rootReducer;
