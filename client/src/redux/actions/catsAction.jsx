import { GET_CATS } from "../constants/action-types";
import axios from "axios";

export const fetchCats = () => (dispatch) => {
    axios
        .get("/api/categories/")
        .then((response) =>
            // eslint-disable-next-line
            dispatch({ type: GET_CATS, payload: response.data })
        )
        .catch((err) => console.log(err));
};
