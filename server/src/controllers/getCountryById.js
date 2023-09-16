const { Country, Activity } = require("../db");

const getCountryById = async (id) => {
    try {
        let countryById = await Country.findByPk(id, { include: [Activity] });
        if (countryById === null) throw new Error("Country not found.");
        return countryById;
    } catch (error) {
        throw new Error(error.message);
    };
};

module.exports = getCountryById;