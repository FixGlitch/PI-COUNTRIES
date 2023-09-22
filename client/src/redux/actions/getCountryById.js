import axios from "axios";
import { GET_BY_ID } from "../type_actions";

export const getCountryById = (id) => {
const endpoint = `http://localhost:3001/countries/id/${id}`;
    try {
        return async (dispatch) => {
            const { data } = await axios.get(endpoint);
            dispatch({ type: GET_BY_ID, payload: data });
        }
    } catch (error) {
        throw new Error(error.message);
    };
};