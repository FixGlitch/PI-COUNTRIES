// Importa las dependencias necesarias
import React from "react";
import { NavLink } from "react-router-dom";
import style from "./LogIn.module.css";

export default function LogIn() {
  return (
    <div className={style.ALL}>
      <div>
        <NavLink to="/Home"><button className={style.btnTransparent}><span>ENTER</span></button></NavLink>
      </div>
    </div>
  );
}
