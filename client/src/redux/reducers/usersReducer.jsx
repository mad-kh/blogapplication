import { GET_USER } from "../constants/action-types";

const initialState = {
    users: [],
};
const userstReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_USER:
            return { ...state, users: payload };
        default:
            return state;
    }
};
export default userstReducer;
