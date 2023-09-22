export default function sortFunction({
    countries,
    searchBar,
    continents,
    activity,
    sortType,
    order
}) {
//Busqueda por nombre.
const byName = countries?.filter((country) => country.name.toLowerCase()?.includes(searchBar.toLowerCase()));

//Filtrado por continentes.
let byContinents = continents === "AllContinents"
    ? byName
    : byName?.filter(country => country.continents === continents);

//Filtrador por temporada de actividades.
if (activity === "With activities") byContinents = byContinents.filter(country => country.Activities.length > 0);
if (activity !== "All" && activity !== "With activities") byContinents = byContinents.filter((country) => country.Activities?.some((act) => act.season === activity));

//Ordenamientos.
byContinents?.sort((a, b) => {
    switch (sortType) {
        case "population":
            return order === "Ascending" ? a.population - b.population : b.population - a.population;
        case "name":
            return order === "Ascending" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        case "area":
            return order === "Ascending" ? a.area - b.area : b.area - a.area;
        default:
            return;
        };
    });
    return byContinents;
};
