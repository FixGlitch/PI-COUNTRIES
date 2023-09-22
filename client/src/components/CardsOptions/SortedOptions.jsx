import { useDispatch, useSelector } from "react-redux";
import { sortConfig } from "../../redux/actions/sortConf/sortConfig";
import style from "./SortedOptions.module.css";

export default function SortedOptions(){

const sortType = useSelector(state => state.sortType);
const order = useSelector(state => state.order);
const dispatch = useDispatch();

const handlerChange = (event) => {
    const { name, value } = event.target;
    dispatch(sortConfig({value,name}))
    };

return(
    <div>
        <label htmlFor="sorType">Sort by: </label>
        <select className={style.selectContainer} name="sortType" onChange={handlerChange} value={sortType} >
            <option disabled>Sort by:</option>
            <option value="name">Name</option>
            <option value="population">Population</option>
            <option value="area">Area</option>
        </select>
        <select className={style.selectContainer} name="order" onChange={handlerChange} value={order}>
            <option value="Ascending">Ascending</option>
            <option value="Descending">Descending</option>
        </select>
    </div>
)};