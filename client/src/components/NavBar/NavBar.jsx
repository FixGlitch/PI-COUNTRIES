import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import style from "./NavBar.module.css"

export default function NavBar () {

const {pathname} = useLocation();

    return (
        <div className={style.navContainer} >
            {pathname !== "/Home"&&
            <NavLink to="/Home"><button>Home</button></NavLink>}
            {pathname !== "/About"&&
            <NavLink to="/About"><button>About</button></NavLink>}
            {pathname !== "/ActivityForm"&&
            <NavLink to="/ActivityForm"><button>Create activity</button></NavLink>}
            <NavLink className={style.logButton} to="/"><button >Log out</button></NavLink>
        </div>
    )
};