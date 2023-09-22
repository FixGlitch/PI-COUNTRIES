import sortFunction from "./actions/sortConf/sortFunction"
import {
    GET_ALL_COUNTRIES,
    GET_BY_ID,
    SORT_CONFIG,
    RESET_CONFIG
} from "./type_actions";

//action":{}"
const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: payload,
                countriesSorted: payload
            };
        case GET_BY_ID:
            return {
                ...state,
                countryDetail: payload
            };
        case SORT_CONFIG:
            const countriesCONFIG = sortFunction({ ...state, [payload.name]: payload.value })
            return {
                ...state,
                [payload.name]: payload.value,
                countriesSorted: countriesCONFIG
            };
        case RESET_CONFIG:
            return {
                ...state,
                countriesSorted: payload,
                searchBar: "",
                continents: "AllContinents",
                activity: "All",
                sortType: "Sort by:",
                order: "Ascending",
            };
        default:
            return { ...state };
    };
};

const initialState = {
    countries: [],
    countryDetail: [],
    countriesSorted: [],
    searchBar: "",
    continents: "AllContinents",
    activity: "All",
    sortType: "Sort by:",
    order: "Ascending"
};

export default rootReducer;