const { Activity } = require("../db");


const getAllActivities = async () => {
    try {
        let allActivities = await Activity.findAll();
        if (!allActivities[0]) throw new Error("There are no activities.");
        return allActivities;
    } catch (error) {
        throw new Error(error.message);
    };
};

module.exports = getAllActivities;