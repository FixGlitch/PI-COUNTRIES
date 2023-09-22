import React, { useEffect, useState } from "react";
import CountryCard from "../CountryCard/CountryCard";
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";
import {NavLink} from "react-router-dom";

export default function CardsContainer () {
//accedo al estado global
const countriesSorted = useSelector(({countriesSorted})=> countriesSorted);
//estados locales
const [currentPage, setCurrentPage] = useState(1);
//Variables
const countriesPerPage = 10;
const totalCountries = countriesSorted.length;
const totalPages = Math.ceil(totalCountries / countriesPerPage);
const firstIndex = (currentPage-1)*countriesPerPage;
const lastIndex = countriesPerPage*currentPage;
const countriesToShow = countriesSorted.slice(firstIndex, lastIndex);
//Handlers.
const nextHandler = () => {
    let nextPage = currentPage + 1;
    if ( currentPage < totalPages) {
        setCurrentPage(nextPage)
    }
};
const prevHandler = () => {
    let prevPage = currentPage - 1;
    if (currentPage > 1) {
    setCurrentPage(prevPage);
    }
};
//Mando al inicio cuando se busca.
useEffect(()=>{
    setCurrentPage(1)
}, [countriesSorted]);
//Creao un array con el numero de pages y asignanmos su valor en base al index
const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

return(
    <div >
        <div className={style.CardsContainer}>
            {
            countriesToShow.length > 0
                ? countriesToShow.map(({id, flag, name, continents})=>
                    <NavLink className={style.navLink} key={id} to={`/Detail/${id}`} >
                        <CountryCard
                            key={id}
                            flag={flag}
                            name={name}
                            continents={continents}
                        />
                    </NavLink>
                )
                : <h1 className={style.noResults} >No results.</h1> }
        </div>
        <div className={style.buttonsContainer}>
            <input className={style.Buttons} type="button" value="Prev" name="Prev" onClick={prevHandler} />
            {pageNumbers.map(page => (
                <button className={(page === currentPage)? style.Buttons:style.Buttons} key={page} onClick={()=> setCurrentPage(page)} >{page}</button>
            ))}
            <input className={style.Buttons} type="button" value="Next" name="Next" onClick={nextHandler} />
        </div>
    </div>
    )
}