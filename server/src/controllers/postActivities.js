const { Activity } = require("../db");

const postActivity = async ({ name, difficulty, duration, season, CountryId }) => {
    try {
        let activityCreated = await Activity.create({
            name,
            difficulty,
            duration,
            season,
        });

        activityCreated.setCountries(CountryId);
        return activityCreated.name;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = postActivity;