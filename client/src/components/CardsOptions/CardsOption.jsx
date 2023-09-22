import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import FilterButtons from "./FilterButtons";
import SortedOptions from "./SortedOptions";
import { resetConfig } from "../../redux/actions/resetConfig";
import style from "./CardsOptions.module.css"

export default function CardsOptions () {
    const countries = useSelector(state => state.countries);
    const dispatch = useDispatch();

    const handlerClick = () => {
        dispatch(resetConfig(countries));
    };

    return(
        <div className={style.optionsContainer} >
            <SearchBar/>
            <SortedOptions/>
            <FilterButtons/>
            <button onClick={handlerClick}>Reset filters</button>
    </div>
    )
};