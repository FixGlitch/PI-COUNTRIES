const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const { Country } = require("./src/db.js");
const PORT = 3001;

conn.sync({ force: true }).then(() => {
//We load all the paise to our DB.
  axios.get("http://localhost:5000/countries")
    .then((response) => {
      let allCountries = response.data;
      allCountries.forEach(({ cca3, name, flags, continents, capital, subregion, area, population }) => {
        if (!capital) {
          capital = ["Without Capital"];
        }
        Country.create({
          id: cca3,
          name: name.common,
          flag: flags.png,
          continents: continents[0],
          capital: capital[0],
          subregion: subregion,
          area: area,
          population: population
        })
      });
    });

  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });

});
