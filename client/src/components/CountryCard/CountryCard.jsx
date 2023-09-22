import style from "./CountryCard.module.css";

export default function CountryCard ({ flag, name, continents }) {   

return(
    <div className={style.cardContainer}>
        <h2 className={style.titleName}>{name}</h2>
        <h4>{continents}</h4>
        <div className={style.imgContainer} >
        <img  src={flag} alt={name}/>
        </div>
    </div>
)};
