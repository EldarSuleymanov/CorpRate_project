export const constants = {
    SET_CITY_COUNTRY_GENDER_DATA: 'SET_CITY_COUNTRY_GENDER_DATA',
    REGISTER_USER: 'REGISTER_USER',
};

export const setCityData = () => ({
    type: constants.SET_CITY_COUNTRY_GENDER_DATA,
});

export const registerUser = () => ({
    type: constants.REGISTER_USER,
});
