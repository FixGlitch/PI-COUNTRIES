import { SEARCH_BY_NAME } from "../type_actions";

export const searchByName = (countries) => {
    return { type: SEARCH_BY_NAME, payload: countries };
};