import { GET_POSTS } from "../constants/action-types";
import axios from "axios";

export const fetchPosts = (payload) => (dispatch) => {
    axios
        .get("/api/posts/" + payload)
        .then((response) =>
            // eslint-disable-next-line
            dispatch({ type: GET_POSTS, payload: response.data })
        )
        .catch((err) => console.log(err));
};
export const fetchPostss = () => (dispatch) => {
    axios
        .get("/api/posts/")
        .then((response) =>
            // eslint-disable-next-line
            dispatch({ type: GET_POSTS, payload: response.data })
        )
        .catch((err) => console.log(err));
};
export const addPost = (payload) => (dispatch) => {
    axios
        .post("/api/posts/addPost", payload)
        .then(() => dispatch(fetchPosts()))
        .catch((err) => console.log(err));
};
export const deletePost = (payload) => (dispatch) => {
    axios
        .delete(`/api/posts/${payload.id}`)
        .then(() => dispatch(fetchPostss()))
        .catch((err) => console.log(err));
};
export const UpdatePosts = (payload) => (dispatch) => {
    axios
        .put(`/api/posts/${payload.id}`, payload.post, payload.newPost)
        .then(() => dispatch(fetchPosts()))
        .catch((err) => console.log(err));
};
