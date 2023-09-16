const { Country, Activity } = require("../db")

const getAllCountries = async () => {
    try {
        let allCountries = await Country.findAll({ include: [Activity] });
        if (!allCountries[0]) throw new Error("There is no data.");
        return allCountries;
    } catch (error) {
        throw new Error(error.message)
    };
};

module.exports = getAllCountries;