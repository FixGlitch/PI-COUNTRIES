import React from "react";
import style from "./About.module.css";
import img from "../../assets/lucas.jpg";

export default function About () {
    return (
        <>
            <section className={style.aboutSection} >
                <img className={style.Profile} src={img}></img>
                <h1>Lucas Blanco</h1>
                <h2>Fullstack Developer</h2>
            </section>
        </>
    )
};