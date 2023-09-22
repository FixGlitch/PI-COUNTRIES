import { SORT_CONFIG } from "../../type_actions";

export const sortConfig = (sorted) => {
    return { type: SORT_CONFIG, payload: sorted };
};