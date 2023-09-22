const REGEX_NOT_EPMTY = /^(?!.*  )(?!\s*$).+/;
const SEASONS = ["Spring", "Winter", "Summer", "Autumn"];

const activityFormValidation = ({ name, difficulty, duration, season, CountryId }) => {
    let errors = {};
    //Name validations.
    if (!REGEX_NOT_EPMTY.test(name)) errors.name = "The field must not be empty and should not contain more than 1 consecutive whitespace.";
    if (name.length > 30) errors.name = "Maximum of 30 characters.";
    //Difficulty validation.
    if (difficulty < 1 || difficulty > 5) errors.difficulty = "The difficulty level must be from 1 to 5.";
    //Duration validation.
    if (duration < 1) errors.duration = "The duration must be at least 1 hour.";
    //Season validation.
    if (!SEASONS.includes(season)) errors.season = "Season must be Spring, Summer, Winter, or Autumn.";
    //Countries select validations.
    if (CountryId.length == 0) errors.CountryId = "Select al least one country.";
    return errors;
};

export default activityFormValidation;