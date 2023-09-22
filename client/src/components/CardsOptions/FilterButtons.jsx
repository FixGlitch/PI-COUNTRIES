import { useDispatch, useSelector } from "react-redux"
import { sortConfig } from "../../redux/actions/sortConf/sortConfig";
import style from "./FilterButtons.module.css";

export default function FilterButtons(){
const activity = useSelector(state => state.activity);
const continents = useSelector(state => state.continents);

const dispatch = useDispatch();

const handlerChange = (event) => {
    const {value, name} = event.target;
    dispatch(sortConfig({value, name }))
}

return(
    <div>
        <label htmlFor="continents">Filter by: </label>
        <select className={style.selectContainer} name="continents" value={continents} onChange={handlerChange}>
            <option value="AllContinents">All Continents</option>
            <option value="North America"> North America</option>
            <option value="South America">South America</option>
            <option value="Asia">Asia</option>
            <option value="Oceania">Oceania</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="Antarctica">Antarctica</option>
        </select>

        <select className={style.selectContainer} name="activity" value={activity} onChange={handlerChange}>
            <option value="Activity" disabled>Activity Season</option>
            <option value="All">All</option>
            <option value="With activities">With activities</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Autumn">Autumn</option>
            <option value="Winter">Winter</option>
        </select>
    </div>
)};