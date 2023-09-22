import React from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllCountries} from "../../redux/actions/getAllCountries"
import CardsOptions from "../../components/CardsOptions/CardsOption";



export default function Home () {
    const countries = useSelector(({countries}) => countries);
    const dispatch = useDispatch();

    useEffect(()=>{
        !countries.length&&
        dispatch(getAllCountries());
    },[])

    return(
        <div>
            <CardsOptions/>
            <CardsContainer/>
        </div>
    )
}