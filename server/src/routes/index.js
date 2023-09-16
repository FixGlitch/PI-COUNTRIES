const { Router } = require("express");
const router = Router();

//Controllers.
const getAllCountries = require("../controllers/getAllCountries.js");
const getCountryById = require("../controllers/getCountryById.js");
const getCountryByName = require("../controllers/getCountrybyName.js");
const postActivity = require("../controllers/postActivities.js");
const getAllActivities = require("../controllers/getAllActivities.js");

//Rutas
router.get("/countries", async (req, res) => {
    try {
        let allCountries = await getAllCountries();
        return res.status(200).json(allCountries);
    } catch (error) {
        return res.status(400).json(error.message);
    };
});

router.get("/countries/id/:id", async (req, res) => {
    let { id } = req.params;
    try {
        let countrybyId = await getCountryById(id);
        return res.status(200).json(countrybyId);
    } catch (error) {
        return res.status(400).json(error.message);
    };
});

router.get("/countries/name", async (req, res) => {
    let { name } = req.query;
    try {
        let countriesByName = await getCountryByName(name);
        return res.status(200).json(countriesByName);
    } catch (error) {
        return res.status(400).json(error.message)
    };
});

router.post("/activities", async (req, res) => {
    try {
        let activiy = await postActivity(req.body);
        
        return res.status(200).json(`The "${activiy}" activity has been created sucessfully.`)
    } catch (error) {
        return res.status(400).json(error.message)
    };
});

router.get("/activities", async (req, res) => {
    try {
        let allActivities = await getAllActivities();
        return res.status(200).json(allActivities)
    } catch (error) {
        return res.status(400).json(error.message);
    };
});

module.exports = router;