// import {loginUser} from "../../utiles"
import axios from "axios";
import { GET_USER } from "../constants/action-types";
import { loginUser } from "../../utiles";
export const getUser = () => (dispatch) => {
    axios
        .get("/api/users/")
        .then((response) =>
            dispatch({ type: GET_USER, payload: response.data })
        )
        .catch((err) => console.log(err));
};
// // export const deleteUser=(payload) => (dispatch) => {
//         axios
//             .delete(`/api/users/${payload.id}`)
//             .then(() => dispatch(getUser()))
//             .catch((err) => console.log(err));
//     };

export const addUser = (payload) => (dispatch) => {
    axios

        .post("/api/auth/login", (payload = payload.loginData))
        .then((response) => {
            // eslint-disable-next-line
            loginUser(dispatch((payload = response.data.token)));
        })
        .catch((err) => alert(err.response.data.msg));
};
export const UpdateUser = (payload) => (dispatch) => {
    axios
        .put(`/api/users/${payload.id}`, payload)
        .then(() => dispatch(getUser()))
        .catch((err) => console.log(err));
};
export const deleteUser = (payload) => (dispatch) => {
    axios
        .put(`/api/users/${payload.id}`, payload.username)
        .then(() => dispatch(getUser()))
        .catch((err) => console.log(err));
};
