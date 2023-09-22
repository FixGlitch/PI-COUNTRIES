import axios from "axios";
import { GET_ALL_COUNTRIES } from "../type_actions";

export const getAllCountries = () => {
const endpoint = `http://localhost:3001/countries`;

return async (dispatch) => {
    try {
        const { data } = await axios.get(endpoint);
        dispatch({ type: GET_ALL_COUNTRIES, payload: data });
    } catch (error) {
        throw new Error(error.message);
    };
};
};