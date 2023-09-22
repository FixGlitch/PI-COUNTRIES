import { RESET_CONFIG } from "../type_actions";

export const resetConfig = (reseted) => {
    return { type: RESET_CONFIG, payload: reseted };
};