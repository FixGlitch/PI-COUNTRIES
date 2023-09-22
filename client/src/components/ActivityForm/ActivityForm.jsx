import "./ActivityForm.module.css"
import axios from "axios";
import { useState, useEffect } from "react";
import activityFormValidation from "../../validations/Validation";
import { useDispatch, useSelector } from "react-redux";
import {getAllCountries} from "../../redux/actions/getAllCountries";
import style from "./ActivityForm.module.css";

export default function ActivityForm(){
const countries = useSelector(({countries}) =>  countries)
const dispatch = useDispatch();
const POST_URL="http://localhost:3001/activities";
    
const [errors, setErrors] = useState({});
const [activityForm, setActivityForm] = useState(
    {
        name: "",
        difficulty: "1",
        duration: "1",
        season: "Spring",
        CountryId: []
       }
);
//Handlers.
const handleChange = (event) => {
    const {name, value, selectedOptions} = event.target;
    setErrors(activityFormValidation({
        ...activityForm,
        [name]: value
    }));
    if(name === "CountryId"){
        let selectedIds = Array.from(selectedOptions, (id) => id.value);
        setActivityForm({
            ...activityForm,
            [name]: selectedIds
        });
    } else {
        setActivityForm({
            ...activityForm,
            [name]: value
        });
    };
};

const handleSubmit = (event)=> {
    event.preventDefault();
    axios.post(POST_URL,activityForm)
    .then(res=>{dispatch(getAllCountries()); alert(res.data)} )
    .catch(error =>  alert(error.response.data) );
    setActivityForm({
        name: "",
        difficulty: "1",
        duration: "1",
        season: "Spring",
        CountryId: []
    })
};

return (
    <div className={style.containerForm} >
        <form onSubmit={handleSubmit} className={style.Form} method="post" >
            <div className={style.firstDiv}>
                <label htmlFor="name">Name: </label><br />
                <input className={style.textInput} 
                autoComplete="off"
                type="text" 
                name="name" 
                value={activityForm.name}
                onChange={handleChange} 
                placeholder="Activity name"/>
            </div>
                {errors.name && <span className={style.errorText} >{errors.name}</span>}
            <div className={style.firstDiv}>
                <label htmlFor="difficulty">Difficulty(1 to 5): </label><br />
                <input className={style.textInput} 
                type="number" 
                name="difficulty" 
                value={activityForm.difficulty}
                onChange={handleChange} />
            </div>
                {errors.difficulty && <span className={style.errorText} >{errors.difficulty}</span>}
            <div className={style.firstDiv}>
                <label htmlFor="duration">Duration(Hours): </label><br />
                <input className={style.textInput} 
                type="number"
                name="duration" 
                value={activityForm.duration}
                onChange={handleChange} 
                placeholder="Duration in hours" />
            </div>
                {errors.duration && <span className={style.errorText} >{errors.duration}</span>}
            <div className={style.firstDiv}>
                <label htmlFor="season">Select season: </label><br />
                <select className={style.selectContainer} name="season" onChange={handleChange}>
                    <option value="Spring">Spring</option>
                    <option value="Summer">Summer</option>
                    <option value="Autumn">Autumn</option>
                    <option value="Winter">Winter</option>
                </select>
            </div>
                {errors.season && <span className={style.errorText} >{errors.duration}</span>}
            <div className={style.firstDiv}>
                <label htmlFor="CountryId">Select Countries(ctrl+click):</label><br />
                <select className={style.selectContainer} multiple name="CountryId" onChange={handleChange} >
                    {countries.sort((a,b)=> a.name.localeCompare(b.name) ).map(({id, name})=> 
                    <option key={id} value={id} >{name}</option>) }
                </select>
            </div>
                {errors.CountryId && <span className={style.errorText} >{errors.CountryId}</span>}
            {Object.keys(errors).length === 0 && <button className={style.createButton} type="submit" >Create</button>}                
        </form>
    </div>
)};